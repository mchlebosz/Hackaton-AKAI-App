<template>

<v-main>
    <h1 class="display-1">Jak możemy Ci pomóc?</h1>
    <v-btn
            color="secondary"
            href="#"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            @click="goToLogin()"
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

            Log In
          </v-btn>
          <v-btn

            color="secondary"
            href="#"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            @click="goToRegister()"

          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

            REgister
          </v-btn>
  </v-main>
</template>

<script>
  export default {
    name: 'Homepage',
  methods: {
    goToLogin() {
      this.$router.push('/login');
    },
    goToRegister() {
      this.$router.push('/register');
    }
  },
    data: () => ({ drawer: null }),
  }
</script>
