import  React, { Fragment } from "react";
import { Message, Divider , Dropdown } from 'semantic-ui-react';
import MealForm from './meal-form';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from './container';
import "./index.scss";

class MealsTab extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { selectedRoom: this.props.rooms[0]};
    }

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
        const initialMealsWhichLeft = e.mealsInRoom.filter(x => x.id);
        const forCreate = e.mealsInRoom.filter(x => !x.id);
        const forDelete = initialMeals.filter(x => !initialMealsWhichLeft.map(x => x.id).includes(x.id));

        let forUpdate = [];
        initialMealsWhichLeft
        .forEach(x => {
            let initialItem = initialMeals.find(item => item.id === x.id);
            if(String(initialItem.price) !== String(x.price) || initialItem.mealType.name !== x.type.name || initialItem.meal.name !== x.name.name)
                forUpdate = forUpdate.concat([x]);
        });

        this.props.updateRoomMeals({ forCreate, forDelete, forUpdate, roomId });
    }

    render(){
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
                        room={this.state.selectedRoom}/>
                </div>
            </Fragment>
            );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MealsTab);