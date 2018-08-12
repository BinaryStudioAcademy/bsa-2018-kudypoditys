import {sortUpdate} from 'client/logic/ranking-bar/actions';

export function mapStateToProps(state) {
    const {sortType} = state;
    return {
        activeItem: sortType.activeItem
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        onSelect(value) {
            dispatch(sortUpdate({activeItem: value}));
        }
    };
}