import React, { Fragment } from "react";
import { Form } from "semantic-ui-react";
import { ButtonsValues, options } from "./config";
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from "react-redux";


export class DrawInputs extends React.Component {


    render() {
        const
            active = this.props.active,
            type = this.props.type,
            handleClick = this.props.handleClick;

        const Buttons = ButtonsValues.map(button => (
            <Form.Button
                key={button + 1}
                basic
                fluid
                content={button}
                onClick={handleClick}
                value={button}
                active={button === active}
                type={type}
            />
        )
        );

        return (
            <Fragment>
                {Buttons}
                <Form.Select
                    basic
                    placeholder='Other'
                    options={options}
                    onChange={handleClick}
                    type={type}

                />
            </Fragment>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(DrawInputs);