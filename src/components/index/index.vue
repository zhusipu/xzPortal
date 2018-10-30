<template>
  <div class="zxGate">
    <div class="content">
      <span class="navBtn" :class="{'navHideB':isA,'navShowB':!isA}" @click="toggle()"></span>
      <div class="nav_left"  ref="homePage" :class="{'navHide':isA,'navShow':!isA}" >
        <ul>
          <li v-for="(item,index) in appList" :key="index">
            <a :href="item.link">
              <span><img :src="'/resource/uploads/Application/' + item.logo" alt="" width="40" height="40"/></span>
              <p>{{ item.name }}</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="main" :class="{'mainW':isA,'mainWhide':!isA}">
        <div class="mian-wr">
          <Row :gutter="16">
            <Col span="8">
              <div class="h-model">
                <span class="h-model-c"></span>
                <div class="h-model-tit">
                  图片轮播新闻 / NEWS
                </div>
                <div class="h-model-tool">
                  <span><img src="../../assets/images/33.png" alt=""/></span>
                  <span><img src="../../assets/images/22.png" alt=""/></span>
                  <span><img src="../../assets/images/11.png" alt="" @click="_getPicNews"/></span>
                </div>
                <!--轮播图{-->
                <div class="slide-wr">
                  <Carousel autoplay>
                    <Carousel-item v-for="(item,index) in picNewsList" :key="index" >
                      <div class="slide-Pic"><img :src="'/resource/tempfileuploads/' + item.thumb" alt=""/>
                        <div class="slide-tit">
                          <p><span>●</span> {{ item.title }}</p>
                        </div>
                      </div>
                    </Carousel-item>
                  </Carousel>
                </div>
                <!--}-->
              </div>
            </Col>
            <Col span="8">
              <div class="h-model">
                <span class="h-model-c"></span>
                <div class="h-model-tit">
                  企业新闻 / NEWS
                </div>
                <div class="h-model-tool">
                  <router-link to="/layout/newsCenter"><span><img src="../../assets/images/33.png" alt=""/></span></router-link>
                  <span><img src="../../assets/images/22.png" alt=""/></span>
                  <span><img src="../../assets/images/11.png" alt="" @click="_getNews"/></span>
                </div>
                <div class="h-newsList">
                  <ul>
                    <li v-for="item in newsList" :key="item.id">
                      <div @click="$router.push('/layout/newsDetail/' + item.id)"><span>●</span> <em>{{ item.title }}</em> <i>{{ item.createDate }}</i></div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col span="8">
              <div class="h-model">
                <span class="h-model-c"></span>
                <div class="h-model-tit">
                  员工自助 / SELF-SERVICE
                </div>
                <div class="h-model-tool">
                  <span><img src="../../assets/images/33.png" alt=""/></span>
                  <span><img src="../../assets/images/22.png" alt=""/></span>
                  <span><img src="../../assets/images/11.png" alt=""/></span>
                </div>
                <div class="selfHelp">
                  <div class="selfHelpItem">
                    <router-link to="/layout/selfService/0"><img src="../../assets/images/zizhu2.png" alt=""/><br/><span>薪资管理</span></router-link>
                  </div>
                  <div class="selfHelpItem">
                    <router-link to="/layout/selfService/1"><img src="../../assets/images/zizhu3.png" alt=""/><br/><span>企业通讯录</span></router-link>
                  </div>
                  <div class="selfHelpItem">
                    <router-link to="/layout/selfService/2"><img src="../../assets/images/zhuzhu1.png" alt=""/><br/><span>个人考勤休假</span></router-link>
                  </div>
                  <div class="selfHelpItem">
                    <router-link to="/layout/selfService/3"><img src="../../assets/images/zizhu4.png" alt=""/><br/><span>个人信息维护</span></router-link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row :gutter="16">
            <Col span="12">
               <div class="h-model">
                  <span class="h-model-c"></span>
                  <div class="h-model-tit">
                    消息中心 / MESSAGE
                  </div>
                  <div class="h-model-tool">
                    <router-link to="/layout/msgCenter">
                      <span><img src="../../assets/images/33.png" alt=""/></span>
                    </router-link>
                    <span><img src="../../assets/images/22.png" alt=""/></span>
                    <span><img src="../../assets/images/11.png" alt="" @click="_refreshMsg"/></span>
                  </div>
                  <div class="centerList">
                    <Tabs :animated="false" @on-click="switchMsgTab" v-model="msgTabVal">
                        <TabPane :name="item.sysName" v-for="(item,index) in msgTabs" :label="item.name+'('+item.count+')'" :key="index"></TabPane>
                    </Tabs>
                  </div>
                  <div class="centerList-bd">
                    <Table stripe :loading="loadingMsg" :columns="columnsMessage" :data="message"></Table>
                  </div>
                </div>
            </Col>
            <Col span="12">
               <div class="h-model">
                  <span class="h-model-c"></span>
                  <div class="h-model-tit">
                    待办中心 / SCHEDULE
                  </div>
                  <div class="h-model-tool">
                    <router-link to="/layout/waitDoCenter">
                      <span><img src="../../assets/images/33.png" alt=""/></span>
                    </router-link>
                    <span><img src="../../assets/images/22.png" alt=""/></span>
                    <span><img src="../../assets/images/11.png" alt="" @click="_refreshSchedule"/></span>
                  </div>
                  <div class="centerList">
                    <Tabs :animated="false" @on-click="switchWaitDoTab" v-model="scheduleTabVal">
                      <TabPane :name="item.sysName" v-for="(item,index) in waitDoTabs" :label="item.name+'('+item.count+')'" :key="index"></TabPane>
                    </Tabs>
                  </div>
                  <div class="centerList-bd">
                    <Table stripe :loading="loadingSchedule" :columns="columnsSchedule" :data="schedule"></Table>
                  </div>
                </div>
            </Col>
          </Row>
          <!--领导驾驶舱-->
          <div class="h-model">
            <span class="h-model-c"></span>
            <div class="h-model-tit">
              领导驾驶舱 / COCKPIT
            </div>
            <div class="h-model-tool">
              <router-link to="/layout/cockpit">
                <span><img src="../../assets/images/33.png" alt=""/></span>
              </router-link>
              <span><img src="../../assets/images/22.png" alt=""/></span>
              <span><img src="../../assets/images/11.png" alt=""/></span>
            </div>

            <div class="centerList-bd">

            </div>
          </div>
        </div>
        <!--<router-link to="/test">123</router-link>-->
      </div>
    </div>

  </div>
</template>

<script>
import { getMessage, getMsgCount } from 'api/message'
import { getAppList } from 'api/application'
import { getPicNews, getNews } from 'api/news'
export default {
  data(){
    return {
      clientHeight:'',
      clientWidth:'',
      isA: false,
      appList: [],
      picNewsList: [],
      newsList: [],
      /**消息中心数据**/
      columnsMessage: [
        {
          title: '发布时间',
          key: 'postDt',
          className: 'overEllipsis',
          width: 120
        },
        {
          title: '耗时',
          key: 'duration',
          width: 80
        },
        {
          title: '标题',
          key: 'messageName',
          className: 'overEllipsis',
          render: (h, params) => {
            return h('a', {
              on: {
                click: () => {
                  this.$router.push('/layout/msgDetail/' + this.message[params.index].messageId)
                }
              }
            },this.message[params.index].messageName);
          }
        },
        {
          title: '发起人',
          key: 'name',
          width:150
        }
      ],
      columnsSchedule: [
        {
          title: '发布时间',
          key: 'postDt',
          className: 'overEllipsis',
          width:120
        },
        {
          title: '耗时',
          key: 'duration',
          width: 80
        },
        {
          title: '标题',
          key: 'messageName',
          className: 'overEllipsis',
          render: (h, params) => {
            return h('a', {
              attrs:{
                href:this.schedule[params.index].url,
                title:this.schedule[params.index].messageName,
                target:"_blank"
              }
            },this.schedule[params.index].messageName);
          }
        },
        {
          title: '类型',
          key: 'messageTodoState',
          className: 'overEllipsis',
          width: 80,
        },
        {
          title: '发起人',
          key: 'name',
          width: 150
        }
      ],
      message: [],
      schedule: [],
      loadingMsg: false,
      loadingSchedule: false,
      msgTabs:[],
      waitDoTabs:[],
      msgTabVal: '',
      scheduleTabVal: ''
    }
  },
  mounted(){
    this.initHeight();
    this._getAppList()
    this._getPicNews()
    this._getNews()
    this._getMessage()
    this._getSchedule()
    this._getMsgCount()
    this._getScheduleCount()
  },
  methods:{
    _getAppList() {
      getAppList().then(res => {
        if (res.code === 1) {
          this.appList = res.data
        }
      })
    },
    _getNews() {
      getNews(1, 6).then(res => {
        if (res.code === 1) {
          this.newsList = res.data.list
        }
      })
    },
    _getPicNews() {
      getPicNews().then(res => {
        if (res.code === 1) {
          this.picNewsList = res.data
        }
      })
    },
    _getMsgCount() {
      getMsgCount().then(res => {
        if (res.code === 1) {
          this.msgTabs = res.data
          this.msgTabVal = res.data[0].sysName
        }
      })
    },
    _getScheduleCount() {
      getMsgCount(1).then(res => {
        if (res.code === 1) {
          this.waitDoTabs = res.data
          this.scheduleTabVal = res.data[0].sysName
        }
      })
    },
    _getMessage() {
      this.loadingMsg = true
      getMessage(1, 4, '0').then(res => {
        if (res.code === 1) {
          this.message = res.data.list
        }
        this.loadingMsg = false
      })
    },
    _getSchedule() {
      this.loadingSchedule = true
      getMessage(1, 4, '1', '', '', '', '0').then(res => {
        if (res.code === 1) {
          this.schedule = res.data.list
        }
        this.loadingSchedule = false
      })
    },
    _refreshMsg() {
      this._getMessage()
      this._getMsgCount()
    },
    _refreshSchedule() {
      this._getSchedule()
      this._getScheduleCount()
    },
    switchMsgTab(name){ //点击消息中心tabs标签搜索对应数据
      this.loadingMsg = true
      getMessage(1, 4, '0', '', '', '', '', '', name).then(res => {
        if (res.code === 1) {
          this.message = res.data.list
        }
        this.loadingMsg = false
      })
    },
    switchWaitDoTab(name){ //点击待办中心tabs标签搜索对应数据
      this.loadingSchedule = true
      getMessage(1, 4, '1', '', '', '', '', '', name).then(res => {
        if (res.code === 1) {
          this.schedule = res.data.list
        }
        this.loadingSchedule = false
      })
    },
    changeFixed(clientHeight){
      this.$refs.homePage.style.height = clientHeight+'px';
    },
    initHeight(){
      this.clientHeight = document.body.clientHeight-80;
      window.onresize = () => {
        this.clientHeight = document.body.clientHeight-80;
      };
    },
    toggle:function () {
      this.isA=!this.isA
    }
  },
  watch: {
    clientHeight: function () {
      this.changeFixed(this.clientHeight)
    }
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.h-model{
  position: relative;
  background: #fff;
  padding:20px 30px;
  box-shadow: 0 2px 10px 0 rgba(146,156,181,0.10);
  border-radius: 6px;
  height: 350px;
  margin-bottom: 16px;
}
.h-model-tit{
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #333333;
}
.h-model-c{
  top: 20px;
  left: 0;
  display: block;
  position: absolute;
  width: 8px;
  height: 40px;
  background: url('../../assets/images/titb.png');
}
.h-model-tool{
  position: absolute;
  top: 20px;
  right: 20px;
  width: 90px;
  height: 22px;
}
.h-model-tool span{
  display: block;
  width: 22px;
  height: 22px;
  float: right;
  color: #c5c5c5;
  line-height: 22px;
  margin-right: 3px;
  cursor: pointer;
}
.slide-wr{
  position: relative;
  width: 100%;
  padding-top: 20px;
  height: 270px;
  overflow: hidden;
}
.slide-wr img{
  width: 100%;
  height: 250px;
}
.slide-Pic{
  position: relative;
}
.slide-tit{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  opacity: 0.8;
  background: #333333;
  padding:0 40px;
}
.slideItem{
  position: absolute;
}
.slide-tit p{
  color: #fff;
  line-height: 80px;
  width: 100%;
  white-space: nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  -o-text-overflow:ellipsis;
  -icab-text-overflow: ellipsis;
  -khtml-text-overflow: ellipsis;
  -moz-text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
}
  .h-newsList{
    width: 100%;
  }
  .h-newsList ul li{
    line-height: 30px;
    width: 100%;
    height: 42px;
    overflow: hidden;
    vertical-align: middle;
    padding-top: 12px;
  }
.h-newsList ul li span, .h-newsList ul li i, .h-newsList ul li em{
  float: left;
  line-height: 30px;
  font-style: normal;
  font-size:14px;
  color: #333;
}
.h-newsList ul li span{
  width: 4%;

}
.h-newsList ul li em{
  width: 68%;
}
.h-newsList ul li i{
  width:28%;
  text-align: right;
  color: #9B9B9B;
}
  .selfHelp{
    width: 100%;
  }
.selfHelp .selfHelpItem{
  float: left;
  width:50%;
  text-align: center;
  padding-top: 30px;
}
.selfHelpItem a{
  display: block;
  margin:0 auto;
  width: 100%;
  text-align: center;
}
.centerList{
  width:100%;
  line-height: 30px;
  vertical-align: middle;
}
  .centerList span{

    background: #F7F8F9;
    border-radius: 6px;
    display: inline-block;
    vertical-align: middle;
    line-height: 30px;
    margin-right: 20px;
    padding:0 30px;
    color: #A2A6AD;
    cursor: pointer;
  }
.centerList span:first-child{
  background: #D0021B;
  color: #fff;
}
.centerList span:hover{
  background: #ff8a00;
  color: #fff;
}
.navBtn{
  display: block;
  width: 12px;
  height: 54px;
  position: fixed;
  top: 80px;
  left: 90px;
  cursor: pointer;
  background: url("../../assets/images/hide.png");

}
  .nav_left, .navBtn, .mainW, .mainWhide{
    /*  Webkit内核浏览器：Safari and Chrome*/
    -webkit-transition-property: all;
    -webkit-transition-duration: .5s;
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    /*  Mozilla内核浏览器：firefox3.5+*/
    -moz-transition-property: all;
    -moz-transition-duration: .5s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    /*  Opera*/
    -o-transition-property: all;
    -o-transition-duration: .5s;
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    /*  IE9*/
    -ms-transition-property: all;
    -ms-transition-duration: .5s;
    -ms-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }
  .navHide{
    width:0;
  }
  .navHideB{
    left: 0;
    background: url("../../assets/images/show.png");
  }
  .mainW{
    margin-left: 0;
  }
  .mainWhide{
    margin-left: 90px;
  }
  .h-newsList div {
    cursor: pointer;
  }
</style>
