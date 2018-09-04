import React, { Component } from "react";
import Header from "client/components/header";
import "./index.scss";
import history from "client/history";
import ModalByUrl from "client/components/modal-by-url";
import BannerList from "client/components/banner-list";
export class HomePage extends Component {
    handleSearchResults = () => {
        //todo
    }
    render() {
        return (
            <div className="main--wraper">
                <Header showSearch={true}
                    handleSearchResults={this.handleSearchResults}
                />

                <ModalByUrl
                    openBy={history.location.search === "?verified"}
                    cancelTo={""}
                    submitTo={"/login"}
                    cancelText={"Not now"}
                    submitText={"Login"}
                    heading={"Thank You! Your email is verified."}
                    content={"Now you can login."}
                />

                <BannerList />
            </div>
        );
    }
}
