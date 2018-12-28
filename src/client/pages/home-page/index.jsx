import React, { Component } from "react";
import Header from "client/components/header";
import "./index.scss";
import BannerList from "client/components/banner-list";
export class HomePage extends Component {
					handleSearchResults = () => {
							//todo
					};
					onDestinationChange = () => {};
					onCheckInChange = () => {};
					onCheckOutChange = () => {};
					onAdultsChange = () => {};
					onChildrenChange = () => {};
					onRoomsChange = () => {};
					render() {
            return (<div className="main--wraper">
              <Header showSearch={true} handleSearchResults={this.handleSearchResults}
                onDestinationChange={this.onDestinationChange}
                onCheckInChange={this.onCheckInChange}
                onCheckOutChange={this.onCheckOutChange}
                onAdultsChange={this.onAdultsChange}
                onChildrenChange={this.onChildrenChange}
                onRoomsChange={this.onRoomsChange}
                noBackground />
              <BannerList />
            </div>
            );
					}
       }
