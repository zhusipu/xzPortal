<template>
  <div class="pageBox">
    <div class="breadCrub">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>领导驾驶舱</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="statisticsList pageareMain">
      统计图列表
    </div>
  </div>
</template>

<script>
    export default {
        name: "cockpit"
    }
</script>

<style scoped>
.statisticsList{
  height: 400px;
  background: #fff;
}
</style>
