import React, { Fragment, Component } from 'react';
import './index.scss';
import { Form, Header, Grid, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DrawInputs from './DrawInputs'
import { mapStateToProps, mapDispatchToProps } from './container';

export class CheckInCheckOut extends Component {
    handleClick = (e, value) => {
        e.preventDefault();

        const {
            arrivalFrom, arrivalTo, departureFrom, departureTo, input, isEdit, checkInCheckOut
        } = this.props;

        if (isEdit) {
            checkInCheckOut[value.type] = value.value
        }

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
            arrivalFrom, arrivalTo, departureFrom, departureTo, isEdit, checkInCheckOut, meta: { error, touched }
        } = this.props;

        return (
            <Fragment>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3'>
                                <span className="required">Guest arrival time</span>
                                <Header.Subheader>From:</Header.Subheader>
                            </Header>


                            <Form.Group widths='equal'>
                                <DrawInputs
                                    active={isEdit ? checkInCheckOut.arrivalFrom : arrivalFrom}
                                    type={'arrivalFrom'}
                                    handleClick={this.handleClick}
                                />
                            </Form.Group>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header as='h3' >
                                <span className="required">Guest departure time</span>
                                <Header.Subheader>From:</Header.Subheader>
                            </Header>


                            <Form.Group widths="equal">
                                <DrawInputs
                                    active={isEdit ? checkInCheckOut.departureFrom : departureFrom}
                                    handleClick={this.handleClick}
                                    type={'departureFrom'}
                                />
                                {(touched && error) ? <Label color='red' pointing="left">{error}</Label> : null}
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
                                    active={isEdit ? checkInCheckOut.arrivalTo : arrivalTo}
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
                                    active={isEdit ? checkInCheckOut.departureTo : departureTo}
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