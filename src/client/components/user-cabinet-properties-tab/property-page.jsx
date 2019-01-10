import React from "react";
import { Tab } from "semantic-ui-react";
import { ReviewsTab } from "./reviewsTab";
import AvailabilityCalendar from "client/components/property-availability-calendar";
import { BookingsList } from "./bookings-list";
import { Segment, Icon, Divider } from "semantic-ui-react";
import { MealsTab } from "../user-cabinet-meals";

export class PropertyPage extends React.Component {
    panes = [
        {
            menuItem: "Bookings",
            render: () => (
                <Tab.Pane attached={false}>
                    {" "}
                    <BookingsList
                        {...this.props.property}
                        cancelBooking={this.props.cancelBooking}
                    />
                </Tab.Pane>
            )
        },
        {
            menuItem: "Availability calendar",
            render: () => (
                <Tab.Pane attached={false}>
                    <AvailabilityCalendar />
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
        },
        {
            menuItem: "Meals",
            render: () => (
                <Tab.Pane attached={false}>
                    <MealsTab rooms={this.props.property.rooms}/>
                </Tab.Pane>
            )
        }
    ];
    render() {
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
                        Back to all properties
                    </span>
                </a>
                <Divider />
                <Tab
                    menu={{ secondary: true, pointing: true }}
                    panes={this.panes}
                />
            </Segment>
        );
    }
}
