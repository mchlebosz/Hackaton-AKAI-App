<template>
    <v-form>
        <h1>Log In</h1>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
    <v-text-field
            v-model="inputLogin"
            label="Login"
            outlined
            clearable
            dark
            flat
            filled
            bg-color="primary"
            color="secondary"
            :error-messages="!errorPass[0] ? errorMessage: ''"
          ></v-text-field>
          <v-text-field
            v-model="inputPassword"
            outlined
            dark
            clearable
            filled
            bg-color="primary"
            color="secondary"
            type="password"
            name="password"
            label="Hasło"
            :error-messages="!errorPass[1] ? errorMessage: ''"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn :loading="loading" :disabled="loading" @click="validateLogIn()">
          Log In
      </v-btn>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    emits: ['credentials'],
    data () {
      return {
        inputLogin: null,
        inputPassword: null,
        ip: 'https://04ba-150-254-4-72.eu.ngrok.io/api',
        info: 'response',
        errorMessage: "Pole nie może być puste",
        errorPass: [true , true],
        loading: false,
      }
    },
    methods: {
      validateLogIn() {
        if (this.inputLogin == null ){
            this.errorPass[0] = false;
        }
        else{
            this.errorPass[0] = true;
        }
        if (this.inputPassword == null ){
            this.errorPass[1] = false;
        }
        else{
            this.errorPass[1] = true;
        }
        if (this.inputLogin != null && this.inputPassword != null) {
            this.loading = true;
            this.$emit('credentials', this.inputLogin, this.inputPassword);

        }
    }
  }
}
</script>

<style lang="scss">
h1{
    margin-top: 100px;
}

</style>