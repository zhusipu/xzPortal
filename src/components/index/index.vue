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
                  新闻轮播图
                </div>
                <div class="h-model-tool">
                  <span><img src="../../assets/images/33.png" alt=""/></span>
                  <span><img src="../../assets/images/22.png" alt=""/></span>
                  <span><img src="../../assets/images/11.png" alt=""/></span>
                </div>
                <!--轮播图{-->
                <div class="slide-wr">
                  <Carousel autoplay>
                    <Carousel-item v-for="(item,index) in slideData">
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
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
          </Row>
        </div>

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
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h-model{
  position: relative;
  background: #fff;
  padding:20px;
  box-shadow: 0 2px 10px 0 rgba(146,156,181,0.10);
  border-radius: 6px;
  height: 340px;
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
.slide-tit p{
  color: #fff;
  line-height: 80px;
  width: 100%;
  white-space: nowrap;/*让文字不换行*/
  overflow:hidden;
  text-overflow:ellipsis;
  -o-text-overflow:ellipsis;
  -icab-text-overflow: ellipsis;
  -khtml-text-overflow: ellipsis;
  -moz-text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
}
</style>
