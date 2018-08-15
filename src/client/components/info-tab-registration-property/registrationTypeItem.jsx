import React, { Component } from 'react';
import { Card, Button, Image } from 'semantic-ui-react';


export class RegistrationTypeItem extends Component {

    render() {
        const { image, header, description } = this.props
        return (
            <Card style={{ height: "230px" }} >
                <Card.Content>
                    <Image style={{ marginBottom:'15px' }}
                        size="mini"
                        src={image} />
                    <Card.Header>{header}</Card.Header>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button primary>
                        List your property
                    </Button>
                </Card.Content>
            </Card>
        )
    }
}
