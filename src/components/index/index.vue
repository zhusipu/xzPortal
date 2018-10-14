<template>
  <div class="zxGate">
    <div class="content">
      <div class="nav_left"  ref="homePage">
        <ul>
          <li v-for="(item,index) in nav_left">
            <a href="#">
              <span><img :src="item.pic" alt=""/></span>
              <p>{{item.title}}</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="main">
        <div class="mian-wr">
          <Row :gutter="16">
            <Col span="8">
              <div class="h-model">
                <span class="h-model-c"></span>
                <div class="h-model-tit">
<<<<<<< HEAD
                  图片轮播新闻 / NEWS
=======
                  新闻轮播图
>>>>>>> 8ab0a5525d7bd2fd98df4afe49ce3ab5dd18ec4d
                </div>
                <div class="h-model-tool">
                  <span><img src="../../assets/images/33.png" alt=""/></span>
                  <span><img src="../../assets/images/22.png" alt=""/></span>
                  <span><img src="../../assets/images/11.png" alt=""/></span>
                </div>
                <!--轮播图{-->
                <div class="slide-wr">
                  <Carousel autoplay>
<<<<<<< HEAD
                    <Carousel-item v-for="(item,index) in slideData"  >
=======
                    <Carousel-item v-for="(item,index) in slideData">
>>>>>>> 8ab0a5525d7bd2fd98df4afe49ce3ab5dd18ec4d
                      <div><img :src="item.pic" alt=""/></div>
                      <div class="slide-tit">
                        <p><span>●</span> {{item.title}}</p>
                      </div>
                    </Carousel-item>
                  </Carousel>
                </div>
                <!--}-->
              </div>
            </Col>
<<<<<<< HEAD
            <Col span="8">
              <div class="h-model">
                <span class="h-model-c"></span>
                <div class="h-model-tit">
                  企业新闻 / NEWS
                </div>
                <div class="h-model-tool">
                  <router-link to="/layout/newsCenter"><span><img src="../../assets/images/33.png" alt=""/></span></router-link>
                  <span><img src="../../assets/images/22.png" alt=""/></span>
                  <span><img src="../../assets/images/11.png" alt=""/></span>
                </div>
                <div class="h-newsList">
                  <ul>
                    <li> <a href=""><span>●</span> <em>差旅费用报销</em> <i>2018-08-23</i></a></li>
                    <li> <a href=""><span>●</span> <em>差旅费用报销</em> <i>2018-08-23</i></a></li>
                    <li> <a href=""><span>●</span> <em>差旅费用报销</em> <i>2018-08-23</i></a></li>
                    <li> <a href=""><span>●</span> <em>差旅费用报销</em> <i>2018-08-23</i></a></li>
                    <li> <a href=""><span>●</span> <em>差旅费用报销</em> <i>2018-08-23</i></a></li>
                    <li> <a href=""><span>●</span> <em>差旅费用报销</em> <i>2018-08-23</i></a></li>
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
                  <router-link to="/layout/selfService"><img src="../../assets/images/zizhu2.png" alt=""/><br/><span>薪资管理</span></router-link>
                </div>
                <div class="selfHelpItem">
                  <a href="#"><img src="../../assets/images/zizhu3.png" alt=""/><br/><span>企业通讯录</span></a>
                </div>
                <div class="selfHelpItem">
                  <a href="#"><img src="../../assets/images/zhuzhu1.png" alt=""/><br/><span>个人考勤休假</span></a>
                </div>
                <div class="selfHelpItem">
                  <a href="#"><img src="../../assets/images/zizhu4.png" alt=""/><br/><span>个人信息维护</span></a>
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
                    <span><img src="../../assets/images/11.png" alt=""/></span>
                  </div>
                  <div class="centerList">
                    <span>全部</span> <span>全部</span>
                    <span>全部</span>
                    <span>全部</span>
                    <span>全部</span>
                  </div>
                  <div class="centerList-bd">
                    <Table stripe :columns="columns1" :data="data1"></Table>
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
                    <span><img src="../../assets/images/11.png" alt=""/></span>
                  </div>
                  <div class="centerList">
                    <span>全部</span> <span>全部</span>
                    <span>全部</span>
                    <span>全部</span>
                    <span>全部</span>
                  </div>
                  <div class="centerList-bd">
                    <Table stripe :columns="columns1" :data="data1"></Table>
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
              <span><img src="../../assets/images/33.png" alt=""/></span>
              <span><img src="../../assets/images/22.png" alt=""/></span>
              <span><img src="../../assets/images/11.png" alt=""/></span>
            </div>

            <div class="centerList-bd">

            </div>
          </div>
        </div>
=======
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
          </Row>
        </div>

>>>>>>> 8ab0a5525d7bd2fd98df4afe49ce3ab5dd18ec4d
        <!--<router-link to="/test">123</router-link>-->
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        clientHeight:'',
<<<<<<< HEAD
        clientWidth:'',
=======
>>>>>>> 8ab0a5525d7bd2fd98df4afe49ce3ab5dd18ec4d
        nav_left:[
          {pic:require('../../assets/images/temp/1.png'),title:'OA系统'},
          {pic:require('../../assets/images/temp/2.png'),title:'知识管理系统'},
          {pic:require('../../assets/images/temp/3.png'),title:'人力资源系统'},
          {pic:require('../../assets/images/temp/4.png'),title:'合同管理系统'},
          {pic:require('../../assets/images/temp/5.png'),title:'财务管理系统'},
          {pic:require('../../assets/images/temp/6.png'),title:'站务管理系统'},
          {pic:require('../../assets/images/temp/7.png'),title:'物资管理系统'},
          {pic:require('../../assets/images/temp/8.png'),title:'采购管理系统'}
        ],
        slideData:[
          {pic:require('../../assets/images/temp/slide1.png'),title:'切实关注基层人民生活状况切实关注基层人民生活状况切实关注基层人民生活状况'},
          {pic:require('../../assets/images/temp/slide2.jpg'),title:'热烈庆祝'},
<<<<<<< HEAD
          {pic:require('../../assets/images/temp/slide3.jpg'),title:'热烈庆祝4444'}
        ],
        /**消息中心数据**/
        columns1: [
          {
            title: '发布时间',
            key: 'times',
            className: 'overEllipsis',
            width:120,
          },
          {
            title: '耗时',
            key: 'consuming'
          },
          {
            title: '标题',
            key: 'title',
            className: 'overEllipsis',
            width:150,
          },
          {
            title: '类型',
            key: 'type',
            className: 'overEllipsis',
            width:120,
          },
          {
            title: '发起人',
            key: 'initiator'
          }
        ],
        data1: [
          {
            times: '2018-10-13',
            consuming: 18,
            title: '后有效，当表格的',
            type: '2016-10-03',
            initiator:'张小小'
          },
          {
            times: 'John Brown',
            consuming: 18,
            title: '后有效，当表格的',
            type: '2016-10-03',
            initiator:'张小小'
          },
          {
            times: 'John Brown',
            consuming: 18,
            title: '后有效，当表格的',
            type: '2016-10-03',
            initiator:'张小小'
          },
          {
            times: 'John Brown',
            consuming: 18,
            title: '后有效，当表格的',
            type: '2016-10-03',
            initiator:'张小小'
          }
        ]
      }
    },
    mounted(){
      this.initHeight();
    },
    watch: {
      clientHeight: function () {
        this.changeFixed(this.clientHeight)
      }
    },
    methods:{
      changeFixed(clientHeight){
        this.$refs.homePage.style.height = clientHeight+'px';

      },
      initHeight(){
        this.clientHeight = document.body.clientHeight-80;
        console.log(this.clientHeight);
        window.onresize = () => {
          this.clientHeight = document.body.clientHeight-80;
        };
      }
    }
  }
=======
          {pic:require('../../assets/images/temp/slide3.jpg'),title:'热烈庆祝4444'},
        ]
      }
  },
  mounted(){
    this.initHeight();
  },
  watch: {
    clientHeight: function () {
      this.changeFixed(this.clientHeight)
    }
  },
  methods:{
    changeFixed(clientHeight){
      this.$refs.homePage.style.height = clientHeight+'px';

    },
    initHeight(){
      this.clientHeight = $(document).height()-80;
      window.onresize = () => {
        this.clientHeight = $(document).height()-80;
      };
    }
  }
  }
>>>>>>> 8ab0a5525d7bd2fd98df4afe49ce3ab5dd18ec4d
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
<<<<<<< HEAD

.h-model{
  position: relative;
  background: #fff;
  padding:20px 30px;
  box-shadow: 0 2px 10px 0 rgba(146,156,181,0.10);
  border-radius: 6px;
  height: 340px;
  margin-bottom: 16px;
=======
.h-model{
  position: relative;
  background: #fff;
  padding:20px;
  box-shadow: 0 2px 10px 0 rgba(146,156,181,0.10);
  border-radius: 6px;
  height: 340px;
>>>>>>> 8ab0a5525d7bd2fd98df4afe49ce3ab5dd18ec4d
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
<<<<<<< HEAD
.slideItem{
  position: absolute;
}
=======
>>>>>>> 8ab0a5525d7bd2fd98df4afe49ce3ab5dd18ec4d
.slide-tit p{
  color: #fff;
  line-height: 80px;
  width: 100%;
<<<<<<< HEAD
  white-space: nowrap;
=======
  white-space: nowrap;/*让文字不换行*/
>>>>>>> 8ab0a5525d7bd2fd98df4afe49ce3ab5dd18ec4d
  overflow:hidden;
  text-overflow:ellipsis;
  -o-text-overflow:ellipsis;
  -icab-text-overflow: ellipsis;
  -khtml-text-overflow: ellipsis;
  -moz-text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
}
<<<<<<< HEAD
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
  font-size:16px;
  color: #333;
}
.h-newsList ul li span{
  width: 4%;

}
.h-newsList ul li em{
  width: 70%;
}
.h-newsList ul li i{
  width:18%;
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
=======
>>>>>>> 8ab0a5525d7bd2fd98df4afe49ce3ab5dd18ec4d
</style>
