import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    comments: [],
    post: {},
    users: [],
  },
  mutations: {
    SET_POSTS_TO_STATE: (state, posts) => {
      state.posts = posts;
    },
    SET_COMMENTS_TO_STATE: (state, comments) => {
      state.comments = comments;
    },
    SET_ADD_POST_TO_STATE: (state, post) => {
      state.post = post;
    },
    SET_ALL_USER_TO_STATE: (state, users) => {
      state.users = users;
    },
  },
  actions: {
    async GET_POSTS_FROM_API({ commit }) {
      await axios("https://jsonplaceholder.typicode.com/posts/", {
        method: "GET",
      })
        .then((posts) => {
          commit("SET_POSTS_TO_STATE", posts.data);
          return posts;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    async GET_COMMENTS_FROM_API({ commit }) {
      await axios("https://jsonplaceholder.typicode.com/comments/", {
        method: "GET",
      })
        .then((comments) => {
          commit("SET_COMMENTS_TO_STATE", comments.data);
          return comments;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    async ADD_POST({ commit }) {
      await axios("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
      })
        .then((post) => {
          commit("SET_ADD_POST_TO_STATE", post.data);
          return post;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    async ALL_USERS_FROM_API({ commit }) {
      await axios("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
      })
        .then((users) => {
          commit("SET_ALL_USER_TO_STATE", users.data);
          return users;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  getters: {
    POSTS(state) {
      return state.posts;
    },
    COMMENTS(state) {
      return state.comments;
    },
    POST(state) {
      return state.post;
    },
    USERS(state) {
      return state.users;
    },
  },
});
