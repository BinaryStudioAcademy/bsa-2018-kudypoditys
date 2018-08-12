import React from "react";
import { Modal } from "semantic-ui-react";

import "./index.scss";

export default class ModalWindow extends React.Component {
    render() {
        const {modalOpen, header,info, onClose} = this.props;

        return (
            <Modal
                open={modalOpen}
                size='fullscreen'
                onClose={onClose}
                closeIcon
            >
                {header ? (
                    <Modal.Header>{header}</Modal.Header>
                ) : (
                    <React.Fragment />
                )}
                <Modal.Content>{info}</Modal.Content>
            </Modal>
        );
    }
}