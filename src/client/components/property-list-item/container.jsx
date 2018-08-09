import {
    propertyItemUpdate,
    propertyItemInsert,
    propertyItemDelete,
    fetchPropertyItem,
    fetchAllProperty
} from 'client/logic/property-list-item/actions';
import { bindActionCreators } from 'redux';


export function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            propertyItemUpdate,
            propertyItemInsert,
            propertyItemDelete,
            fetchPropertyItem,
            fetchAllProperty
        }, dispatch)
    }
};

export function mapStateToProps(state) {
    const { property } = state;
    return {
        propertyItemData: property.propertyItemData
    };
}
