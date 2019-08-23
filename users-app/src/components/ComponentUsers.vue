<template>
    <table class="table table-striped table-dark">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Patronymic</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user.id">
            <td>
                <router-link :to="'/edit/' + user.id">
                    {{ user.id }}
                </router-link>
            </td>
            <td>{{ user.name }}</td>
            <td>{{ user.surname }}</td>
            <td>{{ user.patronymic }}</td>
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
        }
    },
    computed: {
        total: function(){
            return this.users.length
        }
    }
}
</script>
