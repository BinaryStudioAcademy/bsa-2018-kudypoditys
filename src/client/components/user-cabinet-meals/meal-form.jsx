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
        this.props.getMeals();
        this.props.getMealTypes();
    }

    componentWillReceiveProps(newProps){
        if(!(this.state.roomId === newProps.roomId))
        {
            this.setState({roomId : newProps.roomId});

            let items = newProps.room.mealInRooms
            .map(x => Object.assign({
                id : x.id,
                name : {name : x.meal.name},
                type : {name : x.mealType.name},
                price : x.price
            }));

            this.props.change('mealsInRoom',items);
        }
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