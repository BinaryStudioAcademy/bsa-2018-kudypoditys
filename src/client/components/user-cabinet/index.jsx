import React from "react";
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "./container";
import history from "client/history";


export class UserCabinet extends React.Component {
    render() {
        const {user} = this.props;
        if (!user) {
            history.push("/login");
            return null;
        }
        return (
            <React.Fragment>
                <h1>User: {user.fullName}</h1>
                <button onClick={this.props.logout}>Logout</button>
            </React.Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserCabinet);
