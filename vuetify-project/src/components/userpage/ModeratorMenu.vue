<template>
    <h1>Hello Mod</h1>
    <h2>Alerts:</h2>

    <div class="alerts">
        <li v-for="item in alerts">
  {{ item }}
</li>

</div>
</template>

<script>
import axios from 'axios'
import ChooseModer from '@/components/call/ChooseModer.vue'


export default {
    components: {
      ChooseModer
},
  name: 'ModeratorMenu',
  data: () => ({
    ip: "https://e503-150-254-4-72.eu.ngrok.io/api",
    alerts: '',
    timer: null
  }),
  mounted() {
        this.recieveAlerts()

        this.timer = setInterval(() => {
            this.recieveAlerts()
        }, 10000)
    },
beforeDestroy() {
    clearInterval(this.timer)
    },
  methods: {
    resolveUser(id) {
        const token = this.getCookie('token')

        axios.get(this.ip+'/info?userid='+id, {
            headers: {
            Authorization: token
            }
        })
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error)
      })
    },
    recieveAlerts(){
        const token = this.getCookie('token')
        axios.get(this.ip+'/alerts', {
            headers: {
            Authorization: token
            }
        })
        .then((response) => {
            this.alerts = response.data;
            console.log(this.alerts);
        })
        .catch((error) => {
            console.log(error);
        })
        },


    getCookie(cname) {
      const name = cname + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
},
}
</script>