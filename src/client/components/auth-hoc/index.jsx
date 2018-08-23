import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import history from "client/history";

class AuthHOC extends React.Component {
    render() {
        const { component, user } = this.props;
        if (!user) {
            history.push("/login");
            return null;
        }
        return component;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthHOC);
