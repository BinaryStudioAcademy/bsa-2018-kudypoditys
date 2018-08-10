import React from "react";
import "./index.scss";
import { Grid, Image } from "semantic-ui-react";
import Search from "client/components/search";
import Breadcrumbs from "client/components/breadcrumbs";
import SearchSummary from "client/components/search-summary";
import RankingBar from "client/components/ranking-bar";
import PropertyListItem from "../property-list-item";
import { Pagination } from "../pagination";
// import Quickfilter from "../quick-filter";
//import Pagination from "../quick-filter";

export class SearchPage extends React.Component {
    render() {
        return (
            <div className="search-page__wrapper" style={{ marginTop: "5%" }}>
                <Grid>
                    <Grid.Column
                        centered
                        width={16}
                        style={{
                            marginLeft: "2%"
                        }}
                    >
                        <Breadcrumbs
                            sections={[
                                { key: "Home", content: "Home", href: "#" },
                                {
                                    key: "Ukraine",
                                    content: "Ukraine",
                                    href: "#"
                                },
                                { key: "Lviv", content: "Lviv", href: "#" },
                                {
                                    key: "Awesome Apart",
                                    content: "Awesome Apart",
                                    active: true
                                }
                            ]}
                        />
                    </Grid.Column>

                    <Grid.Row>
                        <Grid.Column
                            left
                            width={3}
                            style={{
                                marginLeft: "2%"
                            }}
                        >
                            <Search
                                key="Search"
                                view="panel"
                                adults={1}
                                rooms={1}
                                children={0}
                            />
                            <Image
                                src="//c1.staticflickr.com/4/3056/3076562323_99e673ea27.jpg"
                                size="small"
                            />
                        </Grid.Column>

                        <Grid.Column
                            right
                            width={12}
                            style={{
                                marginLeft: "2%"
                            }}
                        >
                            <SearchSummary />
                            <RankingBar key="RankingBar" />
                            <PropertyListItem
                                key="PropertyListItem"
                                id="foundProperty1"
                            />
                            <Pagination pagesCount={10} />
                        </Grid.Column>
                    </Grid.Row>

                    {/* <Grid.Row>
                        <Grid.Column centered width={10}>
                            <SearchSummary />

                        </Grid.Column>
                        <Grid.Column centered width={10}>
                            <RankingBar key="RankingBar" />
                        </Grid.Column>
                        <Grid.Column centered width={10}>
                            <PropertyListItem
                                key="PropertyListItem"
                                id="foundProperty1"
                            />
                        </Grid.Column>
                        <Grid.Column centered width={10}>

                        </Grid.Column>
                    </Grid.Row> */}
                </Grid>
            </div>
        );
    }
}
export default SearchPage;
