import React, { Component, Fragment } from 'react';
import {
    Card,
    Comment,
    Header,
    Icon,
    Label,
    Transition,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './index.scss';

import defaultUserPic from './img/matt.jpg';
import ReviewForm from './addReviewForm';

export default class Review extends Component {
    render() {
        const { reviewData, collapsed } = this.props;
        console.log(this.props);
        const date = new Date(reviewData.createdAt).toLocaleString();

        let shouldRenderComments = true;

        if (reviewData.cons === reviewData.pros) {
            shouldRenderComments = false;
        }
        console.log(
            (Boolean(reviewData.cons) && Boolean(reviewData.pros)) + ' VIRAZ',
        );
        console.log(Boolean( reviewData.cons.length && reviewData.pros.length === 0)  + " dsdssdsdsd");
        console.log(Boolean(reviewData.pros.length));
        console.log(reviewData.cons.length + 'cons');
        console.log(reviewData.pros.length + 'pros');
        console.log(shouldRenderComments);
        return (
            <Fragment>
                <Comment collapsed={collapsed}>
                    <Comment.Avatar
                        src={
                            reviewData.user.avatar === null
                                ? defaultUserPic
                                : reviewData.user.avatar
                        }
                    />
                    <Comment.Content>
                        <Comment.Author>
                            {reviewData.user.fullName}
                        </Comment.Author>
                        <Comment.Metadata>
                            <span>Reviewed: {date}</span>
                        </Comment.Metadata>

                        <Label color="purple" horizontal>
                            {reviewData.avgReview}
                        </Label>
                        {shouldRenderComments ? (
                            <div className="comments">
                                {console.log(reviewData.pros)}
                                <Comment.Text
                                    style={{
                                        display:
                                            reviewData.pros === ''
                                                ? 'none'
                                                : 'block',
                                    }}
                                >
                                    <Icon name="plus circle" />
                                    {reviewData.pros}
                                </Comment.Text>
                                <Comment.Text
                                    style={{
                                        display:
                                            reviewData.cons === ''
                                                ? 'none'
                                                : 'block',
                                    }}
                                >
                                    {' '}
                                    <Icon name="minus circle" />
                                    {reviewData.cons}
                                </Comment.Text>
                            </div>
                        ) : (
                            <Header as="h4" dividing>
                                There are no comments available for this review
                            </Header>
                        )}
                    </Comment.Content>
                </Comment>
            </Fragment>
        );
    }
}
