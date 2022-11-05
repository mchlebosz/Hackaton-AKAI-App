<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-btn color="primary" rounded="pill"> Button </v-btn>
      <v-btn color="secondary" rounded="pill" variant="outlined">
        Button
      </v-btn>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>

<style lang="scss">
#inspire {
  padding: 0;
  margin: 0;
  background: #282828;
}
</style>
