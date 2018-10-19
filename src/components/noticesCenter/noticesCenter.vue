<template>
  <div class="pageBox">
    <div class="breadCrub">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>通知公告</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="pageareMain">
      <div class=" ">

        <Form  label-position="left" :label-width="100">
          <Row :gutter="16">
            <Col span="16">
              <FormItem label="新闻标题：">
                <Input v-model="searchData.newsTitle"  clearable /></Input>
              </FormItem>
            </Col>
            <Col span="8">
              <FormItem label="所在公司：">
                <Input v-model="searchData.company" clearable />
              </FormItem>
            </Col>
            
          </Row>
          <Row :gutter="16">
            <Col span="8">
              <FormItem label="发起时间：">
                <DatePicker v-model="searchData.originatorTime" type="date" placeholder="选择时间" ></DatePicker>
              </FormItem>
            </Col>
            <Col span="8" offset="8">
              <div class="serchBtn-wr">
                <Button size="large" type="error" icon="ios-search" @click="searchFunc">搜索</Button>
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
      searchData:{newsTitle:"",originator:"",originatorTime:"",department:"",company:""},
      theadData:[ //表头
        {title:'发布时间',key:'originatorTime',width:200},
        {title:'标题',key:'newsTitle',className: 'overEllipsis',width:500,
          render: (h, params) => {
            return h('a', {
              attrs:{
                href:this.tbodyData[params.index].href,
                title:this.tbodyData[params.index].newsTitle,
                target:"_blank"
              }
            },this.tbodyData[params.index].newsTitle);
          }
        },
        {title:'公司',key:'company'},
        {title:'操作',key:'action',width:100,
          render: (h, params) => {
            return h('a', {
              on: {
                click: () => {
                  this.$router.push('/layout/noticeDetail')
                }
              }
            }, '查看')
          }
        }
      ],
      tbodyData:[],
      pageData:{total:11,pageSize:10,pageNum:1}//分页参数
    }
  },
  created(){
    this.getData();
  },
  methods:{
    // 时间参数需要格式化new Date(时间参数).Format('时间格式')
    getData(){
      this.$ajax({
        method:'get',
        url:'/newsList',
        params:{}
      }).then(res=>{
        console.log(res);
        this.tbodyData=res.data.data;
      })
    },
    searchFunc(){
      this.pageData.pageNum=1;
      this.getData();
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
