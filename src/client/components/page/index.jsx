import React, { Component, Fragment } from "react";
import "./index.scss";
import Header from "../header";
import Footer from "../footer";


class Page extends Component {

    render() {
        return (<Fragment>
            <Header></Header>
            {this.props.children}
            <Footer></Footer>
        </Fragment>);
    }
}

export default Page;
