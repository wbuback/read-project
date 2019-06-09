import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CloseButton from './CloseButton';
import CommentEditForm from './CommentEditForm';
import { dateFormatBrazil } from '../utils';

class Comment extends Component {
  state = {
    editMode: false
  };

  upVote = () => {
    this.props.upVote(this.props.comment.id);
  };
  downVote = () => {
    this.props.downVote(this.props.comment.id);
  };
  deleteComment = () => {
    this.props.deleteComment(this.props.comment.id);
  };

  editComment = body => {
    this.props.editComment({
      id: this.props.comment.id,
      body
    });
    this.setState({ editMode: false });
  };

  editMode = () => {
    this.setState({ editMode: true });
  };

  render() {
    const { body, voteScore, author, timestamp } = this.props.comment;

    const renderCommentBody = this.state.editMode ? (
      <CommentEditForm defaultVal={body} editComment={this.editComment} />
    ) : (
      <div className="d-flex justify-content-between align-items-start">
        <div className="d-flex align-items-start">
          {body}&nbsp;
          <button
            type="button"
            className="badge badge-success"
            onClick={this.editMode}
          >
            Edit <i className="fa fa-pencil-square-o" aria-hidden="true" />
          </button>
        </div>
        <CloseButton
          closeStyle="text-muted"
          closeHandler={this.deleteComment}
        />
      </div>
    );

    return (
      <li className="list-group-item">
        {renderCommentBody}
        <div>
          <small className="text-muted">commented by {author} at </small>
          <small className="text-muted">{dateFormatBrazil(timestamp)}</small>
        </div>
        <div className="d-flex justify-content-between align-items-end">
          <div />
          <div>
            <i className="far fa-heart" /> {voteScore}
            <Link onClick={this.upVote} className="btn-vote">
              <i className="fas fa-caret-up" />
            </Link>
            <Link onClick={this.downVote} className="btn-vote">
              <i className="fas fa-caret-down" />
            </Link>
          </div>
        </div>
      </li>
    );
  }
}

Comment.propTypes = {
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired
};

export default Comment;
