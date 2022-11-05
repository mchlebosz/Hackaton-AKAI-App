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
            label="Outlined"
            outlined
            clearable
            dark
            flat
            filled
            bg-color="primary"
            color="secondary"
          ></v-text-field>
          <v-text-field
            v-model="inputPassword"
            label="Outlined"
            outlined
            dark
            clearable
            filled
            bg-color="secondary"
            color="primary"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn @click="validateLogIn()">
          Log In
      </v-btn>
      <div>
        <p> {{info}}</p>

      </div>
    </v-container>
  </v-form>

</template>

<script>
import axios from 'axios'
  export default {
    data () {
      return {
        inputLogin: null,
        inputPassword: null,
        ip: 'https://04ba-150-254-4-72.eu.ngrok.io/api',
        info: 'response',
        postBody:{
            'email': 'kubs2@ez.pl',
            'password': '12345678'
          }
      }
    },
    methods: {
      validateLogIn() {
        axios
      .post(this.ip+'/account/login',{
          email: this.inputLogin,
          password: this.inputPassword
      })
      .then(response => (this.info = response))
      }
    }
  }
</script>

<style lang="scss">
h1{
    margin-top: 100px;
}

</style>