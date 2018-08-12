import React from "react";
import "./index.scss";
import { Grid} from "semantic-ui-react";
import Search from "client/components/search";
import Breadcrumbs from "client/components/breadcrumbs";
import SearchSummary from "client/components/search-summary";
import RankingBar from "client/components/ranking-bar";
import PropertyListItem from "../property-list-item";
import { Pagination } from "../pagination";
import BasicMapWidget from '../basic-map-widget';

export class SearchPage extends React.Component {
    render() {
        return (
            <div className="search-page__wrapper" style={{ marginTop: "3%" }}>
                <Grid>
                    <Grid.Column
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
                                { key: "Lviv", content: "Lviv", href: "#" }
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
                            <Search
                                key="Search"
                                view="panel"
                                adults={1}
                                rooms={1}
                                children={0}
                            />
                            <BasicMapWidget
                                key ="BasicMapWidget"
                                location ={ {lat:  49.837089,  lng: 24.021161} }
                                rounded
                                centered
                            />
                        </Grid.Column>
                        <Grid.Column
                            mobile={16}
                            tablet={16}
                            computer={12}
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
                </Grid>
            </div>
        );
    }
}
export default SearchPage;
