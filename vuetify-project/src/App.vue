<template>
  <v-app>
    <Navigation></Navigation>
    <div class="dist"></div>
    <router-view></router-view>
      <!-- <Footer ></Footer> -->
  </v-app>
</template>

<script setup>
  //import HomepageVue from '@/views/Homepage.vue';
  import Navigation from '@/components/Navigation.vue';
  import Footer from '@/components/Footer.vue';
  //import Login from '@/views/Login.vue';
</script>

<style lang="scss">
div.dist{
  margin-top: 200px;
}



</style>