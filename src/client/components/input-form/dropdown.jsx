import React from "react";
import { Dropdown, Label } from "semantic-ui-react";
import './index.scss';

// DONT TOUCH THIS :D
const renderDropdown = ({
  input, options, label, icon, className, multiple, pointing, meta: { touched, error }
}) => {
  return <React.Fragment>
    <Label basic className={touched && error ? 'shown' : 'hidden'} color='red' pointing={pointing || 'below'}>
      {touched && error ? error : ''}
    </Label>
    {options && options.length !== 0 && <Dropdown
      {...input}
      placeholder={label}
      fluid
      selection
      options={multiple && options.map(x => ({ ...x, value: JSON.stringify(x.value) })) || options}
      icon={icon}
      multiple={multiple}
      className={className}

      value={multiple && (input.value && input.value.map(JSON.stringify) || []) || input.value || ''}
      onChange={(_, data) => {
        if (data.multiple)
          return input.onChange(data.value.map(JSON.parse))

        return input.onChange(data.value);
      }}
    />}
  </React.Fragment>
};

export default renderDropdown;