import React from "react";
import { TextArea, Label } from "semantic-ui-react";
import './index.scss';

const renderTextarea = ({
  input, label, className, pointing, fluid, meta: { touched, error }
}) => (
    <React.Fragment>
      <Label basic className={touched && error ? 'shown' : 'hidden'} color='red' pointing={pointing || 'below'}>
        {touched && error ? error : ''}
      </Label>
      <TextArea
        {...input}
        placeholder={label}
        fluid={fluid}
        className={(touched && error)
            ? (className !== undefined) ? `${className} field-error` : 'field-error'
            : (className !== undefined) ? className : ''}
      />
    </React.Fragment>
  );

export default renderTextarea;