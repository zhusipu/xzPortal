<template>
  <div class="pageBox">
    <div class="breadCrub">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>员工自助</BreadcrumbItem>
        <BreadcrumbItem>个人薪资</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="pageareMain tabCard">
      <Tabs type="card"  :animated="false">
        <TabPane label="个人薪资" class="selfService">
          <div class="searchBox">
            <Form  label-position="left" :label-width="100">
              <Row :gutter="64">
                <Col span="8">
                  <FormItem label="所属组织：">
                    <Input v-model="searchData.group" clearable></Input>
                  </FormItem>
                </Col>
                <Col span="8">
                  <FormItem label="员工编号：">
                    <Input v-model="searchData.empNo" clearable></Input>
                  </FormItem>
                </Col>
                <Col span="8">
                  <FormItem label="姓  名：">
                    <Input v-model="searchData.empName" clearable></Input>
                  </FormItem>
                </Col>
              </Row>
              <Row :gutter="64">
                <Col span="8">
                  <FormItem label="期   间：">
                    <Input v-model="searchData.duration" clearable></Input>
                  </FormItem>
                </Col>
                <Col span="16">
                <div class="serchBtn-wr">
                  <Button size="large" type="error" icon="ios-search">搜索</Button>
                  <Button size="large" type="error"  ghost icon="ios-download-outline"  @click="exportData()">导出</Button>
                </div>

                </Col>

              </Row>
            </Form>

          </div>
          <div class="tableData">
            <Table border  :columns="theadData" :data="tbodyData" ref="table"></Table>
            <div class="pagnation-wr">
              <Page placement="top" show-total show-sizer :total="pageData.total" :current="pageData.pageNum" :page-size="pageData.pageSize"  @on-change="changePage" @on-page-size-change="changePageSize"></Page>
            </div>
          </div>
        </TabPane>
        <TabPane label="个人基本信息" class="selfInfo">
           <div class="presonalInfo-hd">
              <div class="presonalInfo-pic">
                <img src="../../assets/images/temp/timg.jpg" alt="" />
              </div>
           </div>
        </TabPane>
        <TabPane label="个人假期信息"  class="selfService">个人假期信息</TabPane>
        <TabPane label="通讯录"  class="selfService">
          <div class="searchBox">
            <Form  label-position="left" :label-width="100">
              <Row :gutter="64">
                <Col span="8">
                <FormItem label="所属组织：">
                  <Input v-model="searchData.group" clearable></Input>
                </FormItem>
                </Col>
                <Col span="8">
                <FormItem label="员工编号：">
                  <Input v-model="searchData.empNo" clearable></Input>
                </FormItem>
                </Col>
                <Col span="8">
                <FormItem label="姓  名：">
                  <Input v-model="searchData.empName" clearable></Input>
                </FormItem>
                </Col>
              </Row>
              <Row :gutter="64">
                <Col span="8">
                <FormItem label="手机号码：">
                  <Input v-model="searchData.duration" clearable></Input>
                </FormItem>
                </Col>
                <Col span="16">
                <div class="serchBtn-wr">
                  <Button size="large" type="error" icon="ios-search">搜索</Button>
                  <Button size="large" type="error"  ghost icon="ios-download-outline"  @click="exportData()">导出</Button>
                </div>

                </Col>

              </Row>
            </Form>
            <div class="tableData">
              <Table border  :columns="theadData" :data="tbodyData" ref="table"></Table>
              <div class="pagnation-wr">
                <Page placement="top" show-total show-sizer :total="pageData.total" :current="pageData.pageNum" :page-size="pageData.pageSize"  @on-change="changePage" @on-page-size-change="changePageSize"></Page>
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      searchData:{group:"",empNo:"",empName:"",duration:""},
      theadData:[ //表头
        {title:'员工编号',key:'staffNum'},
        {title:'姓名',key:'staffName'},
        {title:'所属组织',key:'department'},
        {title:'岗位',key:'position'},
        {title:'薪资期间',key:'salaryTime'},
        {title:'应付工资',key:'salary'},
        {title:'代扣保险公积金合计',key:'providentFund'},
        {title:'应税所得',key:'taxableIncome'},
        {title:'代扣代缴个人所得税',key:'incomeTax'},
        {title:'实发工资',key:'actualSalary'},
        {title:'操作',key:'action',
          render: (h, params) => {
            return h('a', {
              on: {
                click: () => {
                  alert(params.index)
                }
              }
            }, '查看')
          }
        },
      ],
      tbodyData:[],
      pageData:{total:11,pageSize:10,pageNum:1},//分页参数
      personalPic:''
    }
  },
  created(){
    this.getData();
    this.getPersonInfo();
  },
  methods:{
    getData(){
      this.$ajax({
        method:'get',
        url:'/salaryList',
        params:{}
      }).then(res=>{
        //console.log(res);
        this.tbodyData=res.data.data;
      })
    },
    getPersonInfo(){
      this.$ajax({
        method:'get',
        url:'/personInfo',
        params:{}
      }).then(res=>{
        this.personalDate=res.data.data;
        this.personalPic=this.personalDate[0].photo;
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
    exportData () {
      this.$refs.table.exportCsv({
        filename: '导出'
      });
    }
  }
}
</script>

<style scoped>
.searchBox{
  border-bottom: 1px solid #ddd;
}
.tableData{
  padding: 40px 0 10px;
}
.presonalInfo-hd{
  width:100%;
}
.presonalInfo-pic{
  width: 120px;
  height: 140px;
  overflow: hidden;
  float: left;
}
.presonalInfo-pic img{
  width: 100%;
  height: auto;
}
</style>
