import React from "react";
import "./index.scss";
import { Divider, Container } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { mapStateToProps } from "./container";

export class PropertyDescription extends React.Component {
    // todo add icons to every facility regarding of type

    render() {
        const { propertyItemData } = this.props,
            description = propertyItemData.description,
            facilities = propertyItemData.facilities;

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
                    {facilities.map((facility, i) => {
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
                                {facility}
                            </span>
                        );
                    })}
                </Container>
            </Container>
        );
    }
}

PropertyDescription.propTypes = {
    propertyItemData: PropTypes.shape({
        description: PropTypes.string.isRequired,
        facilities: PropTypes.array.isRequired
    })
};
export default connect(mapStateToProps)(PropertyDescription);
