<template>
    <v-table theme="dark">
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Age
        </th>
        <th class="text-left">
          Photo
        </th>
        <th class="text-left">
            Availability
        </th>
        <th class="text-left">
            Call
        </th>

      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in mods"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td><v-img :src="item.photo"></v-img></td>
        <td v-if="item.availability == 'Available'">  <v-btn
          icon="mdi-account-check"
          color="success"
        ></v-btn>
        {{ item.availability }}</td>
        <td v-if="item.availability == 'Away'">  <v-btn
          icon="mdi-moon-waning-crescent"
          color="white"
          disabled
        ></v-btn>
        {{ item.availability }}</td>
        <td v-if="item.availability == 'Busy'"> <v-btn
          icon="mdi-minus-circle"
          color="warning"
        ></v-btn>
        {{ item.availability }}</td>

    <td v-if="item.availability == 'Available'"> <v-btn
      variant="flat"
      color="success"
      icon="mdi-phone-in-talk"
      @click="goToMod(item.id)"
    >

    </v-btn></td>
    <td v-else>
        <v-btn
      variant="flat"
      color="error"
      icon="mdi-phone-in-talk"
      disabled

    >

    </v-btn></td>
      </tr>
    </tbody>
  </v-table>


</template>

<script>
  export default {
    data () {
      return {
        mods: [
          {
            name: 'Maria Anders',
            age: 45,
            photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            availability: 'Available',
            id: 1,
          },
        {
            name: 'John Doe',
            age: 32,
            photo: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            availability: 'Away',
            id: 2,
        },
        {
            name: 'Karl Jenkins',
            age: 25,
            photo: 'https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            availability: 'Busy',
            id: 3,
        },
        {
            name: 'Jane Doe',
            age: 18,
            photo: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            availability: 'Available',
            id: 4,
        },

        ],
      }
    },
    methods: {
    goToMod(id){
        //routing
      this.$router.push('/call/'+id);

    }
}
  }
</script>