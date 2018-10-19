<template>
  <div class="zxGate">
    <div class="content">
      <div class="pageare">
        <div class="breadCrub">
          <Breadcrumb>
            <BreadcrumbItem to="/">首页</BreadcrumbItem>
            <BreadcrumbItem to="/components/breadcrumb">个人设置</BreadcrumbItem>
            <BreadcrumbItem>{{tabName}}</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div class="pageareMain">
          <Tabs type="card" :animated="false" @on-click="switchTab" :value="tabName">
            <TabPane label="主题管理" name="主题管理">
              <div class="themeList">
                <ul class="clearfix">
                  <li v-for="(item,index) in thmeList" @click="chooseTheme(index)">
                    <div class="themeBg" :style="{backgroundColor:item.bg}"></div>
                    <div class="titbg">
                      <p>{{item.title}} </p>
                    </div>
                    <span class="checked" :style="isChoose==index?'background:green;opacity:1':''"><Icon type="ios-checkmark" color="#fff" size="20"/></span>
                  </li>
                </ul>
                <div class="pagnation-wr"><Page placement="top" show-total show-sizer :total="themePageParam.total" :current="themePageParam.pageNum" :page-size="themePageParam.pageSize"
                                                @on-change="changeThemePage" @on-page-size-change="changeThemePageSize"></Page></div>
              </div>
            </TabPane>
            <TabPane label="布局管理" name="布局管理">
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
                <div class="pagnation-wr"><Page placement="top" show-total show-sizer :total="layoutPageParam.total" :current="layoutPageParam.pageNum" :page-size="layoutPageParam.pageSize"
                                                @on-change="changeLayoutPage" @on-page-size-change="changeLayoutPageSize"></Page></div>
              </div>
            </TabPane>
            <TabPane label="界面设置" name="界面设置">
              <div class="modelList">
                <ul class="clear">
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
            <TabPane label="设置应用" name="设置应用">
              <div class="appList-wr">
                <div class="appList">
                  <h3>已添加应用</h3>
                  <draggable class="list-group clearfix" element="ul" v-model="list" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                    <transition-group type="transition" :name="'flip-list'">
                      <li class="list-group-item" v-for="(element,index) in list" :key="index">
                        <span class="pic"><img :src="element.pic" alt=""></span>
                        <p>{{element.title}}</p>
                      </li>
                    </transition-group>
                  </draggable>
                </div>
                <div class="appList">
                  <h3>未添加应用</h3>
                  <draggable element="span" v-model="list2" :options="dragOptions" :move="onMove">
                    <transition-group name="no" class="list-group clearfix" tag="ul">
                      <li class="list-group-item" v-for="(element,index) in list2" :key="index">
                        <span class="pic"><img :src="element.pic" alt=""></span>
                        <p>{{element.title}}</p>
                      </li>
                    </transition-group>
                  </draggable>
                </div>
                <div class="btn-wr">
                  <button type="submit">确定</button>
                  <button type="submit" class="reset">取消</button>
                </div>
              </div>

            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
  import draggable from 'vuedraggable'
  export default {

    components: {
      draggable
    },
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
        themePageParam:{total:11,pageSize:10,pageNum:1},//主题管理分页参数
        layoutPageParam:{total:11,pageSize:10,pageNum:1},//主题管理分页参数
        tabName:"主题管理",
        list: [{pic:require('../../assets/images/temp/1.png'),title:'OA系统'},
          {pic:require('../../assets/images/temp/2.png'),title:'知识管理系统'},
          {pic:require('../../assets/images/temp/3.png'),title:'人力资源系统'},
          {pic:require('../../assets/images/temp/4.png'),title:'合同管理系统'},
          {pic:require('../../assets/images/temp/5.png'),title:'财务管理系统'},
          ],
        list2: [{pic:require('../../assets/images/temp/6.png'),title:'站务管理系统'},
          {pic:require('../../assets/images/temp/7.png'),title:'物资管理系统'},
          {pic:require('../../assets/images/temp/8.png'),title:'采购管理系统'}],
        editable: true,
        isDragging: false,
        delayedDragging: false,
        isChoose:0
      }
    },
    methods:{
      chooseTheme(e){
        console.log(e)
        this.isChoose=e;
      },
      switchTab(name){
        this.tabName=name;
      },
      getThemeData(){//获取主题管理数据
        this.$ajax({
          method:'get',
          url:'',
          params:{}
        }).then(res=>{
          // console.log(res);
        })
      },
      getLayoutData(){//获取布局管理数据
        this.$ajax({
          method:'get',
          url:'',
          params:{}
        }).then(res=>{
          // console.log(res);
        })
      },
      getInterfaceData(){//获取界面设置数据
        this.$ajax({
          method:'get',
          url:'',
          params:{}
        }).then(res=>{
          // console.log(res);
        })
      },

      changeThemePage (value) { //主题管理选择页码
        this.themePageParam.pageNum=value;
        this.getThemeData();
      },
      changeThemePageSize(value){//主题管理选择每页显示多少条数据
        this.themePageParam.pageSize = value;
        this.getThemeData();
      },
      changeLayoutPage (value) { //布局管理选择页码
        this.layoutPageParam.pageNum=value;
        this.getLayoutData();
      },
      changeLayoutPageSize(value){//布局管理选择每页显示多少条数据
        this.layoutPageParam.pageSize = value;
        this.getLayoutData();
      },

      onMove({ relatedContext, draggedContext }) {
        const relatedElement = relatedContext.element;
        const draggedElement = draggedContext.element;
        return (
          (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
        );
      }
    },
    computed:{
      dragOptions() {
        return {
          animation: 0,
          group: "description",
          disabled: !this.editable,
          ghostClass: "ghost"
        };
      },
      listString() {
        return JSON.stringify(this.list, null, 2);
      },
      list2String() {
        return JSON.stringify(this.list2, null, 2);
      }
    },
    watch:{
      isDragging(newValue) {
        if (newValue) {
          this.delayedDragging = true;
          return;
        }
        this.$nextTick(() => {
          this.delayedDragging = false;
        });
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
  .clear::after{
    display: block;
    content: " ";
    clear: both;
  }
  .appList-wr{
    padding: 40px;
    width: 100%;
  }
  .appList{
    padding:30px;
  }
  .appList h3{
    border-left: 3px solid #A93439;
    line-height: 20px;
    padding-left: 20px;
    font-size:14px;
    margin-bottom: 40px;
  }
  .appList ul li{
    float: left;
    width: 120px;
  }
  .appList ul li .pic{
    display: block;
    width: 100%;
    height: 43px;
    text-align: center;
    margin-bottom: 10px;
  }
  .appList ul li p{
    text-align: center;
    font-size:13px;
  }
  .appList ul li .pic img{
    width: 40px;
    height: auto;
  }
  .flip-list-move {
    transition: transform 0.5s;
  }

  .no-move {
    transition: transform 0s;
  }

  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }

  .list-group {
    min-height: 20px;
  }

  .list-group-item {
    cursor: move;
  }
</style>
