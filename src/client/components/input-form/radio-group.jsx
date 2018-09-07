import React, { Fragment, Component } from "react";
import { Label, Container } from "semantic-ui-react";

class RadioGroup extends Component {
  render() {
    const { input, options } = this.props;

    return (
      <Container>
        {options.map((x, i) =>
          <Fragment key={i}>
            <input {...input} key={i} type="radio" value={x.value} />
            <Label>{x.label}</Label>
          </Fragment>
        )}
      </Container>
    );
  }
}

export default RadioGroup;