import React from 'react';
import PropTypes from 'prop-types';
import {Form, Input} from 'semantic-ui-react';
import { selection } from 'glamor';
export default function semanticSelectorFormField({input,name, type, label, placeholder, meta: {touched, error, warning}, as: As = Input, ...props}) {
   // const ddd = name;
    const ddd = input.name
    function getName(){
        return ddd
    }
    function handleChange(e, {value}){
        //console.log(input.name)
        return input.onChange(value)
    }

    return (
        <Form.Field >
            <As {...props} {...input} value={input.value} type={type} label={label} placeholder={placeholder}
            onChange={(e,{value})=>handleChange(e,{value}, ddd)}
            />
        </Form.Field>
    );
}

// semanticSelectorFormField.propTypes = {
//     as: PropTypes.any,
//     input: PropTypes.object,
//     type: PropTypes.string,
//     label: PropTypes.string,
//     placeholder: PropTypes.string,
//     meta: PropTypes.object
// };

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

