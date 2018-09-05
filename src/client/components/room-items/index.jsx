import React, { Component } from 'react';
import { Segment, Grid, Button, Container } from 'semantic-ui-react';
import './index.scss'

class RoomItems extends React.Component {

  renderItem(room, index) {
    const { handleDelete, handleEdit } = this.props;

    return (
      <Segment>
        <Grid columns={6} centered >
          <Grid.Column>
            {room.roomType && room.roomType.name}
          </Grid.Column>
          <Grid.Column>
            Amount: {room.amount}
          </Grid.Column>
          <Grid.Column>
            Price: {room.price}
          </Grid.Column>
          <Grid.Column>
            Area: {room.area}
          </Grid.Column>
          <Grid.Column>
            Area: {room.description}
          </Grid.Column>
          <Grid.Column >
            <Button floated='right' type="button"
              basic color="teal"
              onClick={() => handleEdit(index)}>Edit</Button>
            <Button floated='right' type="button"
              basic color="teal"
              onClick={() => handleDelete(index)}>Delete</Button>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }

  render() {
    const { rooms } = this.props;

    return (rooms ?
      <Container style={{ margin: "15px", padding: "15px" }} >
        <Grid columns='equal'>
          <Grid.Column width={12}>
            {rooms.map((x, index) => this.renderItem(x, index))}
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment secondary >
              After you complete registration you'll be able to make changes to your listing before it goes live
            </Segment>
          </Grid.Column>
        </Grid>
      </Container> :
      <div>NO ROOMS</div>
    );
  }
}

export default RoomItems;
