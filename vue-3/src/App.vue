<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";

import { defineProps, reactive } from "vue";
import { MDBBtn } from "mdb-vue-ui-kit";

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it you wobly dobly do!" />
    </div>
    <MDBBtn color="primary" class="mb-3" @click="state.count++">
      count is: {{ state.count }}
    </MDBBtn>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  div {
    border: 1px solid #1fc;
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
