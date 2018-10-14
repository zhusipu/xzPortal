<template>
  <div class="zxGate">
    <div class="content">
<<<<<<< HEAD
      <div class="pageare">
        <div class="breadCrub">
          <Breadcrumb>
            <BreadcrumbItem to="/">首页</BreadcrumbItem>
            <BreadcrumbItem to="/components/breadcrumb">个人设置</BreadcrumbItem>
            <BreadcrumbItem>设置主题</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div class="pageareMain">
          <Tabs type="card" :animated="false">
            <TabPane label="主题管理">
              <div class="themeList">
                <ul class="clearfix">
                  <li v-for="(item,index) in thmeList">
                    <div class="themeBg" :style="{backgroundColor:item.bg}"></div>
                    <div class="titbg">
                      <p>{{item.title}} </p>
                    </div>
                    <span class="checked"><Icon type="ios-checkmark" color="#fff" size="20"/></span>
                  </li>
                </ul>
                <div class="pagnation-wr"><Page placement="top" show-total show-sizer :total="pageData.total" :current="pageData.pageNum" :page-size="pageData.pageSize"
                                                @on-change="changePage" @on-page-size-change="changePageSize"></Page></div>
              </div>
            </TabPane>
            <TabPane label="布局管理">
              <div class="layoutList">
                <ul class="clearfix">
                  <li v-for="(item,index) in thmeList">
                    <div class="layoutList-bd">
                      这里放布局效果
                    </div>
                    <div class="layoutList-info">
                      <h3>一栏布局</h3>

                    </div>
                  </li>
                </ul>
                <div class="pagnation-wr"><Page placement="top" show-total show-sizer :total="pageData.total" :current="pageData.pageNum" :page-size="pageData.pageSize"
                                                @on-change="changePage" @on-page-size-change="changePageSize"></Page></div>
              </div>
            </TabPane>
            <TabPane label="界面设置">
              <div class="modelList">
                <ul>
                  <li v-for="(item,index) in modleList">
                    <h3>{{item.modleName}}</h3>
                    <div class="modelSwitch">
                      <i-switch  size="large" >
                      <span slot="open">开启</span>
                      <span slot="close">关闭</span>
                    </i-switch></div>
                  </li>
                </ul>
                <div class="btn-wr">
                  <button type="submit">确定</button>
                  <button type="submit" class="reset">取消</button>
                </div>
              </div>

            </TabPane>
          </Tabs>
        </div>

=======
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
                  图片轮播新闻 / NEWS
                </div>
                <div class="h-model-tool">
                  <span><img src="../../assets/images/33.png" alt=""/></span>
                  <span><img src="../../assets/images/22.png" alt=""/></span>
                  <span><img src="../../assets/images/11.png" alt=""/></span>
                </div>
                <!--轮播图{-->
                <div class="slide-wr">
                  <Carousel autoplay>
                    <Carousel-item v-for="(item,index) in slideData"  >
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
            <Col span="8">
              <div class="h-model">
                <span class="h-model-c"></span>
                <div class="h-model-tit">
                  企业新闻 / NEWS
                </div>
                <div class="h-model-tool">
                  <span><img src="../../assets/images/33.png" alt=""/></span>
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
                  <a href="#"><img src="../../assets/images/zizhu2.png" alt=""/><br/><span>薪资管理</span></a>
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
                    <span><img src="../../assets/images/33.png" alt=""/></span>
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
                    <span><img src="../../assets/images/33.png" alt=""/></span>
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
<<<<<<< HEAD
          thmeList:[
            {bg:'#F1823D',title:'活力橙'},
            {bg:'#A93439',title:'酒红色'},
            {bg:'#4A90E2 ',title:'天空蓝'},
            {bg:'#B8E986 ',title:'清新绿'},
            {bg:'#9A704B ',title:'护眼褐'},
            {bg:'#F1823D',title:'活力橙'},
            {bg:'#A93439',title:'酒红色'},
            {bg:'#4A90E2 ',title:'天空蓝'},
            {bg:'#B8E986 ',title:'清新绿'},
            {bg:'#9A704B ',title:'护眼褐'}
          ],
        modleList:[
          {modleName:'新闻中心',switch1: false},
          {modleName:'新闻中心',switch1: true},
          {modleName:'新闻中心',switch1: true},
          {modleName:'新闻中心',switch1: true},
          {modleName:'新闻中心',switch1: true},
          {modleName:'新闻中心',switch1: true}
        ],
        pageData:{total:11,pageSize:10,pageNum:1}//分页参数
        }
    },
    mounted(){

    },
    watch: {

    },
    methods:{

      changePage (value) {
        //选择页码
        this.pageData.pageNum=value;
        this.getData();
      },
      changePageSize(value){
        //选择每页显示多少条数据
        this.pageData.pageSize = value;
        this.getData();
      }
    }
  }
=======
        clientHeight:'',
        clientWidth:'',
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
          {pic:require('../../assets/images/temp/slide3.jpg'),title:'热烈庆祝4444'}
        ],
        /**消息中心数据**/
        columns1: [
          {
            title: '发布时间',
            key: 'times'
          },
          {
            title: '耗时',
            key: 'consuming'
          },
          {
            title: '标题',
            key: 'title'
          },
          {
            title: '类型',
            key: 'type'
          },
          {
            title: '发起人',
            key: 'initiator'
          }
        ],
        data1: [
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
  .themeList, .layoutList, .modelList{
    width: 100%;
    padding: 40px 20px;
    overflow: hidden;
  }
  .themeList ul li, .layoutList ul li{
    float: left;
    position: relative;
    margin: 10px;
    width: 200px;
    height: 200px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    background: #ccc;
  }
  .themeBg{
    width: 200px;
    height: 200px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
  }
  .themeList ul li .titbg{
    position: absolute;
    background: #000;
    opacity: 0.3;
    width: 200px;
    height: 52px;
    bottom:0;
    left: 0;
    -webkit-border-radius: 0 0 6px 6px;
    -moz-border-radius: 0 0 6px 6px;
    border-radius: 0 0 6px 6px;
  }
  .themeList ul li .titbg p{
    color: #fff;
    line-height: 52px;
    padding-left: 30px;

  }
  .checked{
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 24px;
    height: 24px;
    background: #000;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
    opacity: 0.3;
    text-align: center;
    line-height: 24px;
  }
  .layoutList ul li{
    background: none;
    border:1px solid #E1E1E1;

  }
  .layoutList-bd{
    width: 100%;
    height: 150px;
    padding: 10px;
  }
  .layoutList-info{
    padding:10px;
    border-top:1px solid #E1E1E1;
    height: 50px;
    line-height: 30px;

  }
  .layoutList-info h3{font-weight: 400;font-size:14px;}
  .modelList ul li{
    float: left;
    margin: 10px;
    width: 200px;
    height: 60px;
    border:1px solid #EBEEF5;
    padding:20px 25px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
  }
  .modelList ul li h3{
    float: left;
    width: 100px;
    font-weight: 400;font-size:14px;
  }
  .modelSwitch{
    float: right;
    width: 40px;
    height: 20px;
  }
  .btn-wr{
    width: 100%;
    text-align: right;
    padding-top: 20px;
  }
  .btn-wr button {
    width: 120px;
    height: 40px;
    line-height: 40px;
    background: #FF5B5B;
    border-radius: 3px;
    color: #fff;
    border: 1px solid #F13D3D;
    cursor: pointer;
    margin-left: 10px;
  }
  .btn-wr button.reset{
    background: #fff;
    color: #F13D3D;
  }
  .btn-wr button:hover{
    background: #D0021B;
    color: #fff;
  }
=======

.h-model{
  position: relative;
  background: #fff;
  padding:20px 30px;
  box-shadow: 0 2px 10px 0 rgba(146,156,181,0.10);
  border-radius: 6px;
  height: 340px;
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
>>>>>>> 8ab0a5525d7bd2fd98df4afe49ce3ab5dd18ec4d
</style>
