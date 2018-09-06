import React, { Fragment, Component } from "react";
import { connect } from 'react-redux';
import './index.scss';
import { Card, Button, Form, List } from "semantic-ui-react";
import ComplexInput from './complexInput.jsx';
import FormTextInput from './input-form';
import { required, number, maxLength } from 'client/regexValidationService';
import { Field, FieldArray, reduxForm, getFormValues } from 'redux-form';
import semanticSelectorFormField from './dropdown-form/semanticSelectorForm.jsx'
import { type, smoking } from './options.js';

import { roomTypesGet } from '../../logic/room-types/actions';
import { editRoomIndexUpdate } from '../../logic/1test-rooms-tab/actions';

import RoomItems from '../room-items';

import renderField from '../input-form/renderField';
import renderTextarea from '../input-form/textarea';
import renderDropdown from '../input-form/dropdown';


class RoomForm extends Component {
  render() {
    const { handleSubmit, handleCancel, roomTypesOptions } = this.props;

    return (
      <Form onSubmit={handleSubmit} >
        <Field
          name={`price`}
          type="number"
          component={renderField}
          label="Price"
          validate={[required]}
        />
        <Field
          name={`amount`}
          type="number"
          component={renderField}
          label="Amount"
          validate={[required]}
        />
        <Field
          name={`area`}
          type="number"
          component={renderField}
          label="Area"
          validate={[required]}
        />
        <Field
          name={`description`}
          component={renderTextarea}
          label="Description"
          validate={[required]}
        />
        <Field
          component={renderDropdown}
          options={roomTypesOptions}
          name={`roomType`}
          label="Room type"
          icon="home"
          validate={[required]}
        />
        <Button type="submit">Save</Button>

        <Button type="button" onClick={handleCancel}>Cancel</Button>
      </Form>
    );
  }
}

const RoomReduxForm = reduxForm({
  form: 'roomForm'
})(RoomForm);


class RoomsPropertyRegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomType: '',
      roomSmoking: '',
      roomAmount: '',
      roomSquare: '',
      roomPrice: '',
      beds: {},
      maxGuests: '',
      activeIndex: -1
    }
  }

  componentDidMount() {
    const { roomTypes } = this.props;
    if (!roomTypes || roomTypes.length === 0) {
      this.props.getRoomTypes();
    }
  }

  valToString(val) {
    var value = ''
    for (var sym in val) {
      value += typeof (val[sym]) === 'string' ?
        val[sym]
        :
        ''
    }
    return value
  }
  handleTypeChange(e) {
    const value = this.valToString(e);
    this.setState({ roomType: value })
  }
  handleSmokeChange(e) {
    const value = this.valToString(e);
    this.setState({ roomSmoking: value })
  }
  handleRoomAmountChange(e) {
    const value = e.target.value
    this.setState({ roomAmount: value })
  }
  handleRoomSquareChange(e) {
    const value = e.target.value
    this.setState({ roomSquare: value })
  }
  handleRoomPriceChange(e) {
    const value = e.target.value
    this.setState({ roomPrice: value })
  }
  handleComplexInputChange(beds, guests) {
    this.setState({ beds: beds })
    this.setState({ maxGuests: guests })
  }

  updateActiveIndex = (newIndex) => {
    this.props.updateEditRoomIndex(newIndex);
  }

  renderRoomForm = ({ fields, meta: { error, dirty, valid, submitFailed } }) => {
    const { rooms, roomTypes } = this.props;
    const { editRoomIndex } = this.props;
    const activeRoom = `rooms[${editRoomIndex}]`;
    console.log("active index on render: ", editRoomIndex);

    const roomTypesOptions = roomTypes.map((x, i) => ({
      key: i,
      value: x,
      text: x.name
    }));

    return (
      <List divided relaxed>
        {editRoomIndex !== -1 ||
          <List.Item>
            <RoomItems rooms={rooms}
              handleDelete={(index) => fields.splice(index, 1)}
              handleEdit={(index) => { this.updateActiveIndex(index) }}
            />

            <Button type="button" onClick={() => { this.updateActiveIndex(fields.length); }}>
              Add Room
            </Button>
            {submitFailed && error && <span>{error}</span>}
          </List.Item>
        }

        {editRoomIndex === -1 ||
          <List.Item>
            <h4>Room #{editRoomIndex + 1}</h4>

            <RoomReduxForm
              initialValues={rooms && rooms[editRoomIndex] || {}}
              handleCancel={() => this.updateActiveIndex(-1)}
              onSubmit={(room) => {
                fields.push(room);
                this.updateActiveIndex(-1);
              }}
              roomTypesOptions={roomTypesOptions}
            />

            {/* <FieldArray name={`${member}.hobbies`} component={renderHobbies} /> */}
          </List.Item>
        }
      </List>
    );
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;


    return (
      <Fragment>
        <Form id="regFormRoom" onSubmit={handleSubmit}></Form>
        <Card style={{ width: '900px' }} color='teal'>
          <Card.Content>
            <Card.Description style={{ fontSize: '18px' }}>
              TEST NEW ROOMS
                </Card.Description>
            <br />
            <FieldArray form="regFromRoom" name={`rooms`} component={this.renderRoomForm} rerenderOnEveryChange={true} />
          </Card.Content>
        </Card>

        {/* <Card style={{ width: '900px' }} color='teal'>
              <Card.Content>
                <Card.Description style={{ fontSize: '18px' }}>
                  Виберіть
                        </Card.Description><br />
                <Field
                  style={{ margin: '0 0 0 10px', width: '120px' }}
                  name="type"
                  component={semanticSelectorFormField}
                  as={Form.Select}
                  options={type}
                  onChange={this.handleTypeChange.bind(this)}
                  label="Тип номеру"
                  placeholder="Виберіть"
                  validate={required} />
                <br />
                <Field style={{ margin: '0 0 0 10px' }}
                  name="smoking"
                  component={semanticSelectorFormField}
                  as={Form.Select}
                  options={smoking}
                  onChange={this.handleSmokeChange.bind(this)}
                  label="Куріння"
                  placeholder="Виберіть"
                  validate={required} />
                <br />

                <label htmlFor="roomsAmount">Кількість номерів цього типу</label>
                <Field
                  component={FormTextInput}
                  as={Form.Input}
                  name="roomsAmount"
                  key='roomsAmount'
                  onChange={this.handleRoomAmountChange.bind(this)}
                  type="text"
                  validate={[required, number, maxLength(3)]} />
              </Card.Content>
            </Card>

            <Card style={{ width: '900px' }} color='teal'>
              <Card.Content>
                <Card.Description style={{ fontSize: '18px' }}>
                  Ліжка
                        </Card.Description><br />
                <ComplexInput onchange={this.handleComplexInputChange.bind(this)} />
              </Card.Content>
            </Card>

            <Card style={{ width: '900px' }} color='teal'>
              <Card.Content>
                <Card.Description style={{ fontSize: '18px' }}>
                  Площа номера(необов'язково)
                        </Card.Description><br />
                <label htmlFor="roomsAmount"></label>
                <Field
                  component={FormTextInput}
                  as={Form.Input}
                  name="roomSquare"
                  key="roomSquare"
                  onChange={this.handleRoomSquareChange.bind(this)}
                  label="кв.м"
                  type="text"
                  validate={number} />
              </Card.Content>
            </Card>
            <Card style={{ width: '900px' }} color='teal'>
              <Card.Content>
                <Card.Description style={{ fontSize: '18px' }}>
                  Базова ціна за ніч
                        </Card.Description><br />
                <span className='form-info'>
                  Це найнижча ціна, яку ми автоматично застосовуємо
                  до цього номера на всі дати.
                  Перш ніж ваше помешкання почне отримувати бронювання,
                  ви можете налаштувати сезонні ціни в особистому кабінеті.
                            </span>
                <label htmlFor="roomPrice">Ціна за 1 особу</label>
                <Field
                  component={FormTextInput}
                  as={Form.Input}
                  name="roomPrice"
                  key="roomPrice"
                  onChange={this.handleRoomPriceChange.bind(this)}
                  label="UAH/ніч"
                  type="text"
                  validate={[required, number, maxLength(3)]} />
              </Card.Content>
            </Card>

            <Button type="submit" color='teal' style={{ width: '800px', margin: 'auto' }}
              disabled={pristine || submitting} >Continue</Button>

          </Fragment> */}
        <Button
          color="teal"
          fluid
          disabled={pristine || submitting}
          type="submit"
          form="regFormRoom"
        >Continue</Button>
      </Fragment>
    )
  }
}


const ReduxForm = reduxForm({
  form: 'propertyRegistrationForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(RoomsPropertyRegistrationForm);

export default connect((state) => {
  const values = getFormValues('propertyRegistrationForm')(state) || {};
  const { roomTypes } = state.roomTypes;
  const { editRoomIndex } = state.testRoomsTab;
  return {
    rooms: values.rooms,
    roomTypes,
    editRoomIndex
  }
}, (dispatch) => ({
  getRoomTypes: () => dispatch(roomTypesGet()),
  updateEditRoomIndex: (index) => dispatch(editRoomIndexUpdate(index))
}))(ReduxForm);
