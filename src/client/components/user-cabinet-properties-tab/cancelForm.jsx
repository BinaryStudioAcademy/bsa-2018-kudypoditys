import React from "react";
import { Form, Button } from "semantic-ui-react";

export default class CancelBookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { description: "" };
    }

    handleChange = (event, { value }) => {
        this.setState({ description: value });
    };

    render() {
        const value = this.state.description;
        return (
            <Form
                onSubmit={() => {
                    this.props.handleCancelSubmit(value);
                }}
                style={{ margin: "15px" }}
            >
                <Form.TextArea
                    required
                    name="description"
                    label="Why do you need to cancel this booking?"
                    placeholder="Explain your reasons here please..."
                    onChange={this.handleChange}
                    value={value}
                />
                <Button
                    type="submit"
                    negative
                    style={{
                        position: "relative",
                        left: "50%",
                        transform: "translateX(-50%)"
                    }}
                    content="Cancel Booking"
                />
            </Form>
        );
    }
}
