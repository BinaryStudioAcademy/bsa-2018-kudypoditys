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
                <p style={{ color: "#465672" }}>{description}</p>
                <Divider
                    style={{
                        color: "#465672",
                        borderTop: "1px solid #46567215",
                        borderBottom: "1px solid #465672"
                    }}
                />
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
