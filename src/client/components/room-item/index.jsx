import React from 'react';
import { Segment, Grid, Button, Container } from 'semantic-ui-react';
import { mapStateToProps} from './container';
import { connect } from 'react-redux';
import {  reduxForm } from 'redux-form';
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
        const { title, amount} = this.props


        return (
            <form onSubmit={this.props.handleSubmit}>
            <Container
                style={{
                    margin: "15px",
                    padding: "15px"
                }} >
                <Container>
                    <Grid columns='equal'>
                        <Grid.Column width={12}>
                            <Segment>

                                <Grid columns={3} centered >
                                    <Grid.Column>
                                        {title}
                                    </Grid.Column>
                                    <Grid.Column>
                                        Number of this type: {amount}
                                    </Grid.Column>
                                    <Grid.Column >
                                        <Button floated='right'
                                            basic color="teal"
                                            onClick={this.handleRedirectToDetails}>Edit</Button>
                                        <Button floated='right'
                                            basic color="teal"
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
                    <Button floated='right'color='teal'
                             type="submit"
                     content='Continue'
                     onClick={this.handleRedirectToNext}/>
                    <Button floated='right'
                     content='Add another room'
                     onClick={this.handleRedirectToDetails} />
                </div>
                </Container>
                </form>
            )

        }
    }
export default connect(mapStateToProps)(reduxForm({
    form: 'RoomItemForm'
})(RoomItem))
