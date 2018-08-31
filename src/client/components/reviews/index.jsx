import React, {Component} from 'react';
import {Header, Comment, Form, Button, Checkbox} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './index.scss';

import {Review} from './item';
import {mapStateToProps, mapDispatchToProps} from './container';


export class Reviews extends Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.props.getCityInfos();
    // }

    // onCardClick = (cityId) => {
    //     // some logic ...
    //
    // }
    state = {collapsed: true};

    handleCheckbox = (e, {checked}) => this.setState({collapsed: checked});

    render() {
        const {reviews} = this.props;
        const {collapsed} = this.state;
        return (

            <Comment.Group size='large' style={{marginBottom: 20}}>
                <Checkbox defaultChecked label='Show reviews' onChange={this.handleCheckbox}/>
                <Header as='h3' dividing>
                    There are no reviews yet. Be the first to review
                </Header>
                {reviews.map(review => (
                    <Review reviewData={review} collapsed={collapsed}/>

                ))}


                <Form reply>
                    <Form.TextArea/>
                    <Button content='Add review' labelPosition='left' icon='edit' primary/>
                </Form>
            </Comment.Group>
        );

    }
}

// Reviews.propTypes = {
//     cityInfos: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             city: PropTypes.string.isRequired,
//             flagUrl: PropTypes.string.isRequired,
//             properties: PropTypes.number.isRequired,
//             avgPrice: PropTypes.number.isRequired,
//             pictureUrl: PropTypes.string.isRequired
//         })
//     ).isRequired
// };

Reviews.defaultProps = {
    // cityInfos: []
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);


