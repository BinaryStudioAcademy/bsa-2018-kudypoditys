import React from "react";
import { List } from "semantic-ui-react";
import moment from "moment";

export default class HouseRules extends React.Component {
    render() {
        const { rules } = this.props;
        return (
            <List>
                <List.Item
                    style={{
                        marginBottom: "5px"
                    }}
                >
                    <List.Content>
                        <span
                            style={{
                                fontSize: 16,
                                lineHeight: 1.2,
                                color: "rgb(166,174,188)"
                            }}
                        >
                            {rules.allowPets
                                ? "Pets allowed"
                                : "Pets not allowed"}
                        </span>
                    </List.Content>
                </List.Item>
                <List.Item
                    style={{
                        marginBottom: "5px"
                    }}
                >
                    <List.Content>
                        <span
                            style={{
                                fontSize: 16,
                                lineHeight: 1.2,
                                color: "rgb(166,174,188)"
                            }}
                        >
                            Check in - from{" "}
                            {moment(rules.arrivalTimeStart, "HH:mm:ss").format(
                                "HH:mm"
                            )}{" "}
                            to{" "}
                            {moment(rules.arrivalTimeEnd, "HH:mm:ss").format(
                                "HH:mm"
                            )}
                        </span>
                    </List.Content>
                </List.Item>
                <List.Item
                    style={{
                        marginBottom: "5px"
                    }}
                >
                    <List.Content>
                        <span
                            style={{
                                fontSize: 16,
                                lineHeight: 1.2,
                                color: "rgb(166,174,188)"
                            }}
                        >
                            Check out - from{" "}
                            {moment(
                                rules.departureTimeStart,
                                "HH:mm:ss"
                            ).format("HH:mm")}{" "}
                            to{" "}
                            {moment(rules.departureTimeEnd, "HH:mm:ss").format(
                                "HH:mm"
                            )}
                        </span>
                    </List.Content>
                </List.Item>
            </List>
        );
    }
}
