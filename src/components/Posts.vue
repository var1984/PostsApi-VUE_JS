<template>
  <div>
    <router-link
      :to="{
        name: 'postPage',
        params: {
           id: post.id,
          post: post,
          comments: COMMENTS,  
        },
      }"
    >
      <div class="wrapPosts">
        <div
          class="posts"
          v-for="post in paginPosts"
          :key="post.id"
          @click="showPost(post)"
        >
          <p class="title">{{ post.title }}</p>
        </div>
      </div>
    </router-link>
    <div class="wrapBtn">
  <router-link  :to="{name:'addPost'}"><button class="waves-effect waves-light btn-small">Add post</button></router-link>
  <router-link  :to="{name:'Users'}"><button class="waves-effect waves-light btn-small">Users</button></router-link>
  </div>
    <div class="wrapPageNum">
      <paginate
        :page-count="pages"
        :click-handler="pageClick"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
      />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";


export default {
  name: "Posts",

  data() {
    return {
      postsPerPage: 10,
      pageNumber: 1,
      post: {},
    };
  },
  methods: {
    pageClick(page) {
      this.$router.push({ path: "posts",  query: { page: page } });
      this.pageNumber = page;
    },
    prev() {
      this.pageNumber -= 1;
    },
    next() {
      this.pageNumber += 1;
      if (this.pageNumber >= this.pages.length) {
        return this.pageNumber;
      }
    },
    showPost(post) {
      this.post = post;
    },
    ...mapActions(["GET_COMMENTS_FROM_API", "GET_POSTS_FROM_API"]),
  },
  computed: {
    pages() {
      return Math.ceil(this.POSTS.length / this.postsPerPage);
    },
    paginPosts() {
      let from = (this.pageNumber - 1) * this.postsPerPage;
      let to = from + this.postsPerPage;
      return this.POSTS.slice(from, to);
    },
    ...mapGetters(["COMMENTS", "POSTS"]),
  },
  mounted() {
    this.GET_COMMENTS_FROM_API();
    this.GET_POSTS_FROM_API();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  user-select: none;
}
.wrapPosts {
  display: flex;
  flex-wrap: wrap;
}
.posts {
  width: 800px;
  min-height: 50px;
  margin: 0 auto;
  margin-bottom: 20px;
}
.title {
  background-color: #a0c7fa;
  padding: 10px;
  font-size: 16px;
  color: #000;
}
.title:first-letter {
  text-transform: uppercase;
}
.title:hover {
  color: #fff;
  cursor: pointer;
}
.body {
  padding: 10px;
  font-size: 14px;
  background-color: #a0c7fa;
}
.body:first-letter {
  text-transform: uppercase;
}
.page {
  display: inline-block;
  font-size: 15px;
  padding: 5px;
  border: 1px solid #000;
}
.wrapPageNum {
  display: flex;
  justify-content: center;
}
.pageNum {
  margin-left: 15px;

  cursor: pointer;
}
.next {
  margin-left: 15px;
}
.arow {
  cursor: pointer;
}
.btn {
  width: 50px;
  height: 30px;
}
.btn:hover:enabled {
  background-color: #523637;
  color: #fff;
}
.pageSelected {
  background-color: #523637;
  color: #fff;
  border: none;
}
.wrapBtn{
  width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>