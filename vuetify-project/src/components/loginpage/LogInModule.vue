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
            v-model="inputEmail"
            label="Email"
            outlined
            clearable
            dark
            flat
            filled
            bg-color="primary"
            color="secondary"
            :error-messages="errorMessages[0]"
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
            :error-messages="errorMessages[1]"
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
        inputEmail: null,
        inputPassword: null,
        ip: 'https://04ba-150-254-4-72.eu.ngrok.io/api',
        info: 'response',
        errorMessages: ["", ""],
        errorPass: [true , true],
        loading: false,
      }
    },
    methods: {
      validateLogIn() {
        if (this.inputEmail == null ){
            this.errorMessages[0] = "Pole nie może być puste"
        }
        else{
            this.errorMessages[0] = ""
        }
        //email validation
        if (this.inputEmail != null && this.inputEmail.includes("@") && this.inputEmail.includes(".")){
            this.errorMessages[0] = ""
        }
        else{
            this.errorMessages[0] = "Niepoprawny email"
        }
        if (this.inputPassword == null ){
            this.errorMessages[1] = "Pole nie może być puste"
        }
        else{
            this.errorMessages[1] = ""
        }
        if (this.inputEmail != null && this.inputPassword != null && this.inputEmail.includes("@") && this.inputEmail.includes(".")) {
            this.loading = true;
            this.$emit('credentials', this.inputEmail, this.inputPassword);

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