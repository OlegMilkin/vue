<template>
<div>
    <h2>Список пользователей</h2>
    <user-show-dropdown v-model="selected"></user-show-dropdown>
    <div v-if="!users.length" class="alert alert-warning">
      Загрузка...
    </div>
    <component-users v-else :users="users" :visible="selected" v-on:removeUser="removeUser"></component-users>
</div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'UsersPage',
    components: {
      'component-users': () => import('@/components/ComponentUsers.vue'),
      'user-show-dropdown': () => import('@/components/UserShowDropdown.vue')
    },
    data: function(){
      return {
        users: [],
        selected: 5
      }
    },
    mounted: function() {
      this.loadData();
    },
    methods: {
      loadData: function() {
        const token = '1234567890';

        const config = {
            headers: {
                Autorization: `Bearer ${token}`
            }
        }

        axios.get('http://localhost:3000/users/', config)
                .then(response => response.data)
                .then(response => (this.users = response))
                .catch(error => console.error(error))
      },
      removeUser(id) {
          axios.delete('http://localhost:3000/users/' + id)
          .catch(error => console.error(error))
          this.loadData();
      }
    }
  }
</script>

