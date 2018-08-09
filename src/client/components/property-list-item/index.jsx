import React from 'react';
import { Card,Message, Image, Button, CardContent, Grid, CardMeta, CardDescription, Container, Icon, Header, Label } from 'semantic-ui-react';
import './index.scss';
import PropTypes from 'prop-types';
import {mapStateToProps, mapDispatchToProps} from './container';
import {connect} from 'react-redux';


export class PropertyListItem extends React.Component {

    componentDidMount() {
        this.props.actions.fetchAllProperty();
    }
    handleRedirectToMap = id => {
        //todo  handleRedirectToMap
    }
    handleAddToComparison = id => {
        //todo
    }
    handleAddToFavorites = id => {
      //todo
    }
    handleRedirectToDetails = id => {
        this.props.actions.fetchPropertyItem(id)
    }
    render() {
        const {propertyItemData}=this.props

        let ratingStatus = ''
        if (propertyItemData.rating >= 9) {
            ratingStatus = 'Excellent'
        } else if (propertyItemData.rating >= 7) {
            ratingStatus = 'Very Good'
        } else if (propertyItemData.rating >= 5) {
            ratingStatus = 'Good'
        } else if (propertyItemData.rating >= 1) {
            ratingStatus = 'Not good'
        }

        return (
            <Card fluid
                style={{
                    margin: "0.5rem",
                    padding: "0.5rem",
                    border: "groove"
                }}>
                <CardContent>
                    <Grid>
                        <Grid.Column width={3}>
                        <Label as='a' color='orange' ribbon style={{display:propertyItemData.mealType===undefined?'none':'block'}}>
                        {propertyItemData.mealType}
                        </Label>
                            <Image
                                rounded
                                src={propertyItemData.image}
                                floated="left" />
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <Header as='h3'
                                style={{ marginTop: "1.5rem" }}
                                color='blue'
                                onClick={this.handleRedirectToDetails}        >
                                <Icon
                                    size='mini'
                                    color='black'
                                    name='heart'
                                    onClick={this.handleAddToFavorites}
                                />
                                <Icon
                                    size='tiny'
                                    color='black'
                                    name='balance scale'
                                    onClick={this.handleAddToComparison}
                                />
                                <Header.Content>{propertyItemData.name}</Header.Content>
                            </Header>
                            <CardMeta
                                style={{
                                    marginTop: "0.5rem"
                                }}>
                                <Container className="qqq">
                                    <Icon
                                        name='map marker'
                                        size='large'
                                        onClick={this.handleRedirectToMap} />
                                    <a href=''>{propertyItemData.location} Show on map</a>  {propertyItemData.distanceToCenter} km to center
                                    </Container>
                            </CardMeta>
                            <CardDescription
                                textAlign='left'
                                floated="right"
                                style={{
                                    marginTop: "0.5rem"
                                }}>
                                {propertyItemData.description}
                            </CardDescription>
                            <Message style={{
                                          color:'red',
                                          display: propertyItemData.availableRoomsCount===0?'block':'none'
                                        }}>
                              Unfortunately we do not have any available rooms
                           </Message>
                           <Message style={{
                                          color:'red',
                                          display: propertyItemData.availableRoomsCount===1?'block':'none'
                                        }}>
                         The last available room!!!
                           </Message>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Grid columns={2}>
                                <Grid.Column >
                                    <Container textAlign='right'>
                                        <span className="ratingName"> {ratingStatus}</span><br />
                                        {propertyItemData.reviewsNamber} reviews
                                    </Container>
                                </Grid.Column>
                                <Grid.Column>
                                    <Label size='big' color={propertyItemData.rating>5?'blue':'grey'}>
                                        {propertyItemData.rating}</Label>
                                </Grid.Column>
                            </Grid>
                            <Grid columns={1}>
                                <Grid.Column>
                                    <Header as='h5'
                                        color='blue'
                                        textAlign="right" >
                                        <Header.Content
                                            style={{
                                                marginRight: "2.5rem",
                                            }}>location {propertyItemData.locationRating}</Header.Content>
                                    </Header>
                                    <Container floated='right'
                                        textAlign='right'
                                        style={{
                                            marginTop: "5rem",
                                            display: propertyItemData.availableRoomsCount===0?'none':'block'
                                        }}>
                                        <span
                                            className="priceInfo">prise from {propertyItemData.priceFrom} to {propertyItemData.priceTo} {propertyItemData.curency}</span>

                                        <Button color ={propertyItemData.availableRoomsCount===0?'grey':'blue'}
                                            floated='right'
                                            style={{
                                                marginTop: "0.5rem",

                                               // display: 'none'
                                            }}
                                            onClick={propertyItemData.availableRoomsCount===0?'':this.handleRedirectToDetails}
                                        >Choose room
                                        </Button>
                                    </Container>
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}
PropertyListItem.propTypes = {
    propertyItemData: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        location: PropTypes.string.isRequired,
        distanceToCenter: PropTypes.number.isRequired,
        priceTo: PropTypes.number.isRequired,
        priceFrom: PropTypes.number.isRequired,
        curency: PropTypes.string.isRequired,
        reviewsNamber: PropTypes.number.isRequired,
        locationRating: PropTypes.number.isRequired,
        availableRoomsCount:PropTypes.number.isRequired,
        mealType:PropTypes.string
    })
};
export default connect(mapStateToProps, mapDispatchToProps)(PropertyListItem);




