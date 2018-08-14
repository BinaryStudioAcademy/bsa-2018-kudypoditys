import React from 'react';
import './index.scss';
import {Container, Form, Header, Grid} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {options} from './config'
import {ButtonsValues} from './config'
import {mapStateToProps, mapDispatchToProps} from './container';


export class CheckInCheckOut extends React.Component {

    handleCheckInFromClick = (event, value) => {
        this.props.onCheckInFrom(value.value);


    };
    handleCheckInToClick = (event, value) => {
        this.props.onCheckInTo(value.value);

    };
    handleCheckOutFromClick = (event, value) => {
        this.props.onCheckOutFrom(value.value);

    };
    handleCheckOutToClick = (event, value) => {
        this.props.onCheckOutTo(value.value);

    };

    DrawButtons(arr, handleType, activeO) {
        return arr.map(button => (
                <Form.Button
                    key={button + 1}
                    basic
                    fluid
                    content={button}
                    onClick={handleType}
                    value={button}
                    active={button === activeO}
                />

            )
        );

    }


    render() {
        const
            {arrivalFrom} = this.props,
            {arrivalTo} = this.props,
            {departureFrom} = this.props,
            {departureTo} = this.props,
            inFrom = this.handleCheckInFromClick,
            inTo = this.handleCheckInToClick,
            OutFrom = this.handleCheckOutFromClick,
            OutTo = this.handleCheckOutToClick;


        const inFromButtons = this.DrawButtons(ButtonsValues, inFrom, arrivalFrom);
        const OutFromButtons = this.DrawButtons(ButtonsValues, OutFrom, departureFrom);
        const inToButtons = this.DrawButtons(ButtonsValues, inTo, arrivalTo);
        const OutToButtons = this.DrawButtons(ButtonsValues, OutTo, departureTo);
        return (
            <Container>

                <Grid>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Form>
                                <Header as='h3'>
                                    Guest arrival time
                                    <Header.Subheader>From:</Header.Subheader>
                                </Header>


                                <Form.Group widths='equal'>

                                    {inFromButtons}


                                    <Form.Select
                                        options={options}

                                        onChange={this.handleCheckInFromClick}
                                    />
                                </Form.Group>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Form>
                                <Header as='h3'>
                                    Guest departure time
                                    <Header.Subheader>From:</Header.Subheader>
                                </Header>


                                <Form.Group widths="equal">

                                    {OutFromButtons}
                                    <Form.Select
                                        basic
                                        options={options}
                                        onChange={this.handleCheckOutFromClick}
                                    />
                                </Form.Group>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Form>
                                <Header as='h3'>

                                    <Header.Subheader>To:</Header.Subheader>
                                </Header>

                                <Form.Group widths='equal'>

                                    {inToButtons}
                                    <Form.Select options={options}
                                                 onChange={this.handleCheckInToClick}
                                    />
                                </Form.Group>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Form>
                                <Header as='h3'>

                                    <Header.Subheader>To:</Header.Subheader>
                                </Header>


                                <Form.Group widths='equal'>

                                    {OutToButtons}
                                    <Form.Select
                                        options={options}
                                        onChange={this.handleCheckOutToClick}
                                    />
                                </Form.Group>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }


}


CheckInCheckOut.propTypes = {

    arrivalFrom: PropTypes.string,
    arrivalTo: PropTypes.string,
    departureFrom: PropTypes.string,
    departureTo: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckInCheckOut);