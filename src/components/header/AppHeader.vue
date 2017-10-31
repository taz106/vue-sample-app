<template>
    <ul>
        <li>
            <img src="../../assets/logo.png" alt="logo" height="50px" width="50px">
        </li>

        <li>
            <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>

        <li>
            <router-link :to="{ name: 'Dogs' }">Dogs</router-link>
        </li>

        <li>
            <a href="/todo-app">Todo-App</a>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  padding: 10px;
}
</style>

