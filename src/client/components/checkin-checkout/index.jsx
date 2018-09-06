import React from 'react';
import './index.scss';
import {Container, Form, Header, Grid} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import DrawInputs from './DrawInputs'
import {mapStateToProps, mapDispatchToProps} from './container';


export class CheckInCheckOut extends React.Component {

    handleClick = (event, value) => {
        this.props.onSelectTime(value.value, value.type);


    };

    render() {
        console.log(this.props )
        const {arrivalFrom, arrivalTo, departureFrom, departureTo} = this.props;
console.log(arrivalFrom)
        return (
            <Container>

                <Grid>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Container>
                                <Header as='h3'>
                                    Guest arrival time
                                    <Header.Subheader>From:</Header.Subheader>
                                </Header>


                                <Form.Group widths='equal'>

                                    <DrawInputs
                                        active={arrivalFrom}
                                        type={'arrivalFrom'}
                                    />


                                </Form.Group>
                            </Container>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Container>
                                <Header as='h3'>
                                    Guest departure time
                                    <Header.Subheader>From:</Header.Subheader>
                                </Header>


                                <Form.Group widths="equal">
                                    <DrawInputs
                                        active={departureFrom}

                                        type={'departureFrom'}
                                    />

                                </Form.Group>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Container>
                                <Header as='h3'>

                                    <Header.Subheader>To:</Header.Subheader>
                                </Header>

                                <Form.Group widths='equal'>

                                    <DrawInputs
                                        active={arrivalTo}

                                        type={'arrivalTo'}
                                    />

                                </Form.Group>
                            </Container>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Container>
                                <Header as='h3'>

                                    <Header.Subheader>To:</Header.Subheader>
                                </Header>


                                <Form.Group widths='equal'>

                                    <DrawInputs
                                        active={departureTo}

                                        type={'departureTo'}
                                    />

                                </Form.Group>
                            </Container>
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