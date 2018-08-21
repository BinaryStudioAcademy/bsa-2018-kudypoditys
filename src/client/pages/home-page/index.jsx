import React, { Component, Fragment } from "react";
import Header from "client/components/header";
import "./index.scss";

export class HomePage extends Component {
    render() {
        return (
            <div className="main--wraper">
                <Header showSearch={true} />
            </div>
        );
    }
}
