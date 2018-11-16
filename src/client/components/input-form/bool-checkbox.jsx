import React from "react";
import { Checkbox } from "semantic-ui-react";

const renderBoolCheckbox = ({ input, label, className }) => (
  <Checkbox
    {...input}
    value={input.value.checked}
    label={label}
    className={className}
    onChange={(_, value) => { input.onChange(value.checked) }}
    checked={input.checked}
  />
);

export default renderBoolCheckbox;