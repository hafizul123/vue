
//instance one
var one = new Vue({
    el: '#app',

    data: {
        title: "Title One",
        foods: "Mango"
    },
    methods: {
        getRefs() {
            this.foods = this.$refs.input_ref.value;
            console.log(this.$refs);
        }
    },

});

