import React from 'react';
import './index.scss';
import {Container, Form, Header, Grid} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Draw from './DrawButtons'
import {mapStateToProps, mapDispatchToProps} from './container';


export class CheckInCheckOut extends React.Component {

    handleClick = (event, value) => {
        this.props.onSelectTime(value.value, value.type);

    };

    render() {
        const
            {arrivalFrom, arrivalTo, departureFrom, departureTo} = this.props;

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

                                    <Draw
                                        activeO={arrivalFrom}

                                        type={'arrivalFrom'}
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
                                    <Draw
                                        activeO={departureFrom}

                                        type={'departureFrom'}
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

                                    <Draw
                                        activeO={arrivalTo}

                                        type={'arrivalTo'}
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

                                    <Draw
                                        activeO={departureTo}

                                        type={'departureTo'}
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