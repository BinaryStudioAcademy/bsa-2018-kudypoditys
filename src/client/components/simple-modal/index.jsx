import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "semantic-ui-react";
import { mapDispatchToProps, mapStateToProps } from "./container";

class SimpleModal extends Component {
  onButtonClick = (options) => {
    options.onClick && options.onClick();
    this.props.closeModal();
  };

  render() {
    const { header, content, buttons, open } = this.props;

    return (
      <Modal dimmer={'blurring'} open={open} style={{ maxWidth: '500px' }}>
        <Modal.Header>{header}</Modal.Header>
        <Modal.Content>
          <p>{content}</p>
        </Modal.Content>
        <Modal.Actions>
          {buttons && buttons.map(x => <Button  {...x} type="button" onClick={() => this.onButtonClick(x)} />)}
        </Modal.Actions>
      </Modal>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleModal);
