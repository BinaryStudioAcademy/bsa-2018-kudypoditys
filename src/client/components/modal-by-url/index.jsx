import React from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import history from "../../history";


export default ({
                    openBy,
                    className,
                    cancelTo,
                    submitTo,
                    cancelText,
                    submitText,
                    heading,
                    content,
                }) => {
    return (
        <Modal open={openBy} className={className}>
            {heading ? <Modal.Header>{heading}</Modal.Header> : null}
            {content ? (
                <Modal.Content>
                    <p>{content}</p>
                </Modal.Content>
            ) : null}
            <Modal.Actions>
                {cancelTo || cancelText ? (
                    <Button
                        onClick={() => history.push(cancelTo)}
                        color="red"
                        inverted
                    >
                        <Icon name="remove"/> {cancelText}
                    </Button>
                ) : null}
                {submitTo || submitText ? (
                    <Button
                        onClick={() => history.push(submitTo)}
                        color="green"
                        inverted
                    >
                        <Icon name="checkmark"/> {submitText}
                    </Button>
                ) : null}
            </Modal.Actions>
        </Modal>
    );
};
