import React from "react";
import {
    Button,
    Icon,
    Image,
    Card,
    Progress,
    Header
} from "semantic-ui-react";
import history from "../../history";

export default class ReviewItem extends React.Component {
    state = {
        id: this.props.property.id
    };
    handleBookAgain = id => {
        history.push(`/property/${this.state.id}`);
    };

    render() {
        const { property } = this.props;
        let shouldRenderComments = true;

        if (!this.props.cons && !this.props.pros) {
            shouldRenderComments = false;
        }

        return (
            <Card>
                <Image style={{ height: 160 }} src={property.images[0].url} />
                <Card.Content>
                    <Card.Header>{property.name}</Card.Header>
                    <Card.Meta>Your review</Card.Meta>
                    <Card.Description>
                        <div className="avg_rating___block">
                            <span className="rating_name">Cleanliness</span>
                            <Progress
                                progress="value"
                                color="blue"
                                size="small"
                                total="10"
                                value={this.props.Cleanliness}
                                // label="Cleanliness"
                                style={{margin:1}}
                            />
                            <span className="rating_name">Facilities</span>
                            <Progress
                                progress="value"
                                color="blue"
                                size="small"
                                total="10"
                                value={this.props.Facilities}
                                // label="Facilities"
                                style={{margin:1}}
                            />
                            <span className="rating_name">Comfort</span>
                            <Progress
                                progress="value"
                                color="blue"
                                size="small"
                                total="10"
                                value={this.props.Comfort}
                                // label="Comfort"
                                style={{margin:1}}
                            />
                            <span className="rating_name">Price</span>
                            <Progress
                                progress="value"
                                color="blue"
                                size="small"
                                total="10"
                                value={this.props.Price}
                                // label="Price"
                                style={{margin:1}}
                            />
                            <span className="rating_name">Location</span>
                            <Progress
                                progress="value"
                                color="blue"
                                size="small"
                                total="10"
                                value={this.props.Location}
                                // label="Location"

                            />
                        </div>

                        {shouldRenderComments ? (
                            <div className="user_cabinet__reviews_content_block">
                                <div
                                    style={{
                                        padding: 10,
                                        backgroundColor: "#f7f8f9",
                                        color: "#465672",
                                        marginBottom: 10,
                                        display: this.props.pros
                                            ? "block"
                                            : "none"
                                    }}
                                >
                                    <Icon color="green" name="plus circle" />
                                    {this.props.pros}
                                </div>
                                <div
                                    style={{
                                        padding: 10,
                                        backgroundColor: "#f7f8f9",
                                        color: "#465672",
                                        display: this.props.cons
                                            ? "block"
                                            : "none"
                                    }}
                                >
                                    {" "}
                                    <Icon color="grey" name="minus circle" />
                                    {this.props.cons}
                                </div>
                            </div>
                        ) : (
                            <Header
                                as="h4"
                                style={{
                                    padding: 10,
                                    backgroundColor: "#f7f8f9",
                                    color: "#465672"
                                }}
                            >
                                There are no comments available for this review
                            </Header>
                        )}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className="ui two buttons">
                        <Button primary fluid onClick={this.handleBookAgain}>
                            Book again
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        );
    }
}
