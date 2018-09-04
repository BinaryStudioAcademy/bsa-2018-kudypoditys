import React from "react";
import Login from "client/components/login";
import "./index.scss";
import { Container } from "semantic-ui-react";
import Header from "client/components/header";

export default class LoginPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div
                    style={{
                        height: "100vh",
                        backgroundSize: "cover",
                        backgroundImage:
                            'url("https://s3.eu-central-1.amazonaws.com/kudypoditys/img/application/background.jpg")'
                    }}
                >
                    <Header hideSignUpIn noBackground />

                    <Login />
                </div>
            </React.Fragment>
        );
    }
}
