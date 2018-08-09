import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Dropdown, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './index.scss';
import { mapStateToProps, mapDispatchToProps } from './container';

export class MainHeader extends Component {

    componentDidMount() {
        this.props.getCurrentUser();
        this.props.getCurrencies();
    }

    render() {
        const {
            currencies,
            selectedCurrency,
            currentUser
        } = this.props;

        return (
            <Grid padded>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        KudyPoditys
                    </Grid.Column>
                    <Grid.Column >
                        <Grid >
                            <Grid.Row columns={4}>
                                <Grid.Column>
                                    <Dropdown
                                        fluid
                                        selection
                                        name='currency'
                                        options={currencies}
                                        value={selectedCurrency}
                                        onChange={(event, input) => this.props.onCurrencyChange(input.value)}
                                    />
                                </Grid.Column>
                                <Grid.Column >
                                    <Button emphasis="primary">Login</Button>
                                </Grid.Column>
                                <Grid.Column>
                                    <Button >Register</Button>
                                </Grid.Column>
                                {currentUser ? <Grid.Column>
                                    Wellcome {currentUser.name}
                                </Grid.Column> : ''}
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
