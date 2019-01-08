import React from "react";
import { List } from "semantic-ui-react";

export default class PaymentMethods extends React.Component {
    render() {
        const { paymentTypes } = this.props;
        return (
            <List>
                {paymentTypes.map((item, i) => {
                    return <List.Item style={{ marginBottom: "5px" }} key={i}>
                            <List.Content>
                                <span style={{ fontSize: 16, lineHeight: 1.2, color: "rgb(166,174,188)" }}>
                                    {item.name}
                                </span>
                            </List.Content>
                        </List.Item>;
                })}
            </List>
        );
    }
}
