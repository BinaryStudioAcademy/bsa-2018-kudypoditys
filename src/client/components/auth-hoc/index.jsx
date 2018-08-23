import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";

class AuthHOC extends React.Component {
    componentWillMount() {
        this.props.getCurrentUser();
    }

    render() {
        const { component, user } = this.props;
        if (!user) {
            return null;
        }
        return new component().render();
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthHOC);
