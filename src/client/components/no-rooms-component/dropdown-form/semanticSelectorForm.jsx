import React from 'react';
import PropTypes from 'prop-types';
import {Form, Input} from 'semantic-ui-react';


export default function semanticSelectorFormField({input, type, label, placeholder, meta: {touched, error, warning}, as: As = Input, ...props}) {
    function handleChange(e, {value}) {
        return input.onChange(value);
    }

    return (
        <Form.Field onChange={input.onChange}>
            <As {...props} {...input} value={input.value} type={type} label={label} placeholder={placeholder}
               />
        </Form.Field>
    );
}

semanticSelectorFormField.propTypes = {
    as: PropTypes.any,
    input: PropTypes.object,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    meta: PropTypes.object
};

// import React from 'react';
// import PropTypes from 'prop-types';
// import {Form, Input} from 'semantic-ui-react';


// export default function semanticSelectorFormField({input, name, type, label, placeholder, meta: {touched, error, warning}, as: As = Input, ...props}) {
//     function handleChange(e, {value}) {
//         const field = {
//             value: value,
//             name: input.name
//         }

//         return input.onChange(field);
//     }
//     return (
//         <Form.Field>
//             <As {...props} {...input} value={input.value} type={type} label={label} placeholder={placeholder}
//                 onChange={handleChange}/>
//         </Form.Field>
//     );
// }

// // semanticSelectorFormField.propTypes = {
// //     as: PropTypes.any,
// //     input: PropTypes.object,
// //     type: PropTypes.string,
// //     label: PropTypes.string,
// //     placeholder: PropTypes.string,
// //     meta: PropTypes.object
// // };

