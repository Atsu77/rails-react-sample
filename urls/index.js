const DEFAULT_API_LOCALHOST = "http://localhost:3000/api/v1";

export const postsUrl = `${DEFAULT_API_LOCALHOST}/posts`;
export const postUrl = (post_id) =>  `${DEFAULT_API_LOCALHOST}/posts/${post_id}`;