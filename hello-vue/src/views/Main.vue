<template>
    <div>
      <h1>Main</h1>
      <router-link :to="{name: 'UserProfile', params:{id: 1}}">UserProfile页</router-link>
      <router-link to="/user/list">UserList页</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>

</style>
