<template>
  <div>
    <table class="striped">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>website</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in USERS" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.website }}</td>
          <button @click="shofInfo(user)">Info</button>
        </tr>
      </tbody>
    </table>
    <Info :showInfo="showInfo" :user="user" @closeInfo="closeInfo" />
    <button @click="backPage">Back</button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Info from "../components/Info.vue";
export default {
  name: "Users",
  components: {
    Info,
  },
  data() {
    return {
      showInfo: false,
      user: {},
    };
  },
  methods: {
    ...mapActions(["ALL_USERS_FROM_API"]),
    shofInfo(user) {
      this.showInfo = true;
      this.user = user;
    },
    closeInfo() {
      this.showInfo = false;
    },
    backPage() {
      this.$router.push({ path: "/posts" });
    },
  },
  computed: {
    ...mapGetters(["USERS"]),
  },
  mounted() {
    this.ALL_USERS_FROM_API();
  },
};
</script>
<style>
</style>