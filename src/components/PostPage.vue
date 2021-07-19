<template>
 <div class="page-post" >  
    <div class="post">
      <p class="title">{{ post.title }}</p>
      <p class="body">{{ post.body }}</p>
    </div>
    <div class="comment" v-for="coment in comments" :key="coment.id">
      <p v-if="post.id === coment.postId">{{ coment.body }}</p>
    </div>
    <div>
      <button @click="$router.go(-1)">Back</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostPage",
  props: {
    post: {
      type: Object,
      require: true,
    },
    comments: {
      type: Array,
         require: true,
    },
  },
  data() {
    return {

      };
  },
};
</script>
<style scoped>
.post {
  min-height: 50px;

  border: 1px solid black;
}
.title {
  background-color: #95bddc;
  padding: 10px;
  font-size: 16px;
}
.title:first-letter {
  text-transform: uppercase;
}
.body {
  padding: 10px;
  font-size: 14px;
  background-color: #c2d1e5;
}
.page-post {
  width: 800px;
  margin: 0 auto;
  margin-bottom: 20px;
}
.comment {
  width: 400px;
  margin-left: 60px;
}
</style>