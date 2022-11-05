<template>
<v-navigation-drawer v-model="drawer" location="right"  >
    <v-btn
          rounded="pill"
            color="secondary"
            href="#"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            variant="flat"
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

            Get Started
          </v-btn>
          <v-btn
          rounded="pill"
            color="secondary"
            href="#"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            variant="flat"
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

            Get Started
          </v-btn>
          <v-btn
          rounded="pill"
            color="secondary"
            href="#"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            variant="flat"
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

            Get Started
          </v-btn>
  </v-navigation-drawer>

<v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title><router-link to="/">OK Way</router-link> </v-toolbar-title>
  </v-app-bar>
</template>
<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>