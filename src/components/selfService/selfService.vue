<template>
  <div class="pageBox">
    <div class="breadCrub">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>员工自助</BreadcrumbItem>
        <BreadcrumbItem>{{tabName}}</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="pageareMain tabCard">
      <Tabs type="card"  :animated="false" @on-click="switchTab" :value="tabName">
        <TabPane name="个人薪资" label="个人薪资" class="selfService">
          <div class="searchBox">
            <Form  label-position="left" :label-width="100">
              <Row :gutter="64">
                <Col span="8">
                  <FormItem label="所属组织：">
                    <Input v-model="searchSalaryParam.group" clearable></Input>
                  </FormItem>
                </Col>
                <Col span="8">
                  <FormItem label="员工编号：">
                    <Input v-model="searchSalaryParam.empNo" clearable></Input>
                  </FormItem>
                </Col>
                <Col span="8">
                  <FormItem label="姓  名：">
                    <Input v-model="searchSalaryParam.empName" clearable></Input>
                  </FormItem>
                </Col>
              </Row>
              <Row :gutter="64">
                <Col span="8">
                  <FormItem label="期   间：">
                    <DatePicker @on-change="changeSalaryDate" type="daterange" clearable split-panels placeholder="选择时间段"></DatePicker>
                  </FormItem>
                </Col>
                <Col span="16">
                <div class="serchBtn-wr">
                  <Button size="large" type="error" icon="ios-search" @click="searchSalary">搜索</Button>
                  <Button size="large" type="error"  ghost icon="ios-download-outline"  :loading="exportLoading" @click="exportSalaryExcel">导出</Button>
                </div>
                </Col>
              </Row>
            </Form>
          </div>
          <div class="tableData">
            <Table border  :columns="salaryThead" :data="salaryData"></Table>
            <div class="pagnation-wr">
              <Page placement="top" show-total show-sizer :total="salaryPageParam.total" :current="salaryPageParam.pageNum" :page-size="salaryPageParam.pageSize"  @on-change="changeSalaryPage" @on-page-size-change="changeSalaryPageSize"></Page>
            </div>
          </div>
        </TabPane>
        <TabPane name="个人基本信息" label="个人基本信息" class="selfInfo">
          <div class="presonalInfo-hd">
            <div class="presonalInfo-pic">
              <img src="../../assets/images/temp/timg.jpg" alt="" />
            </div>
            <div class="presonalInfo-tit">
              <h3>{{tabContents[0].name}}</h3>
              <p>{{tabContents[0].department}}</p>
              <p>{{tabContents[0].position}}</p>
            </div>
          </div>
          <div class="presonalInfo-bd clearfix">
            <div class="presonalInfo-bd-list">
              <ul>
                <li
                  v-for="(item,index) in tabs"
                  :class="{active:index == num}"
                  @click="tab(index)">{{item}}</li>
              </ul>
            </div>
            <div class="tabCon">
              <div v-show="num==0">
                  <h4>{{title}}</h4>
                  <dl>
                    <dt>编码：</dt><dd>{{tabContents[0].baseInfo.no}}</dd>
                    <dt>姓名：</dt><dd>{{tabContents[0].baseInfo.name}}</dd>
                  </dl>
                  <dl>
                    <dt>出生日期：</dt><dd>{{tabContents[0].baseInfo.birth}}</dd>
                    <dt>性别：</dt><dd>{{tabContents[0].baseInfo.sex}}</dd>
                  </dl>
                  <dl>
                    <dt>国籍：</dt><dd>{{tabContents[0].baseInfo.country}}</dd>
                    <dt>籍贯：</dt><dd>{{tabContents[0].baseInfo.nativePlace}}</dd>
                  </dl>
                  <dl>
                    <dt>民族：</dt><dd>{{tabContents[0].baseInfo.nation}}</dd>
                    <dt>户口类型：</dt><dd>{{tabContents[0].baseInfo.accountType}}</dd>
                  </dl>
                  <dl>
                    <dt>户口所在地：</dt><dd>{{tabContents[0].baseInfo.accountAddr}}</dd>
                    <dt>身份证地址：</dt><dd>{{tabContents[0].baseInfo.idCardAddr}}</dd>
                  </dl>
                  <dl>
                    <dt>出生地：</dt><dd>{{tabContents[0].baseInfo.birthAddr}}</dd>
                    <dt>婚姻状况：</dt><dd>{{tabContents[0].baseInfo.marryState}}</dd>
                  </dl>
                  <dl>
                    <dt>政治面貌：</dt><dd>{{tabContents[0].baseInfo.politicsStatus}}</dd>
                    <dt>血型：</dt><dd>{{tabContents[0].baseInfo.bloodType}}</dd>
                  </dl>
                  <dl>
                    <dt>身高：</dt><dd>{{tabContents[0].baseInfo.height}}</dd>
                  </dl>
              </div>
              <div v-show="num==1">
                  <h4>{{title}}</h4>
                  <dl>
                    <dt>联系方式：</dt><dd>{{tabContents[1].a}}</dd>
                    <dt>联系地址：</dt><dd>{{tabContents[1].b}}</dd>
                  </dl>
                  <dl>
                    <dt>联系方式：</dt><dd>{{tabContents[1].a}}</dd>
                    <dt>联系地址：</dt><dd>{{tabContents[1].b}}</dd>
                  </dl>
              </div>
              <div v-show="num==2">
                  <h4>{{title}}</h4>
              </div>
              <div v-show="num==3">
                  <h4>{{title}}</h4>
              </div>
              <div v-show="num==4">
                  <h4>{{title}}</h4>
              </div>
              <div v-show="num==5">
                  <h4>{{title}}</h4>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane name="个人假期信息" label="个人假期信息" class="selfService">
          <div class="searchBox">
            <Form  label-position="left" :label-width="100">
              <Row :gutter="64">
                <Col span="8">
                <FormItem label="所属组织：">
                  <Input v-model="searchHolidayParam.group" clearable></Input>
                </FormItem>
                </Col>
                <Col span="8">
                <FormItem label="员工编号：">
                  <Input v-model="searchHolidayParam.empNo" clearable></Input>
                </FormItem>
                </Col>
                <Col span="8">
                <FormItem label="姓  名：">
                  <Input v-model="searchHolidayParam.empName" clearable></Input>
                </FormItem>
                </Col>
              </Row>
              <Row :gutter="64">
                <Col span="8">
                <FormItem label="假期期间：">
                  <DatePicker @on-change="changeHolidayDate" type="daterange" clearable split-panels placeholder="选择时间段"></DatePicker>
                </FormItem>
                </Col>
              </Row>
            </Form>
            <div class="holidayType">
              <ul>
                <li class="typeList">
                  <div>年假(天)</div>
                  <div>剩余额度4天</div>
                </li>
                <li class="typeList">
                  <div>年假(天)</div>
                  <div>剩余额度4天</div>
                </li>
                <li class="typeList">
                  <div>年假(天)</div>
                  <div>剩余额度4天</div>
                </li>
                <li class="typeList">
                  <div>年假(天)</div>
                  <div>剩余额度4天</div>
                </li>
                <li class="typeList">
                  <div>年假(天)</div>
                  <div>剩余额度4天</div>
                </li>
                <li class="typeList">
                  <div>年假(天)</div>
                  <div>剩余额度4天</div>
                </li>
                <li class="typeList">
                  <div>年假(天)</div>
                  <div>剩余额度4天</div>
                </li>
                <li class="typeList">
                  <div>年假(天)</div>
                  <div>剩余额度4天</div>
                </li>
                <li class="typeList">
                  <div>年假(天)</div>
                  <div>剩余额度4天</div>
                </li>
                <li class="typeList">
                  <div>年假(天)</div>
                  <div>剩余额度4天</div>
                </li>
                <li class="typeList">
                  <div>年假(天)</div>
                  <div>剩余额度4天</div>
                </li>
                <li class="typeList">
                  <div>年假(天)</div>
                  <div>剩余额度4天</div>
                </li>
                <li class="typeList">
                  <div>年假(天)</div>
                  <div>剩余额度4天</div>
                </li>
              </ul>
              <div class="tips">年假总额度 <span style="color: red;">4</span> 天，其中本年生成3天，上年转入1天</div>
            </div>
          </div>
          <div style="margin-top: 40px;">
            <Form  label-position="left" :label-width="100" :model="postHolidayParam">
              <Row :gutter="64">
                <Col span="8">
                <FormItem label="请假开始时间:">
                  <DatePicker  type="date" v-model="postHolidayParam.startTime" clearable placeholder="选择时间"></DatePicker>
                </FormItem>
                </Col>
                <Col span="8">
                <FormItem label="请假结束时间:">
                  <DatePicker  type="date" v-model="postHolidayParam.endTime" clearable placeholder="选择时间"></DatePicker>
                </FormItem>
                </Col>
                <Col span="8">
                <FormItem label="请假长度:">
                  <Input clearable v-model="postHolidayParam.longTime"></Input>
                </FormItem>
                </Col>
              </Row>
              <Row :gutter="64">
                <Col span="16">
                <FormItem label="请假说明:">
                  <Input type="textarea" v-model="postHolidayParam.explain" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                </FormItem>
                </Col>
                <Col span="8">
                <FormItem label="上传附件:">
                  <Upload action="上传地址">
                    <Button icon="ios-cloud-upload-outline">选择文件</Button>
                  </Upload>
                </FormItem>
                </Col>
              </Row>
              <Row :gutter="64">
                <Col span="24">
                  <div class="serchBtn-wr">
                    <Button size="large" type="error" @click="postHolidayData">提交</Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </TabPane>
        <TabPane name="通讯录" label="通讯录"  class="selfService">
          <div class="searchBox">
            <Form  label-position="left" :label-width="100">
              <Row :gutter="64">
                <Col span="8">
                <FormItem label="所属组织：">
                  <Input v-model="searchTelParam.group" clearable></Input>
                </FormItem>
                </Col>
                <Col span="8">
                <FormItem label="员工编号：">
                  <Input v-model="searchTelParam.empNo" clearable></Input>
                </FormItem>
                </Col>
                <Col span="8">
                <FormItem label="姓  名：">
                  <Input v-model="searchTelParam.empName" clearable></Input>
                </FormItem>
                </Col>
              </Row>
              <Row :gutter="64">
                <Col span="8">
                <FormItem label="手机号码：">
                  <Input v-model="searchTelParam.duration" clearable></Input>
                </FormItem>
                </Col>
                <Col span="16">
                <div class="serchBtn-wr">
                  <Button size="large" type="error" icon="ios-search" @click="searchTel">搜索</Button>
                  <Button size="large" type="error"  ghost icon="ios-download-outline"  @click="exportTelExcel()">导出</Button>
                </div>
                </Col>
              </Row>
            </Form>
          </div>
          <div class="tableData">
            <Table border  :columns="addrBookThead" :data="addrBookData" ref="table"></Table>
            <div class="pagnation-wr">
              <Page placement="top" show-total show-sizer :total="telPageParam.total" :current="telPageParam.pageNum" :page-size="telPageParam.pageSize"  @on-change="changeTelPage" @on-page-size-change="changeTelPageSize"></Page>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import excel from '@/assets/js/excel'
export default {
  data(){
    return {
      exportLoading: false,
      searchSalaryParam:{group:"",empNo:"",empName:"",duration:""},//个人薪资搜索参数
      searchTelParam:{group:"",empNo:"",empName:"",phoneNo:""}, //通讯录搜索参数
      searchHolidayParam:{group:"",empNo:"",empName:"",duration:""}, //个人假期信息搜索参数
      postHolidayParam:{startTime:"",endTime:"",longTime:"",explain:""},//上传假期信息
      salaryThead:[ //个人薪资表头
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
                  this.$router.push('/layout/salaryDetail')
                }
              }
            }, '查看')
          }
        },
      ],
      addrBookThead:[//通讯录表头
        {title:'序号',key:'a',
          render: (h, params) => {
            return h('div', {},params.index+1)
          }
        },
        {title:'员工编号',key:'staffNo'},
        {title:'姓名',key:'staffName'},
        {title:'所属组织',key:'department'},
        {title:'岗位',key:'position'},
        {title:'手机号码',key:'phoneNo'},
        {title:'办公电话',key:'officeNo'},
        {title:'电子邮件',key:'email'},
        {title:'通讯地址',key:'address'},
        {title:'通讯电子编码',key:'addrCode'},
        {title:'其他',key:'other'}
      ],
      salaryData:[],//个人薪资数据
      addrBookData:[],//通讯录数据
      salaryPageParam:{total:0,pageSize:10,pageNum:1},//个人薪资分页参数
      telPageParam:{total:0,pageSize:10,pageNum:1},//通讯录分页参数
      tabs: ["基本信息", "联系方式","任职资格","职业信息", "企业任职经历","任职资格"],//个人基本信息tab
      tabContents:[ //个人基本信息数据
        {
          name:"张朝阳",
          department:"运营分公司/企划部",
          position:"IT管理员",
          baseInfo:{
            no:"10086",
            name:"张朝阳 ",
            birth:"1992年11月2日",
            sex:"男",
            country:"中国",
            nativePlace:"湖北武汉",
            nation:"汉",
            accountType:"城镇",
            accountAddr:"湖北省武汉市洪山区185号",
            idCardAddr:"湖北省武汉市洪山区185号",
            birthAddr:"湖北省武汉市洪山区185号",
            marryState:"未婚",
            politicsStatus:"群众",
            bloodType:"O型",
            height:"180cm"
          }
        },
        {
          a:'13507128736',
          b:'北京市朝阳区'
        }
      ],
      num: 0,
      title:'基本信息',
      tabName:''
    }
  },
  created(){
    if (this.$route.params.name==0){
      this.tabName="个人薪资"
    }else if(this.$route.params.name==1){
      this.tabName="通讯录"
    }else if(this.$route.params.name==2){
      this.tabName="个人假期信息"
    }else{
      this.tabName="个人基本信息"
    };
    this.switchTab(this.tabName);
  },
  methods:{
    switchTab(name){
      this.tabName=name;
      console.log(this.tabName)
      if(name=="个人薪资"){
        this.getSalary();
        this.$router.push('/layout/selfService/0');
      }else if(name=="个人基本情况"){
        this.getBaseInfo()
        this.$router.push('/layout/selfService/3');
      }else if(name=="个人假期信息"){
        this.getHolidayInfo();
         this.$router.push('/layout/selfService/2');
      }else{
        this.getAddrBook();//调用通讯录
         this.$router.push('/layout/selfService/1');
      }
    },
    // 时间段日期返回的是一个数组需要拼接
    changeSalaryDate(date){//个人薪资搜索时间
      this.searchSalaryParam.duration=date[0]+'-'+date[1]
    },
    changeHolidayDate(date){//个人假期搜索时间
      this.searchHolidayParam.duration=date[0]+'-'+date[1]
    },
    searchSalary(){//搜索个人薪资方法
      if(this.searchSalaryParam.duration=='-'){
        this.searchSalaryParam.duration='';
      }
      this.salaryPageParam.pageNum=1;
      this.getSalary();
    },
    searchHoliday(){//搜索个人假期信息方法
      if(this.searchSalaryParam.duration=='-'){
        this.searchSalaryParam.duration='';
      }
      this.getHolidayInfo()
    },
    searchTel(){//搜索通讯录方法
      this.telPageParam.pageNum=1;
      this.getAddrBook();
    },
    getSalary(){//获取个人薪资数据方法
      this.$ajax({
        method:'get',
        url:'/salaryList',
        params:{}
      }).then(res=>{
        this.salaryData=res.data.data;
      })
    },
    getBaseInfo(){//获取个人基本信息方法
      this.$ajax({
        method:'get',
        url:'',
        params:{}
      }).then(res=>{
        // console.log(res.data.data);
      })
    },
    getHolidayInfo(){//获取个人假期信息方法
      this.$ajax({
        method:'get',
        url:'',
        params:{}
      }).then(res=>{
        // console.log(res.data.data);
      })
    },
    getAddrBook(){//获取通讯录数据方法
      this.$ajax({
        method:'get',
        url:'/addrBook',
        params:{}
      }).then(res=>{
        this.addrBookData=res.data.data;
      })
    },
    postHolidayData(){//上传假期信息
    // 日期需要格式化
    console.log("开始时间:"+new Date(this.postHolidayParam.startTime).Format('yyyy-MM-dd')+"-----结束时间:"+new Date(this.postHolidayParam.endTime).Format('yyyy-MM-dd'));
    console.log("请假长度:"+this.postHolidayParam.longTime+"-----请假说明:"+this.postHolidayParam.explain);
      let postData = this.$qs.stringify({//请求参数
        
      })
      this.$ajax({
        method:'post',
        url:'',
        data:postData
      }).then(res=>{
        console.log(res);
      })
    },
    changeSalaryPage (value) {//个人薪资-选择页码方法
      this.salaryPageParam.pageNum=value;
      this.getSalary();
    },
    changeSalaryPageSize(value){//个人薪资-选择每页显示多少条数据方法
      this.salaryPageParam.pageSize = value;
      this.getSalary();
    },
    changeTelPage (value) {//通讯录-选择页码方法
      this.telPageParam.pageNum=value;
      this.getAddrBook();
    },
    changeTelPageSize(value){//通讯录-选择每页显示多少条数据方法
      this.telPageParam.pageSize = value;
      this.getAddrBook();
    },
    exportSalaryExcel () {//导出个人薪资表
      if (this.salaryData.length) {
        this.exportLoading = true
        const params = {
          title: ['员工编号', '姓名', '所属组织','岗位','薪资期间','应付工资','代扣保险公积金合计','应税所得','代扣代缴个人所得税','实发工资'],
          key: ['staffNum', 'staffName', 'department','position','salaryTime','salary','providentFund','taxableIncome','incomeTax','actualSalary'],
          data: this.salaryData,
          autoWidth: true,
          filename: '个人薪资'
        }
        excel.export_array_to_excel(params)
        this.exportLoading = false
      } else {
        this.$Message.info('表格数据不能为空！')
      }
    },
    exportTelExcel () {//导出通讯录
      if (this.addrBookData.length) {
        this.exportLoading = true
        const params = {
          title: ['员工编号','姓名', '所属组织','岗位','手机号码','办公电话','电子邮件','通讯地址','通讯电子编码','其他'],
          key: ['staffNo', 'staffName','department','position','phoneNo','officeNo','email','address','addrCode','other'],
          data: this.addrBookData,
          autoWidth: true,
          filename: '通信录'
        }
        excel.export_array_to_excel(params)
        this.exportLoading = false
      } else {
        this.$Message.info('表格数据不能为空！')
      }
    },
    tab(index) { // 个人基本信息选项卡方法
      this.num = index;
      this.title=this.tabs[index]
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
.presonalInfo-tit{
  padding-left: 160px;
}
.presonalInfo-tit h3{
  margin-bottom: 25px;
}
.presonalInfo-tit p{
  margin-bottom: 10px;
  color: #9b9b9b;
}
.presonalInfo-bd{
  padding-top: 40px;
}
.presonalInfo-bd-list{
  float: left;
  width: 150px;
  border-right: 1px solid #ccc;
  padding-top: 10px 0;
}
.presonalInfo-bd-list ul li{
  line-height: 50px;
  padding-right:30px;
  text-align: right;
  cursor: pointer;
}
.presonalInfo-bd-list ul li.active{
  border-right:2px solid #A93439;
  color: #A93439;
}
.tabCon{
  padding-left: 200px;
}
/*个人假期详情*/
.holidayType{
  padding: 10px 0 40px;
}
.holidayType li.typeList{
  display: inline-block;
  width: 140px;
  height: 80px;
  line-height: 1.8;
  padding: 15px 20px;
  border: 1px solid #E1E1E1;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 15px;
}
.holidayType li.typeList>div:first-child{
  color: #909399;
}
dt,dd{
  display: inline-block;
}
dt{
  width: 100px;
  color: #909399;
}
dd{
  width: 200px;
}
dl{
  line-height: 3;
}
</style>
