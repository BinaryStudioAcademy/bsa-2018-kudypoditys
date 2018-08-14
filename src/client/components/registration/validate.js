const validate = values => {
    let errors = {};

    const { fullName, email, phoneNumber, password } = values;

    if(!fullName)
        errors.fullName = 'Name is required!';

    if(!email)
        errors.email = 'Email is required!';

    if(!phoneNumber)
        errors.phoneNumber = 'Phone is required!';

    if(!password)
        errors.password = 'Password is required!';

    //

    if(fullName && fullName.length < 2)
        errors.fullName = 'Name should be at least 2 characters long.';

    if(email && !email.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/))
        errors.email = 'Incorrect e-mail format.';

    if(phoneNumber && !phoneNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
        errors.phoneNumber = 'Invalid phone number.';
    }

    if(password && password.length < 8) {
        errors.password = 'Password should be at least 8 characters long.'
    }

    if(password && !password.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))/)) {
        errors.password = 'Password should contain Uppercase & Downcase letters and at least 1 number.';
    }

    return errors;
};

export default validate;