import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { deletePost, upVoteToPost, downVoteToPost } from '../store/actions';
import { dateFormatBrazil } from '../utils';

class PostDetail extends Component {
  state = {
    redirect: false
  };
  deletePost = () => {
    this.props.deletePost(this.props.post.id);
    this.setState({ redirect: true });
  };

  voteUp = () => {
    const { id } = this.props.post;
    this.props.upVoteToPost(id);
  };

  voteDown = () => {
    const { id } = this.props.post;
    this.props.downVoteToPost(id);
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    const {
      title,
      body,
      author,
      timestamp,
      voteScore,
      commentCount
    } = this.props.post;

    return (
      <div className="container">
        <div className="header-post">
          <button className="delete-post">
            <i className="fa fa-trash" /> delete
          </button>
          <h2 className="title-details">{title}</h2>
          <small>By {author} at </small>
          <small>{dateFormatBrazil(timestamp)}</small>
        </div>
        <div className="body-post">
          <p>{body}</p>
        </div>
        <div className="footer-post">
          <div className="coment-vote">
            <i className="far fa-comments" /> {commentCount}
            <i className="far fa-heart" /> {voteScore}
          </div>
          <div>
            <button onClick={this.voteUp} className="btn-vote">
              <i className="fas fa-caret-up" /> Vote Up
            </button>
            <button onClick={this.voteDown} className="btn-vote">
              <i className="fas fa-caret-down" /> Vote Down
            </button>
          </div>
        </div>
      </div>
    );
  }
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  upVoteToPost: PropTypes.func.isRequired,
  downVoteToPost: PropTypes.func.isRequired
};

const mapStateToProps = ({ post }) => ({
  post
});

export default connect(
  mapStateToProps,
  { deletePost, upVoteToPost, downVoteToPost }
)(PostDetail);
