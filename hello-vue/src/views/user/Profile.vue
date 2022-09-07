<template>
<!-- 所有的元素不能直接在根节点下 -->
    <div>
      <h1>UserProfile</h1>
      {{ $route.params.id }}
      {{id}}
      <router-link to="/goHome">goHome</router-link>
    </div>
</template>

<script>
export default {
  props: ['id'],
  name: "UserProfile",
  beforeRouteEnter:(to, from, next) =>{
      console.log("进入路由之前");   // 加载数据
      next(vm => {
        vm.getData(); // 进入路由之前执行getData方法
      });
  },
  methods: {
    getData: function () {
        this.axios({
          method: 'get',
          url: 'http://localhost:8080/static/mock/data.json'
        }).then(function (response) {
          console.log(response)
        })
    }
  },

  beforeRouteLeave:(to, from, next) =>{
    console.log("进入路由之后");
    next();
  }
}
</script>

<style scoped>

</style>
