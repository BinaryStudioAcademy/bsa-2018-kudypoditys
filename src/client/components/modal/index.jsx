import React from "react";
import { Modal } from "semantic-ui-react";

import "./index.scss";

export default class ModalComponent extends React.Component {
    render() {
        const {header, trigger, fullScreen, children, onClose} = this.props;

        return (
            <Modal
                trigger={trigger}
                closeIcon={fullScreen}
                className={fullScreen ? "fullScreen" : ""}
                onClose={onClose ? onClose : () => {
                }}
            >
                {header ? (
                    <Modal.Header>{header}</Modal.Header>
                ) : (
                    <React.Fragment />
                )}
                <Modal.Content>{children}</Modal.Content>
            </Modal>
        );
    }
}
