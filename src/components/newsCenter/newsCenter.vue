<template>
  <div class="pageBox">
    <div class="breadCrub">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>新闻中心</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="pageareMain">
      <div class=" ">

        <Form  label-position="left" :label-width="100">
          <Row :gutter="16">
            <Col span="16">
            <FormItem label="新闻标题：">
              <Input v-model="searchData.title"  clearable /></Input>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="发起人：">
              <Input v-model="searchData.creator"  clearable ></Input>
            </FormItem>
            </Col>
          </Row>
          <Row :gutter="16">
            <Col span="8">
            <FormItem label="发起时间：">
              <DatePicker v-model="searchData.createTime" type="date" placeholder="选择时间" ></DatePicker>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="所在部门：">
              <Input v-model="searchData.dept" clearable />
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="所在公司：">
              <Select v-model="searchData.comp"  clearable>
                <Option v-for="item in compList" :value="item.id" :key="item.id">{{ item.name }}</Option>
              </Select>
            </FormItem>
            </Col>
          </Row>
          <div class="serchBtn-wr">
            <Button size="large" type="error" icon="ios-search" @click="searchFunc">搜索</Button>
          </div>
        </Form>
      </div>
      <div class="tableData">
        <Table border :loading="loading" :columns="theadData" :data="newsList"></Table>
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
import { getCompList } from 'api/department'
import { getNews } from 'api/news'
export default {
  data(){
    return {
      compList: [],
      searchData:{
        title: '',
        creator: '',
        createTime: '',
        dept: '',
        comp: ''
      },
      theadData:[ //表头
        { title: '发布时间', key: 'createTime' },
        { title: '标题', key: 'title', className: 'overEllipsis', width: 350,
          render: (h, params) => {
            return h('a', {
              // attrs:{
              //   href:this.tbodyData[params.index].href,
              //   title:this.tbodyData[params.index].newsTitle,
              //   target:"_blank"
              // },
              on: {
                click: () => {
                  this.$router.push('/layout/newsDetail/' + this.newsList[params.index].id)
                }
              }
            },this.newsList[params.index].title);
          }
        },
        { title: '发起人', key: 'creator' },
        { title: '部门', key: 'dept' },
        { title: '公司', key: 'comp' }
      ],
      newsList: [],
      loading: false,
      pageData: {
        total: 0,
        pageSize: 10,
        pageNum: 1
      } //分页参数
    }
  },
  created(){
    this._getCompList()
    this._getList()
  },
  methods:{
    _getList() {
      this.loading = true
      getNews(this.pageData.pageNum, this.pageData.pageSize, this.searchData.title, this.searchData.creator, this.searchData.createTime, this.searchData.dept, this.searchData.comp).then(res => {
        if (res.code === 1) {
          this.newsList = res.data.list
          this.pageData.total = res.data.total
          this.loading = false
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
      this.pageData.pageNum = 1
      this._getList()
    },
    changePage (value) {
      //选择页码
      this.pageData.pageNum = value
      this._getList()
    },
    changePageSize(value){
      //选择每页显示多少条数据
      this.pageData.pageSize = value
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
  padding: 20px 0 10px;
}
</style>
