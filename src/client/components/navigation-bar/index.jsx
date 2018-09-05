import React from "react";
import PropTypes from "prop-types";
import { Menu, Label, Divider } from "semantic-ui-react";
import "./index.scss";

export class NavigationBar extends React.Component {
    render() {
        return (
            <Menu
                className="property-page-navigation"
                stackable
                fluid
                text
                widths={4}
            >
                <Menu.Item
                    name="info-and-price"
                    onClick={this.props.infoClick}
                    children="Room info and price"
                />

                <Menu.Item
                    name="facilities"
                    onClick={this.props.facilitiesClick}
                    children="Facilities"
                />
                <Menu.Item name="reviews" onClick={this.props.reviewsClick}>
                    Guest reviews
                    <Label className="reviews-label">
                        {this.props.reviewsCount}
                    </Label>
                </Menu.Item>
            </Menu>
        );
    }
}

NavigationBar.defaultProps = {
    reviewsCount: 0
};

NavigationBar.propTypes = {
    reviewsCount: PropTypes.number.isRequired
};
