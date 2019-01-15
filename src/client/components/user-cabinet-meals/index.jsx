import  React, { Fragment } from "react";
import { Message, Divider, Dropdown, Modal, Button, Icon } from 'semantic-ui-react';
import MealForm from './meal-form';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from './container';
import _ from 'lodash';
import "./index.scss";

class MealsTab extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { selectedRoom: this.props.rooms[0], showMessage : false };
    }

    componentWillMount(){
        this.props.getMeals();
        this.props.getMealTypes();
    }

    handleOpen = () => this.setState({ showMessage: true })

    handleClose = () => this.setState({ showMessage: false })

    getRoomsOptions() {
        const { rooms } = this.props;
        const options = rooms.map((room, index) => {
            return {
                key: index,
                text: room.roomType.name,
                value: index
            };
        });
        return options;
    }

    selectedRoomChange = (e, { value }) => {
        const { rooms } = this.props;
        this.setState({ selectedRoom: rooms[value] });
    };

    handleSubmit(e){

        const { id : roomId , mealInRooms : initialMeals } = this.state.selectedRoom;

        const [initialMealsWhichLeft, forCreate] = _.partition(e.mealsInRoom, x => x.id);

        const forDelete = initialMeals
            .filter(x => !initialMealsWhichLeft.map(x => x.id).includes(x.id))
            .map(x => x.id);

        let forUpdate = [];

        initialMealsWhichLeft
        .forEach(x => {
            let initialItem = initialMeals.find(item => item.id === x.id);
            if (
                String(initialItem.price) !== String(x.price)
                || initialItem.mealType.name !== x.type.name
                || initialItem.meal.name !== x.name.name
            ) {
                forUpdate = forUpdate.concat([x]);
            }
        });

        this.props.updateRoomMeals({
                forCreate,
                forDelete,
                forUpdate,
                roomId,
                extra : {
                    initialMealsWhichLeft,
                    meals : this.props.meals,
                    mealTypes: this.props.mealTypes }
                });

        this.handleOpen();
    }

    render(){

        const { meals, mealTypes } = this.props;

        return (
            <Fragment>
                <Message info content="There you can manage meals in rooms." />
                <Divider />
                <p className="room-p">Room</p>
                <Dropdown
                    name="room"
                    selection
                    onChange={this.selectedRoomChange}
                    defaultValue={0}
                    options={this.getRoomsOptions()}
                />
                <Divider />
                <div>
                    <MealForm
                        className="meal-form-container"
                        roomId={this.state.selectedRoom.id}
                        onSubmit={this.handleSubmit.bind(this)}
                        room={this.state.selectedRoom}
                        meals={meals}
                        mealTypes={mealTypes}/>
                </div>
                <Modal
                    open={this.state.showMessage}
                    onClose={this.handleClose}
                    size='mini'>
                    <Modal.Content>
                        <h3>Meals successfully updated!</h3>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' onClick={this.handleClose}>
                            <Icon name='checkmark' /> Got it
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Fragment>
            );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MealsTab);