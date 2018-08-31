import React from 'react';
import {Header, Comment, Form, Button, Checkbox} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './index.scss';

import {Review} from './item';
import {mapStateToProps, mapDispatchToProps} from './container';
// import {reviewSubmit} from "../../logic/reviews/actions";


export class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     this.props.getCityInfos();
    // }

    // onCardClick = (cityId) => {
    //     // some logic ...
    //
    // }



    // state = {collapsed: true};

handleChange(event) {
    let data = {value: event.target.value};
   this.props.updateReview(data);

}

// handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
// }


    handleCheckbox = (e, {checked}) => this.setState({collapsed: checked});
    // handleSubmit(event, target, value) {
    //     console.log(event)
    //     console.log(target)
    //     console.log(value)
    // }
    // handleChange(value) {
    //
    // }
    render() {
        console.log(this.props)
        const {reviews} = this.props;
        // const {collapsed} = this.state;





        return (

            <Comment.Group size='large' style={{marginBottom: 20}}>
                <Checkbox defaultChecked label='Show reviews' onChange={this.handleCheckbox}/>
                <Header as='h3' dividing>
                    There are no reviews yet. Be the first to review
                </Header>
                {reviews.map(review => (
                    <Review reviewData={review} />

                ))}


                <Form reply onSubmit={this.handleSubmit}>
                    <Form.TextArea  onChange={this.handleChange}/>
                    {/*<Button content='Add review' labelPosition='left' icon='edit' primary />*/}
                    <Button
                        color="teal"
                        fluid

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

Reviews.defaultProps = {
    // cityInfos: []
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);


