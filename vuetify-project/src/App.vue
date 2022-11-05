<template>
  <v-app>
    <v-main>
      <button class="my-button">Button</button>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script setup>
  import HelloWorld from '@/components/HelloWorld.vue'
</script>

<style lang="scss">
 @use './settings';

.my-button {
  //height: settings.$button-height;
}

</style>