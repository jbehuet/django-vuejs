<template>
<div class="row">
  <div class="col-sm-6 col-sm-offset-3">
    <div class="row">
      <div class="col-md-6">
        <h1>Todos</h1>
      </div>
      <div class="col-md-6">
        <button class="btn btn-primary pull-right btn-todos" v-on:click="getTodos()">Get todos</button>
      </div>
    </div>
    <div v-if="todos">
      <li v-for="todo in todos">
        {{ todo.description }}
      </li>
    </div>
  </div>
</div>
</template>

<script>
export default {
    data() {
      return {
        todos: ''
      }
    },
    methods: {
      getTodos() {
        this.$http.get('/api/todos').then((res) => {
            this.todos = res.data;
          })
      }
    }
}
</script>
