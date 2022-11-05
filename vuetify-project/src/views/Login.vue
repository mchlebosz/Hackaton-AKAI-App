<template>
  <div  :style="{display: !authPage? 'block' : 'none'}">
    <LogInModule @credentials="loadCredentials"/>
  </div>
  <div :style="{display: authPage? 'block' : 'none'}">
    <LogInAuth @auth-pin="validateAuth"></LogInAuth>
  </div>
    <div class="response">{{info}}</div>


</template>

<script>
import axios from 'axios'
import LogInModule from '@/components/loginpage/LogInModule.vue'
import LogInAuth from '@/components/loginpage/LogInAuth.vue'




  export default {
    components: {
    LogInModule,
    LogInAuth
},
    data () {
      return {
        authPage: false,
        inputEmail: null,
        inputPassword: null,
        inputAuthPin: null,
        authKey: null,
        ip: 'https://e503-150-254-4-72.eu.ngrok.io/api',
        info: 'response',
        authResponse: null

      }
    },
    methods: {
      setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
},
      setErrorMessage(message) {
      this.info = message;
    },
       loadCredentials(login, password) {
        //if not empty
        if (login != null && password != null) {
        this.inputEmail = login;
        this.inputPassword = password;
        try {

      axios.post(this.ip+'/account/login', {
          Email: this.inputEmail,
          Password: this.inputPassword
        })
    .then((response) => {
      this.info = response.data;
      if (response.data.startsWith("Bearer")) {
        this.setCookie('token', response.data, 1);
        this.$router.push('/userpage');
      } else {
        this.authPage = true;
        this.authKey = response.data;
      }
      })
      }
      catch (error) {
      }
    }
    },
    validateAuth(pin){
      this.inputAuthPin = pin;
      this.validate2FA()
    },
    validate2FA() {
        axios
      .post(this.ip+'/account/login/2fa',{
        Email: this.inputEmail,
        Password: this.inputPassword,
        Pin: this.inputAuthPin,
        Key : this.authKey

      })
      .then((response) => {(
        this.authResponse = response)
        console.log(response)
        if (response.data.startsWith("Bearer")) {
          this.setCookie('token', response.data, 1);
          this.$router.push('/userpage');
        } else {
          this.setErrorMessage(response.data);
        }
      })
    }
  },
  mounted() {
    console.log('mounted')
    window.addEventListener("unhandledrejection", function(promiseRejectionEvent) {
    // handle error here, for example log
    console.log(promiseRejectionEvent.reason);
    if (promiseRejectionEvent.reason.response.data == 'Wrong email or password!') {
      console.log('Zły email lub hasło')
      this.setErrorMessage('Zły email lub hasło')
    }
    });
  },
  watch: {
    info: function(newVal, oldVal) { // watch it
          console.log('Prop changed: ', newVal, ' | was: ', oldVal)
          console.log(oldVal)
          console.log(newVal)

        }
  }
}
</script>

<style lang="scss">
h1{
    margin-top: 100px;
}

</style>