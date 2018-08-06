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

let errors = [{ field: 'email', message: 'Please enter your e-mail' }, { field: 'password', message: 'Please enter your password' }];

storiesOf('Login component', module)
    .add('Login with errors', () => (
        <LoginComponent email={''} password={''} errors={errors} />
    ));

storiesOf('Login component', module)
    .add('Login without errors', () => (
        <LoginComponent email={''} password={''} errors={[]} />
    ));

storiesOf('Login component', module)
    .add('Login with email and password', () => (
        <LoginComponent email={'testmail@gmail.com'} password={'123456'} errors={[]} />
    ));

let PasswordLengthError = [{ field: 'password', message: 'Your password must be at least 6 characters' }]

storiesOf('Login component', module)
    .add('Login with wrong password length', () => (
        <LoginComponent email={'testmail@gmail.com'} password={'12345'} errors={PasswordLengthError} />
    ));

let EmailFormatError = [{ field: 'email', message: 'Please enter a valid e-mail' }]

storiesOf('Login component', module)
    .add('Login with wrong email format', () => (
        <LoginComponent email={'testmailgmailcom'} password={'12345'} errors={EmailFormatError} />
    ));