import React from "react";
import { Card, Button, Container, CardDescription } from 'semantic-ui-react';
import { Field } from 'redux-form'


let ButtonWithCheckbox = (props) => {
    const { contentTitle, isShown,  fieldsDataList,toggleAddAmenities } = props
    return (
        <Container>
            <Button fluid basic content={contentTitle}
                labelPosition='right'
                icon='right chevron'
                onClick={toggleAddAmenities} />
            <h2 style={isShown}><Card.Content>
                {fieldsDataList.map(fieldData =>
                    <div>
                    <Field name={fieldData.name}
                        component="input"
                        label={fieldData.label}
                        type="checkbox" />
                        <label>{fieldData.label}</label>
                         </div>)}

            </Card.Content></h2>
        </Container>
    )
}
export default ButtonWithCheckbox
