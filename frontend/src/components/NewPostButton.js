import React from 'react';
import { Link } from 'react-router-dom';

const NewPostButton = () => (
    <Link className="btn btn-success btn-new-post" to="/new">
      <i className="fas fa-file-alt"></i> New Post
    </Link>
);

export default NewPostButton;
