import React from "react";
import { Message, Header } from "semantic-ui-react";
import RoomsSummaryTable from "client/components/rooms-summary-table";

export default class AvailabilityResult extends React.Component {
    render() {
        const { result, error } = this.props;
        if (error) return <Message negative>{error}</Message>;
        if (!result) return <p>Sorry. Nothing available for these dates!</p>;
        return (
            <React.Fragment>
                <Header as="h3" />
                <RoomsSummaryTable rooms={result} />
            </React.Fragment>
        );
    }
}
