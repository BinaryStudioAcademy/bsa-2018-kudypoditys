import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Label } from 'semantic-ui-react';

export class NavigationBar extends React.Component {
    render() {
        return (
            <Menu stackable fluid widths={4}>
                <Menu.Item
                    name='info-and-price'
                    onClick={this.handleItemClick}
                >
                    Room info and price
                </Menu.Item>

                <Menu.Item
                    name='facilities'
                    onClick={this.handleItemClick}
                >
                    Facilities
                </Menu.Item>

                <Menu.Item name='good-to-know'
                    onClick={this.handleItemClick}>
                    Good to know
                </Menu.Item>

                <Menu.Item name='reviews'
                    onClick={this.handleItemClick}>
                    Guest reviews
                    <Label color='teal'>1</Label>
                </Menu.Item>
            </Menu>
        )
    }
}