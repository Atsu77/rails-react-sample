import axios from "axios";
import { postsUrl, postUrl } from "../urls/index";

export const fetchPosts = () => {
  return axios
    .get(postsUrl)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const fetchPost = (postId) => {
  return axios
    .get(postUrl(postId))
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const postPosts = () => {
  return axios
    .post(postsUrl, {
      title: "titleName",
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const putPosts = (postId) => {
  return axios
    .put(postUrl(postId), {
      title: "update_title",
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
export const deletePosts = (postId) => {
  return axios
    .delete(postUrl(postId))
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
