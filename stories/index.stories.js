import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import RegistrationComponent from 'client/components/registration-component/index';

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

const registerErrors = [
    { name: 'fullname', msg: 'Please, provide your full name.' },
    { name: 'email', msg: 'Invalid e-mail address.' },
    { name: 'phone', msg: 'Invalid phone number.' },
    { name: 'password', msg: 'Password must be at least 8 characters long.' }
];

const passwordNumberError = [{ name: 'password', msg: 'Password must contain at least one number.' }]
const passwordLetterError = [{ name: 'password', msg: 'Password must contain at least one letter.' }]

const handleInputChange = (item) => {
    console.log(`Changed ${item.name}: ${item.value}`);
}

const handleRegisterClick = (buttonName) => {
    console.log(`Clicked ${buttonName}`);
}

storiesOf('RegistrationComponent', module)
    .add('Component Without Errors (Empty)', () => (
            <RegistrationComponent
                handleChange={handleInputChange} 
                handleClick={handleRegisterClick}
                fullname={''} 
                email={''} 
                phone={''} 
                password={''} 
                errors={[]} 
            />
        )
    )
    .add('Component With Password Error (Must Contain Number)', () => (
            <RegistrationComponent 
                handleChange={handleInputChange} 
                handleClick={handleRegisterClick}
                fullname={'John Doe'} 
                email={'johndoe@gmail.com'} 
                phone={'565217809908'} 
                password={'asdAsdpoi'} 
                errors={passwordNumberError} 
            />
        )
    )
    .add('Component With Password Error (Must Contain A Letter)', () => (
            <RegistrationComponent 
                handleChange={handleInputChange} 
                handleClick={handleRegisterClick}
                fullname={'John Doe'} 
                email={'johndoe@gmail.com'} 
                phone={'565217809908'} 
                password={'456690998'} 
                errors={passwordLetterError} 
            />
        )
    )
    .add('Component With Errors', () => (
            <RegistrationComponent
                handleChange={handleInputChange} 
                handleClick={handleRegisterClick}
                fullname={'A'} 
                email={'some@mailcom'} 
                phone={'39876'} 
                password={'asd'} 
                errors={registerErrors} 
            />
        )
    );
