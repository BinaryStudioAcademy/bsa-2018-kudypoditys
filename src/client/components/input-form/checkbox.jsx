import React from "react";
import { Checkbox } from "semantic-ui-react";

const renderCheckbox = ({ input, label, className }) => (
  <Checkbox
    {...input}
    value={+input.value}
    label={label}
    className={className}
    onChange={(_, value) => { input.onChange(value.checked) }}
    checked={!!input.value}
  />
);

export default renderCheckbox;