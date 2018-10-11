<template>
  <div>
      <header class="header">
          <div class="header-logo"></div>
          <div class="header-right">
            <a href="#">
              <Icon type="md-settings"  size="24" color="#c5c5c5"/>
            </a>
              <a href="#">
                <Icon custom="iconfont icon-emailFilled" size="24" color="#c5c5c5"/>
              </a>
               <a href="#">
                <Icon custom="iconfont icon-gengduo1" size="24" color="#c5c5c5"/>
              </a>

              <span>
                  <i class="header-right-logo"> <img src="../../assets/images/logo1.png" alt=""/></i> 14287895@qq.com
              </span>
            <div class="serchBar">
              <input type="text" placeholder="输入搜索的内容"/>
              <a href="#" class="serchBtn"><Icon type="ios-search" size="26"/></a>
            </div>
          </div>

      </header>
      <router-view/>
  </div>

</template>



<script>
    export default {

    }
</script>

<style scoped>

</style>
