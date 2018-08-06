import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import { LoginComponent } from '../src/client/components/loginComponent/index';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </Button>
    ));

let errors = [{ field: 'email', message: 'Please enter your e-mail' }, { field: 'password', message: 'Please enter your password' }]

storiesOf('Login component', module)
    .add('Login main', () => (
        <LoginComponent email={''} password={''} errors={errors} />
    ));