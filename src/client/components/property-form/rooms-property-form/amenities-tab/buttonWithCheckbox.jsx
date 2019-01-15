import React from "react";
import { Button, Container } from 'semantic-ui-react';
import { Field } from 'redux-form'


class ButtonWithCheckbox extends React.Component {
    constructor() {
        super();
        this.state = {
            shown: false,
        };
    }

    toggleAddAmenities() {
        this.setState({
            shown: !this.state.shown
        });
    }

    render() {
        const {contentTitle, fieldsDataList} = this.props
        var shown = {
            display: this.state.shown ? "block" : "none"
        };
        return (
            <Container>
                <Button fluid basic style={{textAlign: 'left'}} content={contentTitle}
                        labelPosition='right'
                        icon='right chevron'
                        onClick={this.toggleAddAmenities.bind(this)}/>
                <div style={shown}>
                    {fieldsDataList.map((fieldData, index) =>
                        <div key={index}>
                            <Field
                                style={{marginTop: '17px'}}
                                name={fieldData.name}
                                component="input"
                                label={fieldData.label}
                                type="checkbox"/>
                            <label>{fieldData.label}</label>
                        </div>)}
                </div>
            </Container>
        )
    }
}

export default ButtonWithCheckbox
