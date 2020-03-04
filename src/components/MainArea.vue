<template>
  <div>
    <div
      id="wrapper"
      class="active container col-md-10"
    >
      <MenuSideBar></MenuSideBar>
      <div
        id="page-content-wrapper"
        class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"
      >
        <div class="page-content inset">
          <div class="row">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Start from "./Start.vue";
import MenuSideBar from './MenuSideBar.vue';

export default {
  name: 'MainArea',
  // components: { MenuSideBar, Start },
  components: { MenuSideBar },
  mounted () {
    this.$router.push('/main/start');
  },
};
</script>
