<template>
    <form>
        <div class="form-group">
            <label for="test1">Name</label>
            <input type="text" class="form-control" id="test1" aria-describedby="emailHelp" placeholder="Enter name" v-model="localUser.name">
        </div>
        <div class="form-group">
            <label for="test2">Surname</label>
            <input type="text" class="form-control" id="test2" placeholder="Enter surname" v-model="localUser.surname">
        </div>
        <div class="form-group">
            <label for="test3">Patronymic</label>
            <input type="text" class="form-control" id="test3" placeholder="Enter patronymic" v-model="localUser.patronymic">
        </div>

        <pre>Local user {{ localUser }}</pre>
    </form>
</template>

<script>
    export default {
        name: 'UserForm',
        model: {
          prop: 'user',
          event: 'update'
        },
        props: {
            user: {
                type: Object,
                require: true
            }
        },
        data: () => ({
            localUser: null,
            accessList: ['quest', 'user', 'admin']
        }),
        watch: {
            //Нужно если мы хотим отслеживать оюновляется ли user в родительском компоненте
            // user: {
            //     deep: true,
            //     handler() {
            //         if(deepEqual(this.user, this.localUser)) {
            //             return
            //         }
            //         this.localUser = Object.assign({}, this.user);
            //     }
            // },
            localUser: {
                deep: true,
                handler() {
                    this.$emit('update', Object.assign({}, this.localUser));
                }
            }
        },
        created() {
            this.localUser = Object.assign({}, this.user);
        }
    }
</script>
