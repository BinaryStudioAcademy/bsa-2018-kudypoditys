import React from "react";
import {
    Button,
    Icon,
    Image,
    Item,
    Label,
    Card,
    Divider,
    Comment
} from "semantic-ui-react";

export default class ReviewItem extends React.Component {
    render() {
        const { property } = this.props;
        const { reviewData } = this.props;
        console.log("ITEM =", this.props);
        return (
            <Card>
                <Image src={property.images[0].url} />
                <Card.Content>
                    <Card.Header>{property.name}</Card.Header>
                    <Card.Meta>Your review</Card.Meta>
                    <Card.Description>
                        {/* {this.props.content} */}
                        <div className="comments">
                            {console.log(reviewData)}
                            <Comment.Text
                                style={{
                                    padding: 10,
                                    backgroundColor: "#f7f8f9",
                                    color: "#465672",
                                    display: "block"
                                }}
                            >
                                <Icon color="green" name="plus circle" />
                                {reviewData.pros}
                            </Comment.Text>
                            <Comment.Text
                                style={{
                                    padding: 10,
                                    backgroundColor: "#f7f8f9",
                                    color: "#465672",
                                    display: "block"
                                }}
                            >
                                {" "}
                                <Icon color="grey" name="minus circle" />
                                {reviewData.cons}
                            </Comment.Text>
                        </div>
                    </Card.Description>
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
