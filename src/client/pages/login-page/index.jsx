import React from "react";
import Login from "client/components/login";
import "./index.scss";
import { Container } from "semantic-ui-react";

export default class LoginPage extends React.Component {
    render() {
        return (
            <Container className="login--wraper">
                <Login />
            </Container>
        );
    }
}
