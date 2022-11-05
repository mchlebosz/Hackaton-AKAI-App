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
                    v-model="inputName"
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
                    v-model="inputSurname"
                    label="Outlined"
                    outlined
                    dark
                    clearable
                    filled
                    bg-color="secondary"
                    color="primary"
                ></v-text-field>
                <v-text-field
                    v-model="inputNickname"
                    label="Outlined"
                    outlined
                    dark
                    clearable
                    filled
                    bg-color="secondary"
                    color="primary"
                ></v-text-field>
            <v-text-field
            v-model="inputEmail"
            label="Outlined"
            outlined
            dark
            clearable
            filled
            bg-color="secondary"
            color="primary"
          ></v-text-field>
          <v-text-field
                    v-model="inputPassword"
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
                    v-model="inputRepeatPassword"
                    label="Outlined"
                    outlined
                    dark
                    clearable
                    filled
                    bg-color="secondary"
                    color="primary"
                ></v-text-field>
                <v-btn @click="validateRegister()">
          Register
      </v-btn>
                <v-switch
    v-model="do2FA"
    hide-details
    inset
    :label="`Switch: ${do2FA.toString()}`"
  ></v-switch>
  <v-img :src=authQRCode>
  </v-img>
  <div class="manua">
        {{authCode}}
    </div>
            <v-text-field
            v-model="inputAuthPin"
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
      <v-btn @click="validate2FA()">
          Confirm 2FA
      </v-btn>
      <div>{{authResponse}}</div>
    </v-container>
  </v-form>

</template>

<script>
import axios from 'axios'

  export default {
    data () {
      return {
        registerResponse:  ['','',''],
        authCode: '',
        authKey: '',
        authQRCode: '',
        authResponse: 'authResponse',
        do2FA: true,
        inputName: 'Imię',
        inputSurname: 'Nazwisko',
        inputNickname: 'Nick',
        inputEmail: 'Email@Email.pl',
        inputPassword: 'Hasło1234',
        inputRepeatPassword: 'Powtórz hasło',
        inputAuthPin: 'Wpisz kod',
        ip: 'https://e503-150-254-4-72.eu.ngrok.io/api',

      }
    },
    methods: {
      validateRegister() {
        axios
      .post(this.ip+'/account/register',{
        FirstName: this.inputName,
        LastName: this.inputSurname,
        Email: this.inputEmail,
        Password: this.inputPassword,
        Nickname: this.inputNickname,
        Is2FAEnabled: this.do2FA
      })
      .then(response => (this.registerResponse = response.data))

      },
      validate2FA() {
        axios
      .post(this.ip+'/account/login/2fa',{
        Email: this.inputEmail,
        Password: this.inputPassword,
        Pin: this.inputAuthPin,
        Key : this.authKey

      })
      .then(response => (this.authResponse = response))
    }
    },
    watch: {
        registerResponse: function(newVal, oldVal) { // watch it
          console.log('Prop changed: ', newVal, ' | was: ', oldVal)
          console.log(newVal[2])
          console.log(newVal[1])
          console.log(newVal[0])
            this.authCode = newVal[0]
            this.authQRCode = newVal[1]
            this.authKey = newVal[2]

        }
  }
}

</script>

<style lang="scss">
h1{
    margin-top: 100px;
}

</style>