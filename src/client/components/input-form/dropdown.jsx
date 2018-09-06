import React from "react";
import { Dropdown, Label } from "semantic-ui-react";
import './index.scss';

const renderDropdown = ({
  input, options, label, icon, className, multiple, pointing, meta: { touched, error }
}) => (
    <React.Fragment>
      <Label basic className={touched && error ? 'shown' : 'hidden'} color='red' pointing={pointing || 'below'}>
        {touched && error ? error : ''}
      </Label>
      <Dropdown
        {...input}
        placeholder={label}
        fluid
        selection
        options={options}
        icon={icon}
        iconPosition='left'
        multiple={multiple}
        className={className}
        onChange={(_, data) => input.onChange(data.value)}
      />
    </React.Fragment>
  );

export default renderDropdown;