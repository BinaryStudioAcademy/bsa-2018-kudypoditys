import React, { Component } from 'react';
import { connect } from "react-redux";
import { FieldArray, reduxForm } from 'redux-form';
import { mapStateToProps, mapDispatchToProps } from './container';
import MealsInRoomFields from '../rooms-property-form/meals-in-room-fields'
import {
    Button,
    Icon,
} from "semantic-ui-react";
export class MealForm extends Component {

    state = { roomId : 0}

    componentWillMount(){
        this.setInitialValues(this.props.room);
    }

    componentWillReceiveProps(newProps){
        if(!(this.state.roomId === newProps.roomId))
        {
            this.setState({roomId : newProps.roomId});

            this.setInitialValues(newProps.room);
        }
    }

    setInitialValues(room){

        let items = room.mealInRooms
            .map(x => Object.assign({
                id : x.id,
                name : { name : x.meal ? x.meal.name : x.name.name},
                type : { name : x.mealType ? x.mealType.name : x.type.name },
                price : x.price,
                mealTypeId : x.mealTypeId,
                mealId : x.mealId
            }));

            this.props.change('mealsInRoom',items);
    }

    render(){

        const { meals, mealTypes , className, handleSubmit } = this.props;

        const mealOptions = meals.map((x, i) => ({
            key: i,
            value: x,
            text: x.name
        }));

        const mealTypesOptions = mealTypes.map((x, i) => ({
            key: i,
            value: x,
            text: x.name
        }));

        return (
            <form onSubmit={handleSubmit} className={className}>
            <FieldArray
                    name={`mealsInRoom`}
                    component={MealsInRoomFields}
                    mealOptions={mealOptions}
                    mealTypesOptions={mealTypesOptions}
                />
                    <Button
                        icon
                        labelPosition="left"
                        primary
                        size="small"
                        type="submit"
                    >
                        <Icon name="save outline" /> Save
                    </Button>
            </form>
        );
    }
}


MealForm = reduxForm({
    form: 'mealsForm',
})(MealForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MealForm);