import React from "react";
import { Modal } from "semantic-ui-react";

import "./index.scss";

export default class ModalComponent extends React.Component {
    render() {
        const {
            header,
            trigger,
            fullScreen,
            closeIcon,
            children,
            onClose,
            className,
            open
        } = this.props;

        return (
            <Modal
                trigger={trigger}
                closeIcon={fullScreen || closeIcon}
                className={fullScreen ? "fullScreen" : className}
                onClose={
                    onClose
                        ? () => {
                              onClose();
                          }
                        : () => {}
                }
                open={open}
            >
                {header ? (
                    <Modal.Header>{header}</Modal.Header>
                ) : (
                    <React.Fragment />
                )}
                <Modal.Content
                    style={{ height: "fit-content", maxHeight: "100%" }}
                >
                    {children}
                </Modal.Content>
            </Modal>
        );
    }
}
