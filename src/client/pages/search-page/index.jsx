import React from "react";
import "./index.scss";
import {Grid} from "semantic-ui-react";

import Breadcrumbs from "client/components/breadcrumbs";
import SearchSummary from "client/components/search-summary";
import RankingBar from "client/components/ranking-bar";
import PropertyListItem from "client/components/property-list-item";
import {Pagination} from "client/components/pagination";
import BasicMapWidget from "client/components/basic-map-widget";
import Header from "client/components/header";
import {Breadcrumb} from "semantic-ui-react";
import QuickFilter from "client/components/quick-filter";
import {connect} from "react-redux";
import {mapStateToProps} from "./container";

class SearchPage extends React.Component {
    render() {
        return (
            <div className="search-page__wrapper">
                <Grid>
                    <Grid.Column width={16}>
                        <Header showSearch={true} />
                    </Grid.Column>
                    <Grid.Column
                        width={16}
                        style={{
                            marginLeft: "2%",
                            paddingTop: "0%",
                            paddingBottom: "0%"
                        }}
                    >
                        <Breadcrumb
                            icon="right angle"
                            sections={[
                                {key: "Home", content: "Home", href: "#"},
                                {
                                    key: "Ukraine",
                                    content: "Ukraine",
                                    href: "#"
                                },
                                {key: "Lviv", content: "Lviv", href: "#"}
                            ]}
                        />
                    </Grid.Column>
                    <Grid.Row>
                        <Grid.Column
                            mobile={16}
                            tablet={16}
                            computer={3}
                            style={{
                                marginLeft: "2%"
                            }}
                        >
                            <QuickFilter />
                            <div
                                style={{
                                    marginTop: "4%"
                                }}
                            >
                                <BasicMapWidget
                                    key="BasicMapWidget"
                                    latitude={49.837089}
                                    longitude={24.021161}
                                    rounded
                                    centered
                                />
                            </div>
                        </Grid.Column>
                        <Grid.Column
                            mobile={16}
                            tablet={16}
                            computer={12}
                            style={{
                                marginLeft: "2%"
                            }}
                        >
                            <SearchSummary/>
                            <RankingBar key="RankingBar"/>
                            <PropertyListItem
                                key="PropertyListItem"
                                id="foundProperty1"
                            />
                            <Pagination pagesCount={10}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default connect(mapStateToProps)(SearchPage);
