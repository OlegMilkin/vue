var ComponentUsers = {
    props: {
      user: {
          type: Object
      }
    },
    template: '#component-users-template'
}

var app = new Vue({
    el: '#app',
    data: function () {
        return {
            visibleContent: true,
            users: [],
            buttonText: 'Close'
        }
    },
    created: function() {
        this.users = [
            { name: 'Gadya', surname: 'Hrenova', patronymic: 'Petrovic', photo: 'https://i.ytimg.com/vi/9w1UbHsVdCQ/hqdefault.jpg'},
            { name: 'Igor', surname: 'Pechkin', patronymic: 'Ivanovic', photo: 'https://www.meme-arsenal.com/memes/e932f4f7a33dd1daf16e85902466e97e.jpg'},
            { name: 'Arnold', surname: 'Schwarzenegger', patronymic: 'Alois', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUz5eYjXK9VCglzjGcdFQup3onKFN890_G3vjNq7ck4oiDesc1fw'},
            { name: 'Elon', surname: 'Musk', patronymic: 'Reeve', photo: 'https://www.vladtime.ru/uploads/posts/2018-09/1536332479_pic_77e97cd214bcd333e8f958edb8dce03c.jpg'},
            { name: 'Warren', surname: 'Buffett', patronymic: 'Edward', photo: ''}
        ]
    },
    methods: {
        showContent: function(){
            this.visibleContent = !this.visibleContent;
        }
    },
    computed: {
        computedArrLength: function() {
            return this.users.length;
        },
        computedButtonText: function() {
            return this.visibleContent ? 'Close' : 'Open';
        }
    },
    components: {
        'component-users': ComponentUsers
    }
});
