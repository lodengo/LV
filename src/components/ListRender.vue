<template>
  <div>
    <ul id="example-1">
      <li v-for="(item, index) in items" :key="item.message">
        {{ index }}-{{ item.message }}
      </li>
    </ul>
    <p>
      在遍历对象时，会按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的
      JavaScript 引擎下都一致。
    </p>
    <p>
      不要使用对象或数组之类的非基本类型值作为 v-for 的
      key。请用字符串或数值类型的值。
    </p>
    <ul id="v-for-object" class="demo">
      <li v-for="(value, name, index) of object" :key="index">
        {{ name }} : {{ value }}
      </li>
    </ul>
    <p>
      Vue
      将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：
    </p>
    <ul>
      <li><code>push()</code></li>
      <li><code>pop()</code></li>
      <li><code>shift()</code></li>
      <li><code>unshift()</code></li>
      <li><code>splice()</code></li>
      <li><code>sort()</code></li>
      <li><code>reverse()</code></li>
    </ul>
    <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    <p>todo example</p>
    <div id="todo-list-example">
      <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">Add a todo</label>
        <input
          v-model="newTodoText"
          id="new-todo"
          placeholder="E.g. Feed the cat"
        />
        <button>Add</button>
      </form>
      <ul>
        <li
          is="todo-item"
          v-for="(todo, index) in todos"
          v-bind:key="todo.id"
          v-bind:title="todo.title"
          v-on:remove="todos.splice(index, 1)"
        ></li>
        <todoItem
          v-for="(todo, index) in todos"
          v-bind:key="todo.id"
          v-bind:title="todo.title"
          v-on:remove="todos.splice(index, 1)"
        ></todoItem>
      </ul>
    </div>
    <p class="tip">
      注意这里的 <code>is="todo-item"</code> attribute。这种做法在使用 DOM
      模板时是十分必要的，因为在 <code>&lt;ul&gt;</code> 元素内只有
      <code>&lt;li&gt;</code> 元素会被看作有效内容。这样做实现的效果与
      <code>&lt;todo-item&gt;</code>
      相同，但是可以避开一些潜在的浏览器解析错误
    </p>
  </div>
</template>

<script>
import Vue from "vue";
import todoItem from "./todoItem.vue";

var example1 = Vue.component("demo", {
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
      object: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
      numbers: [1, 2, 4, 2, 3, 4, 5],
      newTodoText: "",
      todos: [],
    };
  },
  components: {
    todoItem,
  },
  methods: {
    addNewTodo: function() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
      });
      this.newTodoText = "";
    },
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0;
      });
    },
  },
});

export default example1;
</script>
