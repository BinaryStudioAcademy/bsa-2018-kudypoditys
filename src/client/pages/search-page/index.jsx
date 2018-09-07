import React from "react";
import "./index.scss";
import { Container, Grid, Segment, Icon, Button } from "semantic-ui-react";

import Breadcrumbs from "client/components/breadcrumbs";
import SearchSummary from "client/components/search-summary";
import RankingBar from "client/components/ranking-bar";
import PropertyListItem from "client/components/property-list-item";
import Pagination from "client/components/pagination";
import BasicMapWidget from "client/components/basic-map-widget";
import Header from "client/components/header";
import { Breadcrumb } from "semantic-ui-react";
import QuickFilter from "client/components/quick-filter";
import MapWidgetModal from "client/components/map-widget-modal";
import { connect } from "react-redux";
import { mapStateToProps } from "./container";
import history from "client/history";
import MapView from "../../components/map-view";

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapProp : [],
            switch: 'list',
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
    onSortingSelected = value => {
        this.setState({ sortBy: value });
    };
    paginationChanged = (event, data) => {
        console.log("event" + Object.keys(event));
        console.log("data" + JSON.stringify(data));
        this.setState({ selectedPage: data.activePage });
    };
    handleList_Map = (e, data) => {
        // console.log(e.target.value)
        // console.log( data.value)
        this.setState({
            switch: data.value
        })
        // console.log(this.state.switch)
        console.log(this.state.properties)
        let tempArr = []
        // this.props.state.search.data.properties.forEach(i => {
        //     tempArr.push(i)
        // })
        console.log(this.state.properties)

        this.state.properties.forEach(i => {
            console.log(i.rooms[0])
            tempArr.push({
                price: i.rooms[0].price,
                name: i.name,
                coordinates: {
                    lat:
                    i.coordinates.lat,
                    lng:
                    i.coordinates.lng
                },
                latitude:
                i.coordinates.lat,
                longitude: i.coordinates.lng,
                imageSrc: i.images[0].url,
                address: i.address,
                rating: i.rating
            })
        });

        this.setState({mapProp: tempArr})
        console.log(tempArr)
        console.log(this.state.mapProp)
    }
    render() {
        // console.log(this.state.listItems)

        // const properties = this.props.state.search.data
        console.log(this.state.mapProp)

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
                                <Button className="list_btn" value='list' onClick={this.handleList_Map}>
                                    <Icon name="list ul" color="white" />
                                    List
                                </Button>
                                <Button className="map_btn" value='map' onClick={this.handleList_Map}

                                >
                                    <Icon name="world" />
                                    Map
                                </Button>
                            </div>
                        </div>

                        <RankingBar
                            key="RankingBar"
                            searchRequest={this.state.searchRequest}
                            onSortingSelected={this.onSortingSelected}
                        />
                        {this.state.switch === 'list' ? this.state.listItems : <MapWidgetModal
                            properties={this.state.mapProp}
                            startPosition={{
                                latitude:
                                this.state.mapProp[0].coordinates
                                    .lat,
                                longitude:
                                this.state.mapProp[0].coordinates.lng
                            }}
                            zoom={13}
                            controlEnable={true}

                        />}


                        <div className="search-page__pagination">
                            <Pagination
                                pagesCount={this.state.itemCount / 5}
                                searchRequest={this.state.searchRequest}
                            />
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(SearchPage);
