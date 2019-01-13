import React, { Fragment, Component } from "react";
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "./container";
import PropertyForm from "../../components/property-form";
import "./index.scss";
import Header from "../../components/header";

export class EditPropertyPage extends Component {
    componentWillMount() {
        this.props.getProperty(this.props.match.params.id);
    }

    render() {
        return (
            <Fragment>
                <Header />
                <PropertyForm property={this.props.property} isEdit={true}/>
            </Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPropertyPage);
