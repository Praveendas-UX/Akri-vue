<template>
  <div class="container">
    <div class="nav">
      <div class="orgDiv" @click="activeTab">Users</div>
      <div class="orgDiv" @click="activeTab">Operators</div>
    </div>
    <component :is="selectedTab"></component>
  </div>
</template>

<script>
import Users from '../components/Myorg/Users.vue';
import Operators from '../components/Myorg/Operators.vue';
export default {
  data() {
    return {
      selectedTab: '',
    };
  },
  components: { Users, Operators },
  methods: {
    activeTab(tab) {
      tab.target.classList.toggle('highlightOrgDiv');
      console.log(tab);
      tab.target.nextSibling.classList.remove('highlightOrgDiv');
      this.selectedTab = tab.target.outerText;
    },
  },
};
</script>

<style>
.nav {
  border-bottom: 1px solid #c8ced3;
  display: flex;
  flex-wrap: wrap;
  padding-top: 64px;
}
.orgDiv {
  color: #73818f;
  background: #fff;
  border-color: #fff;
  display: block;
  padding: 0.5rem 1rem;
}
.highlightOrgDiv {
  color: #2f353a;
  border-bottom: 5px solid #007bff;
}
</style>
