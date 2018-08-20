import { layoutTabUpdate } from "client/logic/room-item/actions";

export function mapStateToProps(state) {
    const { propertyLayoutTab } = state;
    return {
        ...propertyLayoutTab,
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        onSubmit(data) {
            console.log("mapDispatchToProps dispatch( amenitiesTabUpdate(data)"+JSON.stringify(data))
            dispatch(layoutTabUpdate(data));
        }
    }
}