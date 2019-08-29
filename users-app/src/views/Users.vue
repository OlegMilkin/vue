<template>
    <div>
      <h2>Список пользователей</h2>
      <div v-if="!users.length" class="alert alert-warning">
        Загрузка...
      </div>
      <component-users v-else :users="users" @:removeUser="removeUser"></component-users>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'UsersPage',
    components: {
      'component-users': () => import('@/components/ComponentUsers.vue')
    },
    data: function(){
      return {
        users: []
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

