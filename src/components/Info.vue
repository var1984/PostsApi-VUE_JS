<template>
<div class="wrapCard">
  <div v-if="showInfo" >
    <div class="row">
      <div class="col s6 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">Info company</span>
            <p>
              {{ user.company.name }}
            </p>
            <p>
              {{ user.company.catchPhrase }}
            </p>
            <p>
              {{ user.company.bs }}
            </p>
          </div>
          <div class="card-action">
            <a href="#" @click="closeInfo">Close</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: "Info",
  props: {
    showInfo: {
      type: Boolean,
    },

    user: {
      type: Object,
    },
  },
  methods: {
    closeInfo() {
      this.$emit("closeInfo");
    },
  },
};
</script>
<style sciped>
.wrapCard {
  position: absolute;
  width: 700px;
  top: 20%;
  left: 40%;

}
</style>