<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
   margin: 0;
   padding: 0;
 }
html, body{
  background-color: #F6F8FA;
}
</style>
