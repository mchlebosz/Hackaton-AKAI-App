<template>
    <v-container :style="{display: clickedMenu=='call' ? 'block' :'none'}">
            <ChooseModer></ChooseModer>
        </v-container>

    <v-container :style="{display: clickedMenu=='main' ? 'block' :'none'}">



    <h1>Hello user</h1>
    <v-btn
            color="secondary"
            href="#"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            @click="selectMenu('call')"
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

            Rozmawiaj
          </v-btn>
          <v-btn
            color="secondary"
            href="#"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            @click="sendPanic()"
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />
            Panic Button
          </v-btn>
          <v-btn
            color="secondary"
            href="#"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            @click=""
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

           Mój Profil
          </v-btn>
          <v-btn
            color="secondary"
            href="#"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            @click=""
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

            Historia Rozmów
          </v-btn>
        </v-container>
</template>

<script>
import axios from 'axios'
import ChooseModer from '@/components/call/ChooseModer.vue'


export default {
    components: {
      ChooseModer
},
  name: 'UserPage',
  data: () => ({
    clickedMenu: 'main',
    ip: "https://e503-150-254-4-72.eu.ngrok.io/api"


  }),
  methods: {
    sendPin() {
      this.$emit('authPin', this.inputAuthPin);
    },
    selectMenu(menu) {
        this.clickedMenu = menu;
    },
    sendPanic(){
        const token = this.getCookie('token');
        console.log(token);
        console.log(this.ip+'/panic');
        axios.post(this.ip+'/panic', {
            headers: {
                Authorization: token
            }
        }).then((response) => {
            console.log(response);
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
}
}

</script>