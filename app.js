angular
  .module("app", [])
  .component("todoList", {
    controller: function() {
      this.Todos = ["WakeUp", "Hacking"];
      this.addTodo = () => {
        this.Todos.push(this.newTodo);
        this.newTodo = "";
      };
      this.removeTodo = $index => {
        console.log(this.Todos[$index], $index);
        this.Todos.splice($index, 1);
      };
    },
    template: `
  <h1>Todo List</h1>
  <input ng-model = '$ctrl.newTodo'>
  <button ng-click = "$ctrl.addTodo()"> Add </button>
  <ul>
    <entry
    todos = "todo"
      ng-repeat = "todo in $ctrl.Todos track by $index "
      ng-click = "$ctrl.removeTodo($index)"
    />
  </ul>
  `
  })
  .component("entry", {
    bindings: {
      todos: "<"
    },
    template: `<li>{{$ctrl.todos}}</li>`
  });
