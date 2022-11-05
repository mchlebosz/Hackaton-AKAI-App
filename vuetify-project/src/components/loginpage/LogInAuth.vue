<template>
    <div class="dist"></div>
    <v-form>
        <v-container>
            <v-row>
    <v-col>
    <v-text-field
            v-model="inputAuthPin"
            label="Kod 2FA"
            outlined
            dark
            flat
            filled
            bg-color="primary"
            color="secondary"
          ></v-text-field>
          <v-btn @click="sendPin()">
          Confirm 2FA
      </v-btn>
        </v-col>
      </v-row>


    </v-container>
    </v-form>


</template>

<script>
export default {
  name: 'LogInAuth',
  emits: ['authPin'],
  data: () => ({
    inputAuthPin: '',
  }),
  methods: {
    sendPin() {
      this.$emit('authPin', this.inputAuthPin);
    },

  },
};

</script>

<style lang="scss" scoped>
    div.dist{
        height: 200px;
    }

</style>