import React, { Component } from "react";
import Header from "client/components/header";
import "./index.scss";
import BannerList from "client/components/banner-list";
export class HomePage extends Component {
    handleSearchResults = () => {
        //todo
    };
    render() {
        return (
            <div className="main--wraper">
                <Header
                    showSearch={true}
                    handleSearchResults={this.handleSearchResults}
                    noBackground
                />
                <BannerList />
            </div>
        );
    }
}
