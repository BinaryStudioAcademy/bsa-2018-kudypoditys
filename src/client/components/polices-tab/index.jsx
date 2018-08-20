import React, {Component,} from "react";
import {Header, Container, Grid, Rail, Sticky, Segment} from 'semantic-ui-react';
import PolicesForm from './policesForm';


class TabPolices extends Component {
    state = {}
    handleContextRef = contextRef => this.setState({contextRef});
    handleChange = (event, value) => {
        this.props.onSelect(value.value);

    };

    render() {
        const {name} = this.props;
        const {contextRef} = this.state
        return (

            <Container>
                <Header/>
                <Header as='h2'>Policies</Header>
                Specify some basic policies. Do you allow children or pets? How flexible are you with cancellations?
                <PolicesForm/>
            </Container>

        );
    }
}

export default TabPolices;
