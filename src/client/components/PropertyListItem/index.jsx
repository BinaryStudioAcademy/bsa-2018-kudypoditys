import React from 'react';
import { Card, Image, Button, CardContent, Grid, Container, Icon, Header, Label, Content } from 'semantic-ui-react';

export default class PropertyListItem extends React.Component {
    render() {
        let propertyImg = `http://cdn.home-designing.com/wp-content/uploads/2016/04/luxury-art-deco-apartment-interior.jpg`;
        return (
            <Card
                fluid
                style={{
                    margin: "0.5rem",
                    padding: "0.5rem",
                    border: "groove"
                }}>
                <CardContent>
                    <Grid celled>
                        <Grid.Column width={3}>
                            <Image
                                rounded
                                src={propertyImg}
                                className="listItem-description"
                                floated="left"
                            />
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <Header as='h3'
                                style={{ marginTop: "1.5rem" }}
                                color='blue'                  >
                                <Icon
                                    name='heart'
                                    size='mini'
                                    color='black'
                                />
                                <Icon
                                    name='balance scale'
                                    size='tiny'
                                    color='black'
                                />
                                <Header.Content>Some nice title</Header.Content>
                            </Header>
                            <Card.Meta
                                style={{
                                    marginTop: "0.5rem"
                                }}>
                                <Container>
                                    <Icon
                                        name='map marker'
                                        size='large'
                                    />
                                    <a href=''>Lviv Show on map</a> 1.5 km to center
                                    </Container>
                            </Card.Meta>
                            <Card.Description
                                textAlign='left'
                                floated="right"
                                className='listItem-description'
                                style={{
                                    marginTop: "0.5rem"
                                }} >
                                Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та пам'ятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та пам'ятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.
                            </Card.Description>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Grid.Row centered='false'>
                                <Grid celled  >
                                    <Grid.Column   width={1} >
                                        <Header as='h4'

                                            color='blue' >
                                            <Header.Content>Superb</Header.Content>
                                        </Header>
                                        660reviews
                                    </Grid.Column>
                                    <Grid.Column width={1} >
                                        <Label size='big' color='blue'>
                                            9.2
                                        </Label>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Row>
                            <Grid.Row >
                                <Header as='h5'
                                    color='blue'
                                    textAlign="right" >
                                    <Header.Content>location 9.7</Header.Content>
                                </Header>
                            </Grid.Row>
                            <Grid.Row>
                                <Container
                                    floated='right'
                                    textAlign='right'
                                    style={{
                                        marginTop: "8rem",

                                    }}>
                                    <span>prise from 500 to 700$</span>
                                    <Button primary
                                        floated='right'
                                        style={{
                                            marginTop: "0.5rem"
                                        }}
                                    >Choose room
                                    </Button>
                                </Container>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                </CardContent>
            </Card>

        )
    }
}

