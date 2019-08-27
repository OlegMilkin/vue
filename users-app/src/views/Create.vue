<template>
  <div>
      <h2>
            Create Page
      </h2>
      <user-form  @update="user = $event"></user-form>

      <button type="button" class="btn btn-primary" @click="create">Create</button>
  </div>
</template>

<script>
import axios from 'axios';
import UserForm from '@/components/UserForm'

export default {
    name: "CreateUserPage",
    data: () => ({
        user: null
    }),
    components: {
      "user-form": UserForm
    },
    methods: {
        create(){
            axios.post("http://localhost:3000/users/", {
                id: 0,
                name:  this.user.name,
                surname: this.user.surname,
                patronymic: this.user.patronymic
            })
             .then(() => {
                this.$router.push('/users');
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>