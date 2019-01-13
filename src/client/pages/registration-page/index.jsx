import React from "react";
import Registration from "../../components/registration";
import "./index.scss";
import Header from "../../components/header";

export default class RegistrationPage extends React.Component {
    render() {
        return (
            <div
                style={{
                    height: "100vh",
                    backgroundSize: "cover",
                    backgroundImage:
                        'url("https://s3.eu-central-1.amazonaws.com/kudypoditys/img/application/background.jpg")'
                }}
            >
                <Header hideSignUpIn noBackground />
                <Registration />{" "}
            </div>
        );
    }
}
