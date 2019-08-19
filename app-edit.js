var ComponentUserForm = {
    props: {
      user: {
          type: Object
      }
    },
    template: '<form>\n' +
        '  <div class="form-group">\n' +
        '    <label for="formGroupExampleInput1">Enter new name</label>\n' +
        '    <input type="text" class="form-control" id="formGroupExampleInput1" :placeholder="user.name">\n' +
        '  </div>\n' +
        '  <div class="form-group">\n' +
        '    <label for="formGroupExampleInput2">Enter new surname</label>\n' +
        '    <input type="text" class="form-control" id="formGroupExampleInput2" :placeholder="user.surname">\n' +
        '  </div>\n' +
        '  <div class="form-group">\n' +
        '    <label for="formGroupExampleInput3">Enter new patronymic</label>\n' +
        '    <input type="text" class="form-control" id="formGroupExampleInput3" :placeholder="user.patronymic">\n' +
        '  </div>\n' +
        '<button type="submit" class="btn btn-primary">Save</button>' +
        '</form>'
}

var app = new Vue({
    el: '#app',
    data: function () {
        return {
            user: {}
        }
    },
    created: function() {
        this.user = { name: 'Gadya', surname: 'Hrenova', patronymic: 'Petrovic', photo: 'https://i.ytimg.com/vi/9w1UbHsVdCQ/hqdefault.jpg'}
    },
    methods: {
    },
    computed: {
    },
    components: {
        'user-form': ComponentUserForm
    }
});
