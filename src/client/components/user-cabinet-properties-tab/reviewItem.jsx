import React from "react";
import { Icon, Image, Card, Progress, Header } from "semantic-ui-react";

export default class ReviewItem extends React.Component {
    render() {
        const { property } = this.props;
        let shouldRenderComments = true;

        if (!this.props.cons && !this.props.pros) {
            shouldRenderComments = false;
        }

        return (
            <Card>
                <Image src={property.images[0].url} />
                <Card.Content>
                    <Card.Header>{property.name}</Card.Header>
                    <Card.Meta>User review</Card.Meta>
                    <Card.Description>
                        <div className="avg_rating___block">
                            <Progress
                                progress="value"
                                color="blue"
                                size="small"
                                total="5"
                                value={this.props.Cleanliness}
                                label="Cleanliness"
                            />
                            <Progress
                                progress="value"
                                color="blue"
                                size="small"
                                total="5"
                                value={this.props.Facilities}
                                label="Facilities"
                            />
                            <Progress
                                progress="value"
                                color="blue"
                                size="small"
                                total="5"
                                value={this.props.Comfort}
                                label="Comfort"
                            />
                            <Progress
                                progress="value"
                                color="blue"
                                size="small"
                                total="5"
                                value={this.props.Price}
                                label="Price"
                            />
                            <Progress
                                progress="value"
                                color="blue"
                                size="small"
                                total="5"
                                value={this.props.Location}
                                label="Location"
                            />
                        </div>

                        {shouldRenderComments ? (
                            <div className="user_cabinet__reviews_content_block">
                                <div
                                    style={{
                                        padding: 10,
                                        backgroundColor: "#f7f8f9",
                                        color: "#465672",
                                        marginBottom: 10
                                    }}
                                >
                                    <Icon color="green" name="plus circle" />
                                    {this.props.pros}
                                </div>
                                <div
                                    style={{
                                        padding: 10,
                                        backgroundColor: "#f7f8f9",
                                        color: "#465672"
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
            </Card>
        );
    }
}
