import React from "react";
import "./index.scss";
import { Divider, Container } from "semantic-ui-react";
import PropTypes from "prop-types";


export default class PropertyDescription extends React.Component {
    // todo add icons to every facility regarding of type

    render() {
        const {property} = this.props,
            description = property.description,
            facilities = property.facilityLists;

        return (
            <Container text>
                <p>{description}</p>
                <Divider />

                <Container
                    text
                    style={{
                        display: "table",
                        lineHeight: 1.2,
                        color: "green"
                    }}
                >
                    {facilities.map((item, i) => {
                        return (
                            <span
                                key={i}
                                style={{
                                    marginRight: 10,
                                    marginBottom: 10,
                                    fontSize: 23,
                                    lineHeight: 1.2,
                                    color: "green"
                                }}
                            >
                                {item.facility.name}
                            </span>
                        );
                    })}
                </Container>
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
