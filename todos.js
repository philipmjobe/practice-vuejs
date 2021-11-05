/* global Vue, axios */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      todos: [],
      userId: 0,
      title: "",
    };
  },
  methods: {
    // ...
    loadTodos: function () {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response.data);
        this.todos = response.data;
      });
    },
    maketodo: function () {
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          userId: this.userId,
          title: this.title,
          completed: false,
        })
        .then((response) => {
          console.log(response.data);
          this.todos = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
});
