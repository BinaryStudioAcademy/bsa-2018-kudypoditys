import React from "react";
import "./index.scss";
import { Container, Grid, Segment, Icon } from "semantic-ui-react";

import Breadcrumbs from "client/components/breadcrumbs";
import SearchSummary from "client/components/search-summary";
import RankingBar from "client/components/ranking-bar";
import PropertyListItem from "client/components/property-list-item";
import Pagination from "client/components/pagination";
import BasicMapWidget from "client/components/basic-map-widget";
import Header from "client/components/header";
import { Breadcrumb } from "semantic-ui-react";
import QuickFilter from "client/components/quick-filter";

import { connect } from "react-redux";
import { mapStateToProps } from "./container";
import history from "client/history";

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: [],
            itemCount: 0,
            searchRequest: {},
            selectedPage: 1,
            properties: [{
                coordinates: {
                    lat: 49.837089,
                    lng: 24.021161
                }

            }]        };
    }
    handleSearchResults = searchData => {

        const listItems = searchData.searchResults.properties.map(property => (
            <PropertyListItem key={property.id} propertyItemData={property} />
        ));
        this.setState({
            listItems: listItems,
            itemCount: searchData.searchResults.propertiesCount,
            searchRequest: searchData.searchRequest,
            properties: searchData.searchResults.properties
        });
    };
    // onSortingSelected = value => {
    //     this.setState({ sortBy: value });
    // };
    // paginationChanged = (event, data) => {
    //     console.log("event" + Object.keys(event));
    //     console.log("data" + JSON.stringify(data));
    //     this.setState({ selectedPage: data.activePage });
    // };

    render() {
        return (
            <div className="mock">
                <Header
                    handleSearchResults={this.handleSearchResults}
                    showSearch={true}
                />
                <div className="search-page__wrapper">
                    <div className="breadcrumb_wrapper">
                        <Segment className="breadcrumb__segment" />
                    </div>

                    <Container className="search-page__wrapper-left_side">
                         <QuickFilter />

                        <div
                            style={{
                                marginTop: "4%"
                            }}
                        >
                            {/* { <BasicMapWidget
                                key="BasicMapWidget"
                                coordinates={{
                                    lat:this.state.properties[0]? parseFloat(this.state.properties[0].coordinates.lat):49.837089,
                                    lng: this.state.properties[0]?parseFloat(this.state.properties[0].coordinates.lng): 24.021161
                                }}
                                rounded
                                properties={this.state.properties}
                                //     {
                                //         coordinates: {
                                //             lat: this.state.properties[0].coordinates.lat,
                                //             lng:  this.state.properties[0].coordinates.lng
                                //         }
                                //     }
                                // ]}
                                centered
                            /> } */}
                        </div>
                    </Container>
                    <Container className="search-page__wrapper-right_side">
                        <div className="search-page__row">
                            <SearchSummary
                                totalCount={this.state.itemCount}
                                destination={this.state.searchRequest.query}
                            />
                            <div className="switch">
                                <div className="list_btn">
                                    <Icon name="list ul" color="white" />
                                    List
                                </div>
                                <div className="map_btn">
                                    <Icon name="world" />
                                    Map
                                </div>
                            </div>
                        </div>

                        <RankingBar
                            key="RankingBar"
                            onSortingSelected={this.onSortingSelected}
                        />
                        {this.state.listItems}
                        <div className="search-page__pagination">
                            <Pagination
                                pagesCount={this.state.itemCount / 5}
                            />
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(SearchPage);
