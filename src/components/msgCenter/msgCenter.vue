<template>
  <div class="pageBox">
    <div class="breadCrub">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>消息中心</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="pageareMain">
      <div class="">

        <Form  label-position="left" :label-width="100">
          <Row :gutter="64">
            <Col span="16">
            <FormItem label="待办标题：">
              <Input v-model="searchData.waitDoTitle"  clearable /></Input>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="发起人：">
              <Input v-model="searchData.originator"  clearable ></Input>
            </FormItem>
            </Col>
          </Row>
          <Row :gutter="64">
            <Col span="8">
            <FormItem label="发起时间：">
              <DatePicker v-model="searchData.originatorTime" type="date" placeholder="选择时间" ></DatePicker>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="待办类型：">
              <Select v-model="searchData.dataSources"  clearable>
                <Option v-for="item in dataSourcesList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="所在部门：">
              <Input v-model="searchData.department"  clearable ></Input>

            </FormItem>
            </Col>
          </Row>
          <Row :gutter="64">
            <Col span="8">
            <FormItem label="数据来源：">
              <Select v-model="searchData.dataSources"  clearable>
                <Option v-for="item in dataSourcesList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="所在公司：">
              <Input v-model="searchData.company" clearable />
            </FormItem>
            </Col>
            <Col span="8">
            <div class="serchBtn-wr">
              <Button size="large" type="error" icon="ios-search">搜索</Button>
            </div>
            </Col>
          </Row>
        </Form>
      </div>
      <div class="tableData">
        <Table border  :columns="theadData" :data="tbodyData"></Table>
        <div style="margin: 10px;height:35px;">
          <div style="float: right;">
            <Page placement="top" show-total show-sizer :total="pageData.total" :current="pageData.pageNum" :page-size="pageData.pageSize"
                  @on-change="changePage" @on-page-size-change="changePageSize"></Page>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      searchData:{msgTitle:"",originator:"",originatorTime:"",department:"",msgType:"",dataSources:"",company:""},
      msgTypeList:[],//消息类型数据
      dataSourcesList:[],//数据来源数据
      theadData:[ //表头
        {title:'发布时间',key:'originatorTime'},
        {title:'标题',key:'newsTitle',className: 'overEllipsis',width:300,
          render: (h, params) => {
            return h('a', {
              attrs:{
                href:this.tbodyData[params.index].href,
                title:this.tbodyData[params.index].msgTitle,
                target:"_blank"
              }
            },this.tbodyData[params.index].msgTitle);
          }
        },
        {title:'数据来源',key:'dataSources'},
        {title:'类型',key:'msgType'},
        {title:'发起人',key:'originator'},
        {title:'部门',key:'department'},
        {title:'公司',key:'company'}
      ],
      tbodyData:[],
      pageData:{total:11,pageSize:10,pageNum:1}//分页参数
    }
  },
  created(){
    this.getData();
  },
  methods:{
    getData(){
      this.$ajax({
        method:'get',
        url:'/msgData',
        params:{}
      }).then(res=>{
        console.log(res);
        this.tbodyData=res.data.data.msgList;
        this.msgTypeList=res.data.data.msgType;
        this.dataSourcesList=res.data.data.dataSources;
      })
    },
    changePage (value) {
      //选择页码
      this.pageData.pageNum=value;
      this.getData();
    },
    changePageSize(value){
      //选择每页显示多少条数据
      this.pageData.pageSize = value;
      this.getData();
    },
  }
}
</script>

<style scoped>
.searchBox{
  padding: 0 35px 20px;
  border-bottom: 1px solid #ddd;
}
.tableData{
  padding: 20px 0 10px;
}
</style>
