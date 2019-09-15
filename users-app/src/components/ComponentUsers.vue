<template>
    <table class="table table-striped table-dark">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Patronymic</th>
            <th scope="col">&nbsp;</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in newUsers" :key="user.id">
            <td>
                <router-link :to="'/edit/' + user.id">
                    {{ user.id }}
                </router-link>
            </td>
            <td>{{ user.name }}</td>
            <td>{{ user.surname }}</td>
            <td>{{ user.patronymic }}</td>
            <td>
                <button type="button" class="btn btn-primary float-right" v-on:click="$emit('removeUser', user.id)">Remove</button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'UserList',
    props: {
        users: {
            type: Array,
            required: true
        },
        visible: Number
    },
    computed: {
        total: function(){
            return this.users.length
        },
        newUsers: function() {
            return this.users.slice(1,this.visible + 1)
            //return this.users
        }
    }
}
</script>
