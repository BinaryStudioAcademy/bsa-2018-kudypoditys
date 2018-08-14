import React from 'react';
import { Segment, Grid, Button, Header, Container } from 'semantic-ui-react';


class RoomItem extends React.Component {

    render() {
        const {roomData}=this.props

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
            <Segment clearing style={{ marginRight: "10.5rem" }}>{roomData.title}
            Number of this type: {roomData.amount}
            <Button floated='right' basic>Edit</Button>
            <Button floated='right' basic >Delete</Button>
            </Segment>
            <Segment secondary >
            After you complete registration you'll be able to make changes to your listing before it goes live

              </Segment>
              </Container>

                <Button  floated='right' content='Add another room' />
                <Button  floated='right' content='Continue' primary />
            </Container>)

    }
}
export default RoomItem

// <Grid>
// <Grid columns='equal'>
//     <Grid.Column width={10}>
//     </Grid.Column>
//     <Grid.Column >
//     </Grid.Column>
// </Grid>
// </Grid>
{/* <Rail position='right'>
                <Sticky context={contextRef}>
                  <Header as='h3'>After you complete registration you'll be able to make changes to your listing before it goes live.</Header>
                </Sticky>
              </Rail> */}