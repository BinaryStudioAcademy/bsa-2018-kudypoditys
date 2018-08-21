import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import history from "client/history";

export class UserCabinet extends React.Component {
    render() {
        const { user } = this.props;
        if (!user) history.push("/login");
        return <h1>User: {user.fullName}</h1>;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserCabinet);
