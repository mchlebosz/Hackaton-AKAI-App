<template>
    <LogInModule @credentials="loadCredentials"/>
    <div class="response">{{info}}</div>

</template>

<script>
import axios from 'axios'
import LogInModule from '@/components/loginpage/LogInModule.vue'



  export default {
    components: {
      LogInModule
    },
    data () {
      return {
        inputLogin: null,
        inputPassword: null,
        ip: 'https://04ba-150-254-4-72.eu.ngrok.io/api',
        info: 'response',
      }
    },
    methods: {
      loadCredentials(login, password) {
        //if not empty
        if (login != null && password != null) {
        this.inputLogin = login;
        this.inputPassword = password;
        try {
          axios
        .post(this.ip+'/account/login', this.postBody)
        .then(response => (this.info = response.data))
        }
        catch (error) {
          console.log(error)
        }

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