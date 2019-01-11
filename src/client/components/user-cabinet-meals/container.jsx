import { mealsGet } from 'client/logic/meals/actions';
import { mealTypesGet } from 'client/logic/meal-types/actions';
import { updateMealsInRoom } from 'client/logic/mealInRoom/actions';


export function mapStateToProps(state) {
    const { meals } = state.meals;
    const { mealTypes } = state.mealTypes;

    return {
        meals,
        mealTypes
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        getMeals: () => dispatch(mealsGet()),
        getMealTypes: () => dispatch(mealTypesGet()),
        updateRoomMeals: (data) => dispatch(updateMealsInRoom(data))
    };
}
