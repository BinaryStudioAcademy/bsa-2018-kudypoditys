import React from 'react';
import { Card, Image, Button, CardContent, Grid, CardMeta, CardDescription, Container, Icon, Header, Label } from 'semantic-ui-react';
import './index.scss';

export default class PropertyListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: `http://cdn.home-designing.com/wp-content/uploads/2016/04/luxury-art-deco-apartment-interior.jpg`,
            name: 'DREAM Hostel Lviv',
            description: 'Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.',
            rating: '9.7',
            location: 'Lviv',
            distanceToCenter: '1.5',
            priceTo: '500',
            priceFrom: '700',
            curency: 'uah',
            reviewsNamber: '660',
            locationRating: '9.2'
        }
    }
    handleRedirectToMap = id => {
        //todo  add redirection to map
    }
    handleAddToComparison = id => {
        // todo sdd to comparision
    }
    handleAddToFavorites = id => {
        // todo add to favorites
    }
    handleRedirectToDetails = id => {
        //todo add redirection to property page
    }
    render() {
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
                            <Image
                                rounded
                                src={this.state.image}
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
                                <Header.Content>{this.state.name}</Header.Content>
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
                                    <a href=''>{this.state.location} Show on map</a>  {this.state.distanceToCenter} km to center
                                    </Container>
                            </CardMeta>
                            <CardDescription
                                textAlign='left'
                                floated="right"
                                style={{
                                    marginTop: "0.5rem"
                                }}>
                                {this.state.description}
                            </CardDescription>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Grid columns={2}>
                                <Grid.Column >
                                    <Container textAlign='right'>
                                       <span className="ratingName"> Superb</span><br />
                                        {this.state.reviewsNamber} reviews
                                    </Container>
                                </Grid.Column>
                                <Grid.Column>
                                    <Label size='big' color='blue'>
                                        {this.state.rating}</Label>
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
                                            }}>location {this.state.locationRating}</Header.Content>
                                    </Header>
                                    <Container floated='right'
                                        textAlign='right'
                                        style={{
                                            marginTop: "5rem"
                                        }}>
                                        <span
                                            className="priceInfo">prise from {this.state.priceFrom} to {this.state.priceTo} {this.state.curency}</span>
                                        <Button primary
                                            floated='right'
                                            style={{
                                                marginTop: "0.5rem"
                                            }}
                                            onClick={this.handleRedirectToDetails}
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




