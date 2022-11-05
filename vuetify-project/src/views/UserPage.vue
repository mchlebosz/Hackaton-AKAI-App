<template>
    <div class="user" :style="{display: role == 'user'? 'block' : 'none'}">
        <UserMenu></UserMenu>
    </div>
    <div class="mod" :style="{display: role == 'mod'? 'block' : 'none'}">
        <ModeratorMenu></ModeratorMenu>
    </div>
    <div class="admin" :style="{display: role == 'admin'? 'block' : 'none'}">
        <Admin></Admin>
    </div>

</template>


<script>
import axios from 'axios'
import UserMenu from '@/components/userpage/UserMenu.vue'
import ModeratorMenu from '@/components/userpage/ModeratorMenu.vue'
import Admin from '@/components/userpage/Admin.vue'


export default {
    components: {
        UserMenu,
        ModeratorMenu,
        Admin
},
  name: 'UserPage',
  data: () => ({
    role: null,
    ip: "https://e503-150-254-4-72.eu.ngrok.io/api"
  }),
  methods: {
    sendPin() {
      this.$emit('authPin', this.inputAuthPin);
    },
    getRole(){
        console.log(this.getCookie('token'));
        const token = this.getCookie('token');
        axios.get(this.ip+'/account/role', {
            headers: {
                Authorization: token
            }
        })
            .then((response) => {
                if(response.data == 0){
                    this.role = 'user';
                }
                else if(response.data == 1){
                    this.role = 'mod';
                }
                else if(response.data == 2){
                    this.role = 'admin';
                }
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
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
  mounted(){
    this.getRole();
  }
};

</script>