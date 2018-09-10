import React from "react";
import { Tab, Button } from "semantic-ui-react";
import { ReviewsTab } from "./reviewsTab";
import AvailabilityCalendar from "client/components/property-availability-calendar";
import { Segment, Icon } from "semantic-ui-react";

export class PropertyPage extends React.Component {
    panes = [
        {
            menuItem: "Bookings",
            render: () => <Tab.Pane attached={false}>Bookings</Tab.Pane>
        },
        {
            menuItem: "Availability calendar",
            render: () => (
                <Tab.Pane attached={false}>
                    <AvailabilityCalendar
                        userId={this.props.property.userId}
                        {...this.props.property}
                    />
                    <Button
                        floated="left"
                        icon
                        labelPosition="left"
                        primary
                        size="small"
                        onClick={this.submitHandle}
                    >
                        <Icon name="save outline" /> Save
                    </Button>
                </Tab.Pane>
            )
        },
        {
            menuItem: "Reviews",
            render: () => (
                <Tab.Pane attached={false}>
                    <ReviewsTab property={this.props.property} />
                </Tab.Pane>
            )
        }
    ];
    render() {
        const { property } = this.props;
        console.log("activeProperty", property);
        return (
            <Segment className="property-segment">
                <a
                    onClick={this.props.backToAllProperties}
                    style={{
                        cursor: "pointer",
                        color: "#465672"
                    }}
                >
                    <span>
                        <Icon name="triangle left" />
                        Back to all bookings
                    </span>
                </a>
                <Tab
                    menu={{ secondary: true, pointing: true }}
                    panes={this.panes}
                />
            </Segment>
        );
    }
}
