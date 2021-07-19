<template>
  <div>
    <div class="newPost">
      <input type="text" placeholder="title" v-model="title" />
      <span class="red-text" v-if="title === ''">add text</span>
      <input type="text" placeholder="body" v-model="body" />
      <span class="red-text" v-if="body === ''">add text</span>
      <select>
        <option value="1" selected>User Id 1</option>
        <option value="2">User Id 2</option>
        <option value="3">User Id 3</option>
        <option value="4">User Id 4</option>
        <option value="5">User Id 5</option>
        <option value="6">User Id 6</option>
        <option value="7">User Id 7</option>
        <option value="8">User Id 8</option>
        <option value="9">User Id 9</option>
        <option value="10">User Id 10</option>
      </select>
    </div>
    <div style="text-align: center">
      <button style="margin-top: 12px" @click="handleAddPost">
        Create post
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AddPost",
  data() {
    return {
      title: "",
      body: "",
      userId: "",
      post: {},
    };
  },
  methods: {
    ...mapActions(["ADD_POST", "GET_POSTS_FROM_API"]),
    handleAddPost() {
      this.POST.title = this.title;
      this.POST.body = this.body;
      this.POST.userId = this.userId;
      // this.POSTS.some(({ id }) => id === this.POST.id) || this.POSTS.push({ ...this.POST, id: this.POST.id + 1 });

      if (this.title !== "" || this.body !== "") {
        const postIsAlreadyIncluded = this.POSTS.some(
          ({ id }) => id === this.POST.id
        );
        if (!postIsAlreadyIncluded) {
          this.POSTS.push({ ...this.POST, id: this.POST.id + 1 });
        }
        this.$router.push({ path: "/posts" });
      }
      this.title = "";
      this.body = "";
    },
  },
  computed: {
    ...mapGetters(["POST", "POSTS"]),
  },
  mounted() {
    this.ADD_POST();
    this.GET_POSTS_FROM_API();
  },
};
</script>

<style scoped>
select {
  display: block;
}
.newPost {
  margin: 0 auto;
  width: 500px;
}
.red-text {
  font-size: 10px;
  vertical-align: super;
}
.newPost input {
  margin: 0 !important;
}
</style>
