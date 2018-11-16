import React, { Fragment, Component } from "react";
import { connect } from 'react-redux';
import { Label } from "semantic-ui-react";
import './index.scss';
import { Header, Button, Form, List, Container } from "semantic-ui-react";
import { FieldArray, reduxForm } from 'redux-form';
import { required } from "client/regexValidationService";

import RoomItems from './room-items';
import RoomForm from './room-form';

import { mapStateToProps, mapDispatchToProps } from './container';

class RoomsPropertyForm extends Component {
  state = {
    activeIndex: -1
  }

  componentDidMount() {
    const { roomTypes, bedTypes } = this.props;

    if (!roomTypes || roomTypes.length === 0) {
      this.props.getRoomTypes();
    }

    if (!bedTypes || bedTypes.length === 0) {
      this.props.getBedTypes();
    }
  }

  updateActiveIndex = (newIndex) => {
    this.props.updateEditRoomIndex(newIndex);
  }

  renderRoomFields = ({ fields, meta: { error, submitFailed } }) => {
    const { rooms, roomTypes, bedTypes } = this.props;
    const { editRoomIndex } = this.props;
    const currentRoom = rooms && rooms[editRoomIndex];

    const bedTypesOptions = bedTypes.map((x, i) => ({
      key: i,
      value: x,
      text: x.name
    }));

    const roomTypesOptions = roomTypes.map((x, i) => ({
      key: i,
      value: x,
      text: x.name
    }));

    return (
      <List divided relaxed>
        {editRoomIndex !== -1 ? <Fragment /> :
          <List.Item>
            <RoomItems rooms={rooms}
              handleDelete={(index) => fields.splice(index, 1)}
              handleEdit={(index) => { this.updateActiveIndex(index) }}
            />

            <Button className="add-room-btn" type="button" onClick={() => { this.updateActiveIndex(fields.length); }}>
              Add Room
            </Button>
            {submitFailed && error && <Label color='red' pointing="left">{error}</Label> || <Fragment />}
          </List.Item>
        }

        {editRoomIndex === -1 ? <Fragment /> :
          <List.Item>
            <h4>Room #{editRoomIndex + 1}</h4>

            <RoomForm
              initialValues={currentRoom || {}}
              handleCancel={() => this.updateActiveIndex(-1)}
              onSubmit={(room) => {
                if (currentRoom) {
                  fields.remove(editRoomIndex);
                }
                console.log(room);
                fields.push(room);
                this.updateActiveIndex(-1);
              }}
              roomTypesOptions={roomTypesOptions}
              bedTypesOptions={bedTypesOptions}
            />
          </List.Item>
        }
      </List>
    );
  }

  render() {
    const { handleSubmit, pristine, submitting, isEdit } = this.props;

    return (
      <Fragment>
        <Form id="roomsPropertyRegistrationForm" onSubmit={handleSubmit}></Form>

        <Container fluid>
          <Header as="h2" style={{ fontSize: '18px' }}>
            Rooms
            </Header>
          <FieldArray
              form="roomsPropertyRegistrationForm"
              name={`rooms`}
              component={this.renderRoomFields}
              validate={[required]}
          />
        </Container>

        <Button
          color="teal"
          fluid
          disabled={!(isEdit || !pristine) || submitting}
          type="submit"
          form="roomsPropertyRegistrationForm"
        >Continue</Button>
      </Fragment>
    )
  }
}


const ReduxForm = reduxForm({
  form: 'propertyForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(RoomsPropertyForm);

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm);
