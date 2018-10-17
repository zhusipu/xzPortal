<template>
  <div class="layout">
      <header class="header">
        <div class="header-logo"></div>
        <div class="header-right">
          <router-link to="/layout/theme">
            <Icon type="md-settings"  size="24" color="#c5c5c5"/>
          </router-link>
          <a href="#">
            <Icon custom="iconfont icon-emailFilled" size="24" color="#c5c5c5"/>
          </a>
          <a href="#">
            <Icon custom="iconfont icon-gengduo1" size="24" color="#c5c5c5"/>
          </a>

          <span>
                  <i class="header-right-logo"> <img src="../../assets/images/logo1.png" alt=""/></i> {{this.$store.state.title}}
              </span>
          <div class="serchBar">
            <input type="text" placeholder="输入搜索的内容"/>
            <a href="#" class="serchBtn"><Icon type="ios-search" size="26"/></a>
          </div>
        </div>
      </header>

      <section><router-view/></section>
      <footer class="footer">
          <p>Copyright &copy; www.Xzcsgdjt.com, All Rights Reserved.</p>
          <p>Email : xzcsgdjt@qq.com QQ : 5698401</p>
      </footer>
  </div>

</template>

<script>
  import * as types from '../../store/types'
  import {mapState} from 'vuex'
  export default {
    data(){
      return {

      }
    },
    created:function(){
      console.log("用户名:"+this.$store.state.title+"密码:"+this.$store.state.token)
    },
    computed: mapState({
      title: state => state.title,
      token: state => state.token
    }),
  }
</script>

<style>
.ivu-table-border td, .ivu-table-border th{
  text-align: center;
}
.pt20{
  padding-top: 20px;
}
.pageBox{
  padding-top: 60px;
}
</style>
