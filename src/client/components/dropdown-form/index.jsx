import React from 'react';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {Field, reduxForm} from 'redux-form';

import {Form} from 'semantic-ui-react';

import semanticSelectorFormField from './semanticSelectorForm';


const options = [
    {key: '0', text: 'UAH/Stay', value: 'UAH/Stay'},
    {key: '1', text: 'UAH/Person per night', value: 'UAH/Person per night'},
    {key: '2', text: 'N/A', value: 'N/A'},
    {key: '3', text: 'UAH/night', value: 'UAH/night'},
    {key: '4', text: 'incalculable', value: 'incalculable'},
    {key: '5', text: 'UAH/person per day', value: 'UAH/person per day'},
    {key: '6', text: '%', value: '%'}
];
export const required = value => (value ? undefined : 'Required');

const ComponentForm = (props) => {
    return (
        <Form name="product">
            <Field
                name="selectExample"
                component={semanticSelectorFormField}
                as={Form.Select}
                options={options}
                label="Semantic selector"
                placeholder="Select an option"
                validate={required}/>

        </Form>
    );
};

ComponentForm.propTypes = {
    handleSubmit: PropTypes.func,
    reset: PropTypes.func,
    onSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool
};

export default compose(
    reduxForm({
        form: 'hereComponentName',
        enableReinitialize: true
    })
)(ComponentForm);