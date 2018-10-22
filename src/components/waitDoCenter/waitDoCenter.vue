<template>
  <div class="pageBox">
    <div class="breadCrub">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>待办中心</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="pageareMain">
      <div class=" ">
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
                <Option v-for="item in waitDoTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
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
              <Button size="large" type="error" icon="ios-search" @click="searchFunc">搜索</Button>
            </div>
            </Col>
          </Row>
        </Form>
      </div>
      <div class="tableData">
        <Table border :loading="loading" :columns="theadData" :data="tbodyData"></Table>
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
import { getMsgSrcList, getMessage } from 'api/message'
import { getCompList } from 'api/department'
export default {
  data(){
    return {
      searchData: {
        title: '',
        sender: '',
        postDt: '',
        todoStatus: '',
        dept: '',
        msgSrc: '',
        comp: ''
      },
      waitDoTypeList:[
        {
          label: '全部',
          value: ''
        },
        {
          label: '未办',
          value: '0'
        },
        {
          label: '已办',
          value: '1'
        }
      ],//消息类型数据
      dataSourcesList:[],//数据来源数据
      theadData:[ //表头
        {title:'发布时间',key:'postDt', width: 180},
        {title:'标题',key:'messageName',className: 'overEllipsis',
          render: (h, params) => {
            return h('a', {
              attrs:{
                href:this.tbodyData[params.index].url,
                title:this.tbodyData[params.index].messageName,
                target:"_blank"
              }
            },this.tbodyData[params.index].messageName);
          }
        },
        {title:'数据来源',key:'messageSrc', width: 200},
        {title:'类型',key:'messageTodoState', width: 150},
        {title:'发起人',key:'name', width: 150},
        {title:'部门',key:'dept', width: 300},
        {title:'公司',key:'comp', width: 300}
      ],
      tbodyData:[],
      pageData:{
        total: 0,
        pageSize: 10,
        page: 1
      }, //分页参数
      compList: [],
      loading: false
    }
  },
  created(){
    this._getMsgSrcList()
    this._getCompList()
    this._getList()
  },
  methods:{
    _getList() {
      this.loading = true
      getMessage(this.pageData.page, this.pageData.pageSize, '1', this.searchData.title, this.searchData.sender, this.searchData.postDt, this.searchData.todoStatus, this.searchData.dept, this.searchData.msgSrc, this.searchData.comp).then(res => {
        if (res.code === 1) {
          this.tbodyData = res.data.list
          this.pageData.total = res.data.total
        }
        this.loading = false
      })
    },
    _getMsgSrcList() {
      getMsgSrcList().then(res => {
        if (res.code === 1) {
          this.dataSourcesList = res.data
        }
      })
    },
    _getCompList() {
      getCompList().then(res => {
        if (res.code === 1) {
          this.compList = res.data
        }
      })
    },
    searchFunc(){
      this.pageData.pageNum=1;
      this.getData();
    },
    changePage (value) {
      //选择页码
      this.pageData.page = value;
      this._getList()
    },
    changePageSize(value){
      //选择每页显示多少条数据
      this.pageData.pageSize = value;
      this._getList()
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
  position: relative;
  padding: 20px 0 10px;
}
</style>
