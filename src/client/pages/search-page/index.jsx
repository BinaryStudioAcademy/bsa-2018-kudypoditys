import React from 'react';
import './index.scss';
import { Container, Segment, Icon, Button } from 'semantic-ui-react';
import SearchSummary from 'client/components/search-summary';
import RankingBar from 'client/components/ranking-bar';
import PropertyListItem from 'client/components/property-list-item';
import Pagination from 'client/components/pagination';
import Header from 'client/components/header';
import QuickFilter from 'client/components/quick-filter';
import MapGlobalWidget from 'client/components/map-global-widget';
import { connect } from 'react-redux';
import { mapStateToProps } from './container';


class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapProp: [],
            switch: 'list',
            listItems: [],
            itemCount: 0,
            searchRequest: {},
            selectedPage: 1,
            properties: [
                {
                    coordinates: {
                        lat: 49.837089,
                        lng: 24.021161,
                    },
                },
            ],
        };
    }
    handleSearchResults = searchData => {
       let properties= searchData.searchResults.properties.filter(property=>( property!==null))
        const listItems = properties.map(property => (
            <PropertyListItem key={property.id} propertyItemData={property} />
        ));
        this.setState({
            listItems: listItems,
            itemCount: searchData.searchResults.propertiesCount,
            searchRequest: searchData.searchRequest,
            properties: searchData.searchResults.properties,
        });
    };
    // onSortingSelected = value => {
    //     this.setState({ sortBy: value });
    // };
    // paginationChanged = (event, data) => {
    //     console.log('event' + Object.keys(event));
    //     console.log('data' + JSON.stringify(data));
    //     this.setState({ selectedPage: data.activePage });
    // };
    handleList_Map = (e, data) => {
        this.setState({
            switch: data.value,
            active: !this.state.active,
        });

        console.log(this.state.properties);
        let tempArr = [];

        console.log(this.state.properties);

        this.state.properties.forEach(i => {
            console.log(i.rooms[0]);
            tempArr.push({
                price: i.rooms[0].price,
                name: i.name,
                coordinates: {
                    lat: i.coordinates.lat,
                    lng: i.coordinates.lng,
                },
                latitude: i.coordinates.lat,
                longitude: i.coordinates.lng,
                imageSrc: i.images[0].url,
                address: i.address,
                rating: i.rating,
            });
        });

        this.setState({ mapProp: tempArr });
    };
    render() {
        const { active } = this.state;
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
                                marginTop: '4%',
                            }}
                        >
                        </div>
                    </Container>
                    <Container className="search-page__wrapper-right_side">
                        <div className="search-page__row">
                            <SearchSummary
                                totalCount={this.state.itemCount}
                                destination={this.state.searchRequest.query}
                            />
                            {this.state.itemCount === 0 ? null : (
                                <div className="switch">
                                    <Button
                                        icon
                                        className="list_btn"
                                        toggle
                                        active={!active}
                                        value="list"
                                        onClick={this.handleList_Map}
                                    >
                                        <Icon name="list ul" color="white" />
                                        List
                                    </Button>
                                    <Button
                                        icon
                                        className="map_btn"
                                        toggle
                                        active={active}
                                        value="map"
                                        onClick={this.handleList_Map}
                                    >
                                        <Icon name="world" />
                                        Map
                                    </Button>
                                </div>
                            )}
                        </div>
                        {this.state.switch === 'list' ? (
                            <div>
                                <RankingBar
                                    key="RankingBar"
                                    searchRequest={this.state.searchRequest}
                                    onSortingSelected={this.onSortingSelected}
                                />
                                {this.state.listItems}
                            </div>
                        ) : (
                            <div
                                className="search_page__globalMap"
                                style={{ marginTop: 20 }}
                            >
                                <MapGlobalWidget
                                    properties={this.state.mapProp}
                                    startPosition={{
                                        latitude: this.state.mapProp[0]
                                            .coordinates.lat,
                                        longitude: this.state.mapProp[0]
                                            .coordinates.lng,
                                    }}
                                    zoom={13}
                                    controlEnable={true}
                                />
                            </div>
                        )}

                        {/* <RankingBar
                            key="RankingBar"
                            onSortingSelected={this.onSortingSelected}
                        /> */}
                        {/* {this.state.listItems} */}
                        {/* <div className="search-page__pagination">
                            <Pagination
                                pagesCount={this.state.itemCount / 5}
                            />
                        </div> */}
                        {this.state.switch === 'list' ? (
                            <div className="search-page__pagination">
                                <Pagination
                                    pagesCount={this.state.itemCount / 5}
                                    // searchRequest={this.state.searchRequest}
                                />
                            </div>
                        ) : null}
                    </Container>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(SearchPage);
