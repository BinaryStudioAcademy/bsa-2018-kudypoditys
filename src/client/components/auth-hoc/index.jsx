import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";

class AuthHOC extends React.Component {
    componentWillMount() {
        this.props.getCurrentUser();
    }

    render() {
        const { Component, ElseComponent, user } = this.props;

        if (!user) {
            return ElseComponent ? <ElseComponent /> : null;
        }
        return <Component />;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthHOC);
