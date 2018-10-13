<template>
  <div class="layout">
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

      <section><router-view/></section>
      <footer class="footer">
          <p>Copyright &copy; www.Xzcsgdjt.com, All Rights Reserved.</p>
          <p>Email : xzcsgdjt@qq.com QQ : 5698401</p>
      </footer>
  </div>

</template>

<script>
    export default {

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



/*滚动条样式 */
::-webkit-scrollbar{
  width:4px;
  height:4px;
}
::-webkit-scrollbar-track{
  background: #f6f6f6;
  border-radius:2px;
}
::-webkit-scrollbar-thumb{
  background: #aaa;
  border-radius:2px;
}
::-webkit-scrollbar-thumb:hover{
  background: #747474;
}
::-webkit-scrollbar-corner{
  background: #f6f6f6;
}
</style>
