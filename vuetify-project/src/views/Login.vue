<template>
  <div  :style="{display: !authPage? 'block' : 'none'}">
    <LogInModule @credentials="loadCredentials"/>
  </div>
  <div :style="{display: authPage? 'block' : 'none'}">
    <LogInAuth ></LogInAuth>
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
        inputLogin: null,
        inputPassword: null,
        ip: 'https://04ba-150-254-4-72.eu.ngrok.io/api',
        info: 'response',

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
        this.inputLogin = login;
        this.inputPassword = password;
        try {

      axios.post(this.ip+'/account/login', {
          Email: this.inputLogin,
          Password: this.inputPassword
        })
    .then((response) => {
      this.info = response.data;
      if (response.data.startsWith("Bearer")) {
        this.setCookie('token', response.data, 1);
        this.$router.push('/UserPage');
      } else {
        this.authPage = true;
        this.setErrorMessage("Goto2FA");

      }
      })
      }
      catch (error) {
      }
    }
    },
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
  }
}
</script>

<style lang="scss">
h1{
    margin-top: 100px;
}

</style>