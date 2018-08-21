import React, { Component } from 'react';
import { List, Header, Grid } from 'semantic-ui-react';

import './index.scss';


export default class Footer extends Component {

    render() {
        return (
            <Grid columns={4} id="footer" divided='vertically' padded="horizontally">
                <Grid.Row className="footer__content">
                    <Grid.Column className="footer__logo">
                        <Header as='h2'>KudyPoditys</Header>
                    </Grid.Column>
                    <Grid.Column className="footer__helpful-info">
                        <Header as='h4'>Helpful info</Header>
                        <List>
                            <List.Item>About us</List.Item>
                            <List.Item>Privacy</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column className="footer__languages">
                        <Header as='h4'>Languages</Header>
                        <List>
                            <List.Item>English</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column className="footer__contact-us">
                        <Header as='h4'>Contact us</Header>
                        <List>
                            <List.Item>
                                <List.Icon name='mail' />
                                <List.Content>kudypoditys@gmail.com</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='phone' flipped='horizontally' />
                                <List.Content>+380 63 897 524 62</List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>

                </Grid.Row>
                <Grid.Row className="footer__right" centered={true}>
                    © Kudypoditys 2018. All right reserved.
                </Grid.Row>
            </Grid>
        );
    }
}
