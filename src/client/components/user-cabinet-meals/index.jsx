import  React, { Fragment } from "react";
import { Message, Divider , Dropdown } from 'semantic-ui-react';
import MealForm from './meal-form';

import "./index.scss";

export class MealsTab extends React.Component
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
        console.log(e);
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
                    <MealForm className="meal-form-container" roomId={this.state.selectedRoom.id} onSubmit={this.handleSubmit} room={this.state.selectedRoom}/>
                 </div>
            </Fragment>
            );
    }

}