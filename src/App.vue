<template>
  <topBar />
  <!-- views -->
  <router-view name="myOrg" />
  <br />
</template>

<script>
import topBar from './components/TopBar.vue';
export default {
  data() {
    return {};
  },
  components: { topBar },
};
</script>
