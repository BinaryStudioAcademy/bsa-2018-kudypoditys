// import { searchUpdate } from 'client/logic/search/actions';

export function mapStateToProps(state, ownProps) {
    const {shownProperties} = state;
    return {
        propertyItemData: shownProperties[ownProps.id],

    };
}
