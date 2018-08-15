import React from 'react';
import { Segment, Grid, Button, Header, Container, Menu } from 'semantic-ui-react';
import './index.scss'

class RoomItem extends React.Component {

    handleRedirectToDetails = id => {
        // this.props.actions.redirectToDetails(id)
    }
    handleDelete = id => {
        // this.props.actions.delete(id)
    }
    handleRedirectToNext= id =>{
        //this.props.actions.redirectToNext(id)
    }
    render() {
        const { roomData } = this.props


        return (
            <Container
                style={{
                    margin: "15px",
                    padding: "15px"
                }} >
                <Header as='h2'>
                    Layout and Pricing
            <Header.Subheader>Tell us about your first room. After entering all the necessary info,
                 you can fill in the details of your other rooms.</Header.Subheader>
                </Header>
                <Container>
                    <Grid columns='equal'>
                        <Grid.Column width={12}>
                            <Segment>
                                <Grid columns={3} centered >
                                    <Grid.Column>
                                        {roomData.title}
                                    </Grid.Column>
                                    <Grid.Column>
                                        Number of this type: {roomData.amount}
                                    </Grid.Column>
                                    <Grid.Column >
                                        <Button floated='right'
                                            basic color="blue"
                                            onClick={this.handleRedirectToDetails}>Edit</Button>
                                        <Button floated='right'
                                            basic color="blue"
                                            onClick={this.handleDelete}>Delete</Button>
                                    </Grid.Column>
                                </Grid>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Segment secondary >
                                After you complete registration you'll be able to make changes to your listing before it goes live
                   </Segment>
                        </Grid.Column>
                    </Grid>
                </Container>
                <div className="footer">
                    <Button floated='right'
                     content='Continue' primary
                     onClick={this.handleRedirectToNext}/>
                    <Button floated='right'
                     content='Add another room'
                     onClick={this.handleRedirectToDetails} />
                </div>
            </Container>)

    }
}
export default RoomItem
