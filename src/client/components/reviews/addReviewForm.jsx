import React from 'react';
import {
    Header,
    Comment,
    Form,
    Button,
    Checkbox,
    Transition,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.scss';

import Review from './item';
import { mapStateToProps, mapDispatchToProps } from './container';
import {Reviews} from "./index";

export class addReviewForm extends React.Component {






    render() {
console.log(this.props)

        return (
            <Form reply onSubmit={this.props.onSubmit}>
                <Form.TextArea onChange={this.props.onChange} />

                <Button
                    primary
                    color="teal"
                    fluid
                    content="Add review"
                    labelPosition="left"
                    icon="edit"
                    type="submit"
                    onClick={this.toggleVisibility}
                />
            </Form>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(addReviewForm);