import React, { Fragment, Component } from 'react';
import './index.scss';
import { Container, Form, Header, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DrawInputs from './DrawInputs'
import { mapStateToProps, mapDispatchToProps } from './container';

export class CheckInCheckOut extends Component {
    handleClick = (e, value) => {
        e.preventDefault();

        const {
            arrivalFrom, arrivalTo, departureFrom, departureTo, input
        } = this.props;

        input.onChange({
            arrivalFrom,
            arrivalTo,
            departureFrom,
            departureTo,
            [value.type]: value.value
        });

        this.props.updateCheckInCheckOut({
            [value.type]: value.value
        });
    };

    render() {
        const {
            arrivalFrom, arrivalTo, departureFrom, departureTo
        } = this.props;
        return (
            <Fragment>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3'>
                                Guest arrival time
                                    <Header.Subheader>From:</Header.Subheader>
                            </Header>


                            <Form.Group widths='equal'>
                                <DrawInputs
                                    active={arrivalFrom}
                                    type={'arrivalFrom'}
                                    handleClick={this.handleClick}
                                />
                            </Form.Group>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header as='h3'>
                                Guest departure time
                                    <Header.Subheader>From:</Header.Subheader>
                            </Header>


                            <Form.Group widths="equal">
                                <DrawInputs
                                    active={departureFrom}
                                    handleClick={this.handleClick}
                                    type={'departureFrom'}
                                />

                            </Form.Group>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3'>

                                <Header.Subheader>To:</Header.Subheader>
                            </Header>

                            <Form.Group widths='equal'>

                                <DrawInputs
                                    active={arrivalTo}
                                    handleClick={this.handleClick}
                                    type={'arrivalTo'}
                                />

                            </Form.Group>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header as='h3'>

                                <Header.Subheader>To:</Header.Subheader>
                            </Header>


                            <Form.Group widths='equal'>

                                <DrawInputs
                                    active={departureTo}
                                    handleClick={this.handleClick}
                                    type={'departureTo'}
                                />

                            </Form.Group>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Fragment>
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