import React from 'react';
import './index.scss';
import { Grid } from 'semantic-ui-react';
import Search from 'client/components/search'
import Breadcrumbs from 'client/components/breadcrumbs'
import SearchSummary from 'client/components/search-summary';
import RankingBar from 'client/components/ranking-bar';
import PropertyListItem from '../property-list-item';
import Quickfilter from '../quick-filter';
import Pagination from '../quick-filter';


export class SearchPage extends React.Component {



    render() {



        return (
            <div className='search-page__wrapper'>
                <Grid>
                    <Grid.Column centered width={16} >

                        <Breadcrumbs />
                    </Grid.Column >
                    <Grid.Row>
                        <Grid.Column centered width={6}>
                            <Search
                                key="Search"
                                view='panel'


                                adults={1}
                                rooms={1}
                                children={0}
                            />

                        </Grid.Column>
                        <Grid.Column centered width={6}>

                            {/* add map widget */}
                        </Grid.Column>
                        <Grid.Column centered width={6}>
                            <Quickfilter
                                key="Quickfilter"
                                view='panel'
                            />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column centered width={10}>
                            <SearchSummary />
                            {/* add */}

                        </Grid.Column>
                        <Grid.Column centered width={10}>
                            <RankingBar key="RankingBar" />

                        </Grid.Column>
                        <Grid.Column centered width={10}>
                            <PropertyListItem
                                key="PropertyListItem"
                                id='foundProperty1'
                            />

                        </Grid.Column>
                        <Grid.Column centered width={10}>
                            <Pagination />

                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </div>
        )
    }

}
export default SearchPage;
