<template>
  <div class="zxGate">
    <div class="content">
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

        <!--<router-link to="/test">123</router-link>-->
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return {
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
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
