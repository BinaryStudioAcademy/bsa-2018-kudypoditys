import React from 'react';
import { Modal } from 'semantic-ui-react';

import './index.scss';

export default class ModalComponent extends React.Component {

    render() {
        const { header, trigger, size, children } = this.props;

        return <Modal
                trigger={trigger}
                closeIcon={size==='fullScreen'}
                className={size==='fullScreen' ? 'fullScreen' : ''}
            >
                {header ?
                <Modal.Header>{header}</Modal.Header>
                : <React.Fragment/>}
                <Modal.Content>
                    {children}
                </Modal.Content>
            </Modal>

    }
}