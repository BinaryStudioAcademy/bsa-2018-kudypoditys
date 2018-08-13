import React from 'react';
import './index.scss';
import {Menu, Dropdown, Container, Form, Header, Grid} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './container';


export class CheckInCheckOut extends React.Component {

    handleCheckInFromClick = (event, value) => {
        this.props.onCheckInFrom(value.value);
        console.log(value)

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




    render() {
        const options = [
                {key: '1:00', text: '1:00', value: '1:00'},
                {key: '2:00', text: '2:00', value: '2:00'},
                {key: '3:00', text: '3:00', value: '3:00'},
                {key: '4:00', text: '4:00', value: '4:00'},
                {key: '5:00', text: '5:00', value: '5:00'},
                {key: '6:00', text: '6:00', value: '6:00'},
                {key: '7:00', text: '7:00', value: '7:00'},
                {key: '8:00', text: '8:00', value: '8:00'},
                {key: '9:00', text: '9:00', value: '9:00'},
                {key: '10:00', text: '10:00', value: '10:00'},
                {key: '11:00', text: '11:00', value: '11:00'},
                {key: '12:00', text: '12:00', value: '12:00'},
                {key: '13:00', text: '13:00', value: '13:00'},
                {key: '14:00', text: '14:00', value: '14:00'},
                {key: '15:00', text: '15:00', value: '15:00'},
                {key: '16:00', text: '16:00', value: '16:00'},
                {key: '17:00', text: '17:00', value: '17:00'},
                {key: '18:00', text: '18:00', value: '18:00'},
                {key: '19:00', text: '19:00', value: '19:00'},
                {key: '20:00', text: '20:00', value: '20:00'},
                {key: '21:00', text: '21:00', value: '21:00'},
                {key: '22:00', text: '22:00', value: '22:00'},
                {key: '23:00', text: '23:00', value: '23:00'},
                {key: '24:00', text: '24:00', value: '24:00'}


            ],
            {arrivalFrom} = this.props,
            {arrivalTo} = this.props,
            {departureFrom} = this.props,
            {departureTo} = this.props;
        console.log(this.props);
        console.log(arrivalFrom);
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
                                    <Form.Button
                                        basic
                                        fluid
                                        content='12:00'
                                        onClick={this.handleCheckInFromClick}
                                        value='12:00'
                                        active={arrivalFrom === '12:00'}
                                    />
                                    <Form.Button
                                        basic
                                        fluid
                                        content='14:00'
                                        value='14:00'
                                        active={arrivalFrom === '14:00'}
                                        onClick={this.handleCheckInFromClick}
                                    />
                                    <Form.Button
                                        fluid
                                        content='15:00'
                                        value='15:00'
                                        active={arrivalFrom === '15:00'}
                                        onClick={this.handleCheckInFromClick}
                                        basic
                                    />
                                    <Form.Select
                                        options={options}
                                        active={arrivalFrom === options}

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
                                    <Form.Button
                                        basic
                                        fluid
                                        content="12:00"
                                        value="12:00"
                                        onClick={this.handleCheckOutFromClick}
                                        active={departureFrom === "12:00"}

                                    />
                                    <Form.Button
                                        basic
                                        fluid
                                        content='14:00'
                                        value='14:00'
                                        onClick={this.handleCheckOutFromClick}
                                        active={departureFrom === "14:00"}
                                    />
                                    <Form.Button
                                        basic
                                        fluid
                                        content='15:00'
                                        value='15:00'
                                        onClick={this.handleCheckOutFromClick}
                                        active={departureFrom === "15:00"}

                                    />
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
                                    <Form.Button
                                        basic
                                        fluid
                                        content='15:00'
                                        value='15:00'
                                        onClick={this.handleCheckInToClick}
                                        active={arrivalTo === "15:00"}
                                    />
                                    <Form.Button
                                        basic
                                        fluid
                                        content='16:00'
                                        value='16:00'
                                        onClick={this.handleCheckInToClick}
                                        active={arrivalTo === "16:00"}
                                    />
                                    <Form.Button
                                        basic
                                        fluid
                                        content='17:00'
                                        value='17:00'
                                        onClick={this.handleCheckInToClick}
                                        active={arrivalTo === "17:00"}
                                    />
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
                                    <Form.Button
                                        basic
                                        fluid
                                        content='12:00'
                                        value='12:00'
                                        onClick={this.handleCheckOutToClick}
                                        active={departureTo === "12:00"}
                                    />
                                    <Form.Button
                                        basic
                                        fluid
                                        content='13:00'
                                        value='13:00'
                                        onClick={this.handleCheckOutToClick}
                                        active={departureTo === "13:00"}
                                    />
                                    <Form.Button
                                        basic
                                        fluid
                                        content='15:00'
                                        value='15:00'
                                        onClick={this.handleCheckOutToClick}
                                        active={departureTo === "15:00"}
                                    />
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

const SORT_VALUE = {
    PRICE: 'price',
    DISTANCE: 'distance',
    LOW_RANK: 'low',
    HIGH_RANK: 'high'

};

const {PRICE, DISTANCE, LOW_RANK, HIGH_RANK} = SORT_VALUE;


// RankingBar.propTypes = {
//     // activeItem: PropTypes.string
// };

export default connect(mapStateToProps, mapDispatchToProps)(CheckInCheckOut);