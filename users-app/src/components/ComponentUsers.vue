<template>
    <table class="table table-striped table-dark">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Patronymic</th>
            <th scope="col">Photo</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user.id">
            <td></td>
            <td>{{ user.name }}</td>
            <td>{{ user.surname }}</td>
            <td>{{ user.patronymic }}</td>
            <td>
                <template>
                    <img :src="user.photo" alt="..." class="img-thumbnail" width="100" v-if="user.photo">
                    <img v-else src="http://cdn.onlinewebfonts.com/svg/img_264157.png" alt="..." class="img-thumbnail" width="100">
                </template>
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
        }
    },
    computed: {
        total: function(){
            return this.users.length
        }
    }
}
</script>
