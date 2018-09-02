import React from "react";
import "./index.scss";
import { Divider, Container } from "semantic-ui-react";
import PropTypes from "prop-types";

export default class PropertyDescription extends React.Component {
    // todo add icons to every facility regarding of type

    render() {
        const { property } = this.props,
            description = property.description,
            facilities = property.facilityLists;

        return (
            <Container text>
                <p>{description}</p>
                <Divider />
            </Container>
        );
    }
}

PropertyDescription.propTypes = {
    property: PropTypes.shape({
        description: PropTypes.string.isRequired,
        facilityLists: PropTypes.array.isRequired
    })
};
