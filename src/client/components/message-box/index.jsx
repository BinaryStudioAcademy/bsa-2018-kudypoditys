import React, { Component } from "react";
import { Message } from "semantic-ui-react";

export default class MessageBox extends Component {
  render() {
    const {
        headerText, bodyText, error,
        color = error ? 'red' : this.props.color
    } = this.props;

    return (
      <Message color={color}>
        <Message.Header>{headerText}</Message.Header>
        <p>{bodyText}</p>
      </Message>
    );
  }
}
