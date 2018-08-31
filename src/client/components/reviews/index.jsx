import React from 'react';
import {Header, Comment, Form, Button, Checkbox} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './index.scss';

import Review from './item';
import {mapStateToProps, mapDispatchToProps} from './container';


export class Reviews extends React.Component {
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = (event) => {
        let data = {content: event.target.value};
        this.props.updateReview(data);
        console.log(this.props)
        };


    handleSubmit= (event) => {
        let {content} = this.props;
        let {user} = this.props;





        console.log(content);
        this.props.submitReview({
            content: content,
            userId: user.id
        })



    }

    // handleCheckbox = (e, {checked}) => this.setState({collapsed: checked});

    render() {
        console.log(this.props)
        const {reviews} = this.props;

        return (

            <Comment.Group size='large' style={{marginBottom: 20}}>
                {/*<Checkbox defaultChecked label='Show reviews' />*/}
                <Header as='h3' dividing>
                    There are no reviews yet. Be the first to review
                </Header>
                {reviews.map(review => (
                    <Review reviewData={review}/>

                ))}


                <Form reply onSubmit={this.handleSubmit}>
                    <Form.TextArea onChange={this.handleChange}/>
                    {/*<Button content='Add review' labelPosition='left' icon='edit' primary />*/}
                    <Button
                        color="teal"
                        fluid
                        content='Add review'
                        labelPosition='left'
                        icon='edit'
                        type="submit"
                    >
                        Continue
                    </Button>
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

Reviews.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);


