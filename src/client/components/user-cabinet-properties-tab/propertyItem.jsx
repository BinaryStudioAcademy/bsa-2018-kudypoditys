import React from "react";
import {
    Card,
    Message,
    Image,
    Button,
    CardContent,
    Grid,
    Icon,
    Header,
    Label,
    Rating
} from "semantic-ui-react";
import "./index.scss";
import BasicMapWidget from "../basic-map-widget";
import Modal from "../modal";

export class PropertyItem extends React.Component {
    render() {
        let ratingStatus = "";
        return (
            <Card
                className="property_card"
                fluid
                style={{
                    padding: 0
                }}
            >
                <CardContent>
                    <Grid className="search_page__grid">
                        <Grid.Column
                            style={{
                                width: "20%",
                                paddingLeft: 0,
                                paddingRight: 0
                            }}
                        >
                            <Image
                                src={this.props.images[0].url}
                                floated="left"
                                style={{
                                    width: 150,
                                    height: 150
                                }}
                            />
                        </Grid.Column>

                        <Grid.Column
                            style={{
                                width: "80%",
                                paddingLeft: 0,
                                paddingRight: 0
                            }}
                        >
                            <div className="card_row">
                                <div className="header_grd">
                                    <Header
                                        as="h3"
                                        style={{
                                            marginBottom: 6
                                        }}
                                    >
                                        <Header.Content
                                            style={{
                                                fontSize: 24,
                                                fontWeight: "bold",
                                                color: "#182c4f",
                                                opacity: 0.8,
                                                cursor: "pointer"
                                            }}
                                            onClick={
                                                this.handleRedirectToDetails
                                            }
                                        >
                                            {this.props.name}
                                        </Header.Content>
                                    </Header>
                                    <Rating
                                        defaultRating={this.props.rating}
                                        maxRating={5}
                                        disabled
                                    />
                                </div>
                                <div className="rating_block">
                                    <div
                                        style={{
                                            textAlign: "center",
                                            display: "flex",
                                            flexDirection: "column",
                                            paddingRight: 10
                                        }}
                                    >
                                        <div className="ratingName">
                                            {" "}
                                            {ratingStatus}
                                        </div>
                                        <br />
                                        <span className="reviewsNumber">
                                            {this.props.reviewsNamber || 0}{" "}
                                            reviews
                                        </span>
                                    </div>

                                    <div className="rating_num">
                                        {" "}
                                        {this.props.rating}
                                    </div>
                                </div>
                            </div>
                            <div className="card_row__location">
                                <div className="location__span">
                                    <Modal
                                        trigger={
                                            <p>
                                                <Icon name="map marker alternate" />
                                                <span
                                                    style={{
                                                        cursor: "pointer",
                                                        color: "#465672",
                                                        textDecoration:
                                                            "underline"
                                                    }}
                                                >
                                                    {
                                                        this.props.property
                                                            .address
                                                    }
                                                </span>
                                            </p>
                                        }
                                        fullScreen
                                    >
                                        <BasicMapWidget
                                            style={{
                                                width: "100%",
                                                height: "100%"
                                            }}
                                            coordinates={
                                                this.props.property.coordinates
                                            }
                                            properties={[this.props.property]}
                                            controlEnable={true}
                                            disablePopup={true}
                                            fullScreen
                                        />
                                    </Modal>

                                    <span className="Property_list__distanceToCenter">
                                        ({this.props.distanceToCentre} km from
                                        center)
                                    </span>
                                </div>
                            </div>

                            {/* <div className="card_row__price" /> */}

                            <div className="card_row__order">
                                <div className="property-page__messages" />

                                <Button
                                    className="property-page__main-button"
                                    floated="right"
                                    primary
                                    onClick={this.props.viewProperty}
                                >
                                    Details
                                </Button>
                            </div>
                        </Grid.Column>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}
