import React from "react";
import "./index.scss";
import { Divider, Container } from "semantic-ui-react";
import PropTypes from "prop-types";

export default class PropertyDescription extends React.Component {
    render() {
        const { property } = this.props,
            description = property.description;

        return (
            <Container text>
                <p style={{ color: "#465672" }}>{description}</p>
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
