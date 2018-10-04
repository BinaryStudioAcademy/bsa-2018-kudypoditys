import React, { Component, Fragment } from "react";
import {
    Card,
    Comment,
    Header,
    Icon,
    Label,
    Transition
} from "semantic-ui-react";
import PropTypes from "prop-types";

import "./index.scss";

import defaultUserPic from "./img/default_avatar.png";
import anonPic from "./img/anon.jpg";
import ReviewForm from "./addReviewForm";

export default class Review extends Component {
    render() {
        const { reviewData, collapsed } = this.props;
        const anon = reviewData.anon;
        let avatar = reviewData.user.avatar;
        let userName = reviewData.user.fullName;

        if (anon) {
            avatar = anonPic;
            userName = "Captain Anonymous";
        }

        const date = new Date(reviewData.createdAt).toLocaleString();

        let shouldRenderComments = true;
        // console.log(!reviewData.cons && !reviewData.pros + " " + reviewData.pros + " " + reviewData.cons)
        if (!reviewData.cons && !reviewData.pros) {
            shouldRenderComments = false;
        }

        return (
            <Fragment>
                <Comment collapsed={collapsed}>
                    <Comment.Avatar
                        src={avatar === null ? defaultUserPic : avatar}
                    />

                    <Comment.Content>
                        <Comment.Author>{userName}</Comment.Author>
                        <Comment.Metadata>
                            <span>Reviewed: {date}</span>
                            <div className="ratingLabel">
                                <Label
                                    color="purple"
                                    horizontal
                                    style={{
                                        backgroundColor: "#465672"
                                    }}
                                >
                                    {reviewData.avgReview}
                                </Label>
                            </div>
                        </Comment.Metadata>

                        {shouldRenderComments ? (
                            <div className="comments">
                                <Comment.Text
                                    style={{
                                        padding: 10,
                                        backgroundColor: "#f7f8f9",
                                        color: "#465672",
                                        display: reviewData.pros
                                            ? "block"
                                            : "none"
                                    }}
                                >
                                    <Icon color="green" name="plus circle" />
                                    {reviewData.pros}
                                </Comment.Text>
                                <Comment.Text
                                    style={{
                                        padding: 10,
                                        backgroundColor: "#f7f8f9",
                                        color: "#465672",
                                        display: reviewData.cons
                                            ? "block"
                                            : "none"
                                    }}
                                >
                                    {" "}
                                    <Icon color="grey" name="minus circle" />
                                    {reviewData.cons}
                                </Comment.Text>
                            </div>
                        ) : (
                            <Header
                                as="h4"
                                style={{
                                    padding: 10,
                                    backgroundColor: "#f7f8f9",
                                    color: "#465672"
                                }}
                            >
                                There are no comments available for this review
                            </Header>
                        )}
                    </Comment.Content>
                </Comment>
            </Fragment>
        );
    }
}
