import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { LoginComponent } from '../src/client/components/login-component/index';

let errors = [{ field: 'email', message: 'Please enter your e-mail' }, { field: 'password', message: 'Please enter your password' }];

storiesOf('Login component', module)
    .add('Login with errors', () => (
        <LoginComponent
            mailChanged={action('changed')}
            passwordChanged={action('changed')}
            registrationClicked={action('clicked')}
            loginClicked={action('clicked')}
            forgotClicked={action('clicked')}
            email={''}
            password={''}
            errors={errors}
        />
    ));

storiesOf('Login component', module)
    .add('Login without errors', () => (
        <LoginComponent
            mailChanged={action('changed')}
            passwordChanged={action('changed')}
            registrationClicked={action('clicked')}
            loginClicked={action('clicked')}
            forgotClicked={action('clicked')}
            email={''}
            password={''}
            errors={[]}
        />
    ));

storiesOf('Login component', module)
    .add('Login with correct email and password', () => (
        <LoginComponent
            mailChanged={action('changed')}
            passwordChanged={action('changed')}
            registrationClicked={action('clicked')}
            loginClicked={action('clicked')}
            forgotClicked={action('clicked')}
            email={'testmail@gmail.com'}
            password={'123456'}
            errors={[]}
        />
    ));

let PasswordLengthError = [{ field: 'password', message: 'Your password must be at least 6 characters' }]

storiesOf('Login component', module)
    .add('Login with wrong password length', () => (
        <LoginComponent
            mailChanged={action('changed')}
            passwordChanged={action('changed')}
            registrationClicked={action('clicked')}
            loginClicked={action('clicked')}
            forgotClicked={action('clicked')}
            email={'testmail@gmail.com'}
            password={'12345'}
            errors={PasswordLengthError}
        />
    ));

let EmailFormatError = [{ field: 'email', message: 'Please enter a valid e-mail' }]

storiesOf('Login component', module)
    .add('Login with wrong email format', () => (
        <LoginComponent
            mailChanged={action('changed')}
            passwordChanged={action('changed')}
            registrationClicked={action('clicked')}
            loginClicked={action('clicked')}
            forgotClicked={action('clicked')}
            email={'testmailgmailcom'}
            password={'123456'}
            errors={EmailFormatError}
        />
    ));