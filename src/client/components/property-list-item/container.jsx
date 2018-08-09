import { foundProperties} from 'client/logic/property-list-item/actions';

export function mapStateToProps(state) {
    const {foundProperties} = state;
    return {
        activeItem: foundProperties.activeItem
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        onSelect(value) {
            dispatch(foundProperties({activeItem: value}));
        }
    };
}