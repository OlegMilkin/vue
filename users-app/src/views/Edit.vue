<template>
  <div class="edit">
    <h1>Edit user {{ id }}</h1>
        <div v-if="!user">
            Loading...
        </div>
        <user-form :user="user" v-else @update="user = $event"></user-form>

        <button type="submit" class="btn btn-primary" @click="save">Save</button>

        <!--<pre>-->
            <!--USER {{ user }}-->
        <!--</pre>-->
  </div>
</template>

<script>
  import axios from 'axios';
  import UserForm from '@/components/UserForm'

  export default {
    name: 'EditUserPage',
    components: {
      "user-form": UserForm
    },
    data: () => ({
        user: null
    }),
    computed: {
        id() {
            return this.$route.params.id;
        },
        url() {
            return "http://localhost:3000/users/" + this.id;
        }
    },
    mounted() {
        this.loadData()
    },
    methods: {
        loadData: function() {
            axios.get(this.url)
            .then(response => response.data)
            .then(response => (this.user = response))
            .catch(error => console.error(error))
        },
        save() {
            axios.patch(this.url, this.user)
            .then(() => {
                this.$router.push('/users');
            })
            .catch(error => console.error(error))
        }
    }
  }
</script>
