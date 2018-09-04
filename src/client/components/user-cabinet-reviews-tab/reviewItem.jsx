import React from "react";
import {
    Button,
    Icon,
    Image,
    Item,
    Label,
    Card,
    Divider
} from "semantic-ui-react";

export default class ReviewItem extends React.Component {
    render() {
        const { property } = this.props;
        console.log("ITEM =", this.props);
        return (
            // <Item>
            //     <Item.Image src={property.images[0].url} />
            //     <Item.Content>
            //         <Item.Header as="a">{property.name}</Item.Header>
            //         <Item.Meta>
            //             <span className="cinema">Your review</span>
            //         </Item.Meta>
            //         <Item.Description>{this.props.content}</Item.Description>
            //     </Item.Content>
            // </Item>
            <Card>
                <Image src={property.images[0].url} />
                <Card.Content>
                    <Card.Header>{property.name}</Card.Header>
                    <Card.Meta>Your review</Card.Meta>
                    <Card.Description>{this.props.content}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className="ui two buttons">
                        <Button primary fluid>
                            Book again
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        );
    }
}
