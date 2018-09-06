import React from "react";
import { Checkbox } from "semantic-ui-react";

const renderCheckbox = ({ input, label, className }) => (
  <Checkbox
    {...input}
    label={label}
    className={className}
  />
);

export default renderCheckbox;