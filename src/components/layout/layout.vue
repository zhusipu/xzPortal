<template>
  <div class="layout">
      <header class="header">
        <div class="header-logo"></div>
        <div class="header-right">
          <div class="headerlinks">
            <Dropdown @on-click="headerLinksOnClick">
              <Icon type="md-settings"  size="24" color="#c5c5c5"/>
              <DropdownMenu slot="list">
                <DropdownItem name="/layout/setting/主题管理">主题管理</DropdownItem>
                <DropdownItem name="/layout/setting/布局管理">布局管理</DropdownItem>
                <DropdownItem name="/layout/setting/界面设置">界面设置</DropdownItem>
                <DropdownItem name="/layout/setting/设置应用">设置应用</DropdownItem>
                <DropdownItem name="/layout/selfService/3" divided>个人中心</DropdownItem>
                <DropdownItem name="logout">退出登录</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div class="headerlinks">
            <router-link to="/layout/noticesCenter"><Icon custom="iconfont icon-emailFilled" size="24" color="#c5c5c5"/></router-link>
          </div>
          <!--<div  class="headerlinks">
            <Icon custom="iconfont icon-gengduo1" size="24" color="#c5c5c5"/>
          </div>-->

          <span>
            <i class="header-right-logo"> <!--<img src="../../assets/images/logo1.png" alt=""/>--></i> 
            {{this.$store.getters.name}}
          </span>
          <div class="serchBar">
            <input type="text" placeholder="输入搜索的内容"/>
            <a href="#" class="serchBtn"><Icon type="ios-search" size="26"/></a>
          </div>
        </div>
        <router-link  to="/layout/setting/主题管理" class="skinBtn">
          <div id="AD_0" class="mc1cf294a1_container mc1cf294a1_corner mc1cf294a1_corner_css3" ><span  class="mc1cf294a1_masker">
            <img src="../../assets/images/c.png">
          </span>
            <div class="mc1cf294a1_pic">
              <img src="../../assets/images/skins.png">
            </div>
          </div>

        </router-link>
      </header>

      <section><router-view/></section>
      <footer class="footer">
          <p>Copyright &copy; www.bmsoft.com.cn, All Rights Reserved.</p>
          <!--<p>Email : xzcsgdjt@qq.com QQ : 5698401</p>-->
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
    },
    computed: mapState({
      title: state => state.title,
      token: state => state.token
    }),
    methods: {
      logout() {
        this.$store.dispatch('FedLogOut').then((data) => {
          this.$router.push({ path: '/' })
          this.$Message.success("退出成功!")
        }).catch((error) => {
          this.$Message.error(error)
        })
      },
      headerLinksOnClick(name) {
        if (name === 'logout') {
          this.logout()
        } else {
          this.$router.push({ path: name })
        }
      }
    }
  }
</script>

<style>
.headerlinks a{
  display: block;
  width: 100%;
}
.ivu-table-border td, .ivu-table-border th{
  text-align: center;
}
.pt20{
  padding-top: 20px;
}
.pageBox{
  padding-top: 60px;
}
  header{
    position: relative;
  }



.mc1cf294a1_corner {
  position: absolute;
  width: 60px;
  height: 60px;
  z-index: 110;
  right: 0;
  top: 0
}

.mc1cf294a1_corner .mc1cf294a1_masker,.mc1cf294a1_corner .mc1cf294a1_pic {
  position: absolute;
  top: 0;
  right: 0
}
.mc1cf294a1_corner .mc1cf294a1_masker {
  width: 40px;
  height: 40px;
  z-index: 2
}

.mc1cf294a1_corner .mc1cf294a1_masker img {
  width: 100%;
  height: 100%
}

.mc1cf294a1_corner .mc1cf294a1_pic {
  width: 60px;
  height: 60px;
  z-index: 1;
  overflow: hidden
}

.mc1cf294a1_corner .mc1cf294a1_masker img,.mc1cf294a1_corner .mc1cf294a1_pic img {
  position: absolute;
  right: 0;
  top: 0
}
.mc1cf294a1_corner_css3 .mc1cf294a1_masker,.mc1cf294a1_corner_css3 .mc1cf294a1_pic,.mc1cf294a1_corner_css3 .mc1cf294a1_close {
  transition: linear .35s
}

.mc1cf294a1_corner_css3 .mc1cf294a1_pic {
  -webkit-clip-path: polygon(36% 0%, 100% 0%, 100% 64%);
  -o-clip-path: polygon(36% 0%, 100% 0%, 100% 64%);
  clip-path: polygon(36% 0%, 100% 0%, 100% 64%)
}

.mc1cf294a1_corner_css3:hover .mc1cf294a1_pic {
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
  -o-clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%)
}

.mc1cf294a1_corner_css3:hover .mc1cf294a1_masker {
  width: 60px;
  height: 60px
}
</style>
