import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import VoteButtons from './VoteButtons';
import { deletePost, upVoteToPost, downVoteToPost } from '../store/actions';
import { dateFormatBrazil } from '../utils';

class Post extends Component {
  deletePost = () => {
    this.props.deletePost(this.props.post.id);
  };

  voteUp = () => {
    this.props.upVoteToPost(this.props.post.id);
  };

  voteDown = () => {
    this.props.downVoteToPost(this.props.post.id);
  };

  render() {
    const { id, category, title, author, body, timestamp, commentCount, voteScore } = this.props.post;

    return (

      <div className="col-md-6">
        <div className="item-publicacao">
          <img src="http://placehold.it/500x200" alt="" className="img-resumo" />
          <div className="cabecalho-resumo">
            <div className="categoria-resumo">{category}</div>
            <h3 className="titulo-publicacao">{title}</h3>
            <h4 className="autor-date">By {author} at {dateFormatBrazil(timestamp)}</h4>
            <p>
              {body}
            </p>
            <Link to={`/${category}/${id}`} className="read-more">read more</Link>
          </div>
          <div className="rodape-resumo">
            <div className="coment-vote">
              <i className="far fa-comments" /> {commentCount}
              <i className="far fa-heart" /> {voteScore}
            </div>
            <div>
              <Link onClick={this.voteUp} className="btn-vote"><i className="fas fa-caret-up" /></Link>
              <Link onClick={this.voteDown} className="btn-vote"><i className="fas fa-caret-down" /></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  upVoteToPost: PropTypes.func.isRequired,
  downVoteToPost: PropTypes.func.isRequired,
};

export default connect(null, { deletePost, upVoteToPost, downVoteToPost })(Post);
