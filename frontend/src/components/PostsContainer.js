import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';
import RadioForSort from './RadioForSort';
import Posts from './Posts';
import { getSortedPosts } from '../utils';

const PostsContainer = ({ filter, sortBy, posts, changeSortBy }) => (
  <div className="container">
    <Filter filter={filter} />
    <div className="container">
      <RadioForSort sortBy={sortBy} changeHandler={changeSortBy} />
      <Posts posts={getSortedPosts(posts, sortBy)} />
    </div>
  </div>
);

PostsContainer.defaultProps = {
  filter: undefined
};

PostsContainer.propTypes = {
  sortBy: PropTypes.oneOf(['date', 'score']).isRequired,
  posts: PropTypes.array.isRequired,
  changeSortBy: PropTypes.func.isRequired,
  filter: PropTypes.string
};

export default PostsContainer;
