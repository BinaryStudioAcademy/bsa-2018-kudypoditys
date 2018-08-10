import React from 'react';

import { storiesOf } from '@storybook/react';

import Modal from '../src/client/components/modal';

storiesOf('Modal', module)
    .add('fit content size modal', () => (
        <Modal
            trigger={<button>Show modal</button>}
            >
            <h1>Hello modal!!</h1>
        </Modal>
    ))

    .add('fit content size modal with header', () => (
        <Modal
            header='Hotel Dolynskyi'
            trigger={<button>Show modal</button>}
            >
            <h1>Hello modal!!</h1>
        </Modal>
    ))

    .add('fullscreen size modal', () => (
        <Modal
            size='fullScreen'
            trigger={<button>Show modal</button>}
            >
            <h1>Hello fullscreen modal with close icon!!</h1>
        </Modal>
    ))

    .add('fullscreen size modal with header', () => (
        <Modal
            header='Hotel Dolynskyi'
            size='fullScreen'
            trigger={<button>Show modal</button>}
            >
            <h1>Hello fullscreen modal with close icon!!</h1>
        </Modal>
    ));