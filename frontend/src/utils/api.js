import axios from 'axios';
import uuidV1 from 'uuid/v1';

axios.defaults.baseURL = 'http://localhost:3001';

const headers = {
  Accept: 'application/json',
  Authorization: 'wbuback',
};

export async function getAllCategories() {
  const res = await axios.get(`/categories`, { headers });
  return res.data.categories;
}

export async function getPostsByCategory(category) {
  const res = await axios.get(`/${category}/posts`, { headers });
  return res.data;
}

export async function upVoteToPost(id) {
  const res = await axios.post(
    `/posts/${id}`,
    {
      option: 'upVote',
    },
    { headers }
  );

  return res.data;
}

export async function downVoteToPost(id) {
  const res = await axios.post(
    `/posts/${id}`,
    {
      option: 'downVote',
    },
    { headers }
  );

  return res.data;
}

export async function upVoteToComment(id) {
  const res = await axios.post(
    `/comments/${id}`,
    {
      option: 'upVote',
    },
    { headers }
  );

  return res.data;
}

export async function downVoteToComment(id) {
  const res = await axios.post(
    `/comments/${id}`,
    {
      option: 'downVote',
    },
    { headers }
  );

  return res.data;
}

export async function addPost({ category, title, body, author }) {
  const id = uuidV1();
  const timestamp = Date.now();
  const res = await axios.post(
    `/posts`,
    {
      id,
      timestamp,
      title,
      body,
      author,
      category,
    },
    { headers }
  );

  return res.data;
}

export async function deletePost(id) {
  const res = await axios.delete(`/posts/${id}`, { headers });

  return res.data;
}

export async function getPostByPostId(id) {
  const res = await axios.get(`/posts/${id}`, { headers });

  return res.data;
}

export async function editPostByPostId({ id, title, body }) {
  const res = await axios.put(
    `/posts/${id}`,
    {
      title,
      body,
    },
    { headers }
  );

  return res.data;
}

export async function getAllCommentsByPostId(id) {
  const res = await axios.get(`/posts/${id}/comments`, {
    headers,
  });

  return res.data;
}

export async function deleteComment(id) {
  const res = await axios.delete(`/comments/${id}`, { headers });

  return res.data;
}

export async function addComment({ body, author, parentId }) {
  const id = uuidV1();
  const timestamp = Date.now();
  const res = await axios.post(
    `/comments`,
    {
      id,
      timestamp,
      body,
      author,
      parentId,
    },
    { headers }
  );

  return res.data;
}

export async function editComment({ id, body }) {
  const timestamp = Date.now();
  const res = await axios.put(
    `/comments/${id}`,
    {
      body,
      timestamp,
    },
    { headers }
  );

  return res.data;
}
