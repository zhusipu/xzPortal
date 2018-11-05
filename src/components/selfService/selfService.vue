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
          <div class="presonalInfo-hd" v-if="loadSelfInfo === true">
            <div class="presonalInfo-pic">
              <img src="../../assets/images/temp/default_headsmall.png" alt="" />
            </div>
            <div class="presonalInfo-tit">
              <h3>{{tabContents[0].name}}</h3>
              <p>{{tabContents[0].dept}}</p>
              <p>{{tabContents[0].post}}</p>
            </div>
          </div>
          <div class="presonalInfo-bd clearfix" v-if="loadSelfInfo === true">
            <div class="presonalInfo-bd-list">
              <ul>
                <li
                  v-for="(item,index) in tabs"
                  :key="index"
                  :class="{active:index == num}"
                  @click="tab(index)">{{item}}</li>
              </ul>
            </div>
            <div class="tabCon">
              <div v-show="num==0">  <!-- 员工个人信息 -->
                  <h4>{{title}}</h4>
                  <dl>
                    <dt>员工编码：</dt><dd>{{tabContents[0].baseInfo.empNo}}</dd>
                    <dt>姓名：</dt><dd>{{tabContents[0].baseInfo.FNAME_L2}}</dd>
                  </dl>
                  <dl>
                    <dt>性别：</dt><dd>{{tabContents[0].baseInfo.FGENDER}}</dd>
                    <dt>出生日期：</dt><dd>{{tabContents[0].baseInfo.FBIRTHDAY}}</dd>
                  </dl>
                  <dl>
                    <dt>电子邮件：</dt><dd>{{tabContents[0].baseInfo.FEMAIL}}</dd>
                    <dt>通信地址：</dt><dd>{{tabContents[0].baseInfo.FADDRESS}}</dd>
                  </dl>
                  <dl>
                    <dt>办公室电话：</dt><dd>{{tabContents[0].baseInfo.FOFFICEPHONE}}</dd>
                    <dt>手机号码：</dt><dd>{{tabContents[0].baseInfo.FMOBILE}}</dd>
                  </dl>
                  <dl>
                    <dt>身份证号码：</dt><dd>{{tabContents[0].baseInfo.FIDCARDNO}}</dd>
                    <dt>籍贯：</dt><dd>{{tabContents[0].baseInfo.FNATIVEPLACE_L2}}</dd>
                  </dl>
                  <dl>
                    <dt>婚姻状况：</dt><dd>{{tabContents[0].baseInfo.FWEDID}}</dd>
                    <dt>生育状况：</dt><dd>{{tabContents[0].baseInfo.CFSYZKID}}</dd>
                  </dl>
                  <dl>
                    <dt>政治面貌：</dt><dd>{{tabContents[0].baseInfo.FPOLITICALFACEID}}</dd>
                    <dt>民族：</dt><dd>{{tabContents[0].baseInfo.FFOLKID}}</dd>
                  </dl>
                  <dl>
                    <dt>户口所在地：</dt><dd>{{tabContents[0].baseInfo.FHJADDRESS}}</dd>
                    <dt>工资卡号：</dt><dd>{{tabContents[0].baseInfo.CFGZKH}}</dd>
                  </dl>
                  <dl>
                    <dt>特长：</dt><dd>{{tabContents[0].baseInfo.CFTC}}</dd>
                    <dt>入党/团时间：</dt><dd>{{tabContents[0].baseInfo.CFRDT}}</dd>
                  </dl>
              </div>
              <div v-show="num==1">  <!-- 员工职业信息 -->
                  <h4>{{title}}</h4>
                  <dl>
                    <dt>所在部门：</dt><dd>{{ tabContents[1].FPERSONDEP }}</dd>
                    <dt>入职日期：</dt><dd>{{ tabContents[1].FENTERDATE }}</dd>
                  </dl>
                  <dl>
                    <dt>司龄：</dt><dd>{{ tabContents[1].joinYears }}</dd> <!-- 集团司龄加运营司龄 FJOINGROUPYEARS + FJOINCOMPANYYEARS -->
                    <dt>参加工作日期：</dt><dd>{{ tabContents[1].FJOBSTARTDATE }}</dd>
                  </dl>
                  <dl>
                    <dt>工龄：</dt><dd>{{ tabContents[1].FLENOFACTUALSERVICE }}</dd>
                    <dt>序列类别：</dt><dd>{{ tabContents[1].CFXLLBID }}</dd>
                  </dl>
              </div>
              <div v-show="num==2">  <!-- 教育经历 -->
                  <h4>{{title}}</h4>
                  <dl>
                    <dt>最高学历：</dt><dd>{{ tabContents[2].FDIPLOMA }}</dd>
                  </dl>
              </div>
              <div v-show="num==3">  <!-- 执业资格 -->
                  <h4>{{title}}</h4>
                  <dl>
                    <dt>执业资格名称：</dt><dd>{{ tabContents[3].CERTIFIEDCOMPETENCY}}</dd>
                  </dl>
              </div>
              <div v-show="num==4">  <!-- 员工职称信息 -->
                  <h4>{{title}}</h4>
                  <dl>
                    <dt>职称名称：</dt><dd>{{ tabContents[4].TECHNICAL }}</dd>
                  </dl>
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
                  <Select v-model="searchTelParam.dept"  clearable>
                    <Option v-for="item in privilegedDept" :value="item.id" :key="item.id">{{ item.name }}</Option>
                  </Select>
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
                  <Input v-model="searchTelParam.phone" clearable></Input>
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
            <Table border :loading="loadingAddrBook" :columns="addrBookThead" :data="addrBookData" ref="table"></Table>
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
import { getPrivilegedDept, getAddressbook } from 'api/addressbook'
import { getUserInfo } from 'api/user'
import excel from '@/assets/js/excel'
export default {
  data(){
    return {
      exportLoading: false,
      searchSalaryParam:{ group: '',empNo: '',empName: '',duration: '' }, //个人薪资搜索参数
      searchTelParam:{ dept: '', empNo: '', empName: '', phone: '' }, //通讯录搜索参数
      searchHolidayParam:{ group: '', empNo: '', empName: '', duration: '' }, //个人假期信息搜索参数
      postHolidayParam:{ startTime: '',endTime: '',longTime: '',explain: '' }, //上传假期信息
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
        { title: '序号',key: 'a', width: 80,
          render: (h, params) => {
            return h('div', {}, params.index + 1)
          }
        },
        { title: '员工编号', key: 'empNo', width: 120 },
        { title: '姓名', key: 'name', width: 120 },
        { title: '所属组织', key: 'department' },
        { title: '岗位', key: 'position' },
        { title: '手机号码', key: 'mobile', width: 130 },
        { title: '办公电话', key: 'office_phone', width: 120 },
        { title: '电子邮件', key: 'email' },
        { title: '通讯地址', key: 'address' }
      ],
      salaryData:[],//个人薪资数据
      addrBookData:[],//通讯录数据
      salaryPageParam:{ total: 0, pageSize: 10, pageNum: 1 }, //个人薪资分页参数
      telPageParam:{ total: 0, pageSize: 10, pageNum: 1 }, //通讯录分页参数
      tabs: [ '员工个人信息', '员工职业信息', '教育经历', '执业资格', '员工职称信息' ],//个人基本信息tab
      tabContents:[], //个人基本信息数据
      loadingAddrBook: false,
      num: 0,
      title:'基本信息',
      tabName:'',
      privilegedDept: [], // 通讯录搜索功能，有权限查看的部门列表
      loadSelfInfo: false // 是否加载完成个人信息
    }
  },
  created(){
    if (this.$route.params.name == 0){
      this.tabName = "个人薪资"
    }else if(this.$route.params.name == 1){
      this.tabName = "通讯录"
    }else if(this.$route.params.name == 2){
      this.tabName = "个人假期信息"
    }else{
      this.tabName = "个人基本信息"
    };
    this.switchTab(this.tabName);
  },
  methods:{
    switchTab(name){
      this.tabName = name;
      if(name=="个人薪资"){
        this.getSalary();
        this.$router.push('/layout/selfService/0');
      }else if(name=="个人基本信息"){
        this._getBaseInfo()
        this.$router.push('/layout/selfService/3');
      }else if(name=="个人假期信息"){
        this.getHolidayInfo();
        this.$router.push('/layout/selfService/2');
      }else{
        this._getPrivilegedDept()
        this._getAddressbook() //调用通讯录
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
    searchTel(){ //搜索通讯录方法
      this.telPageParam.pageNum = 1;
      this._getAddressbook()
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
    _getBaseInfo(){//获取个人基本信息方法
      getUserInfo().then(res => {
        if (res.code === 1) {
          this.tabContents = res.data
          this.loadSelfInfo = true
        }
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
    _getPrivilegedDept() { // 获取有权限查看的部门
      getPrivilegedDept().then(res => {
        if (res.code === 1) {
          this.privilegedDept = res.data
        }
      })
    },
    _getAddressbook(){ //获取通讯录数据方法
      this.loadingAddrBook = true
      getAddressbook(this.telPageParam.pageNum, this.telPageParam.pageSize, this.searchTelParam.dept, this.searchTelParam.empNo, this.searchTelParam.empName, this.searchTelParam.phone).then(res => {
        if (res.code === 1) {
          this.addrBookData = res.data.list
          this.telPageParam.total = res.data.total
          this.loadingAddrBook = false
        }
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
    changeSalaryPage (value) { //个人薪资-选择页码方法
      this.salaryPageParam.pageNum = value;
      this.getSalary();
    },
    changeSalaryPageSize(value){ //个人薪资-选择每页显示多少条数据方法
      this.salaryPageParam.pageSize = value;
      this.getSalary();
    },
    changeTelPage (value) {//通讯录-选择页码方法
      this.telPageParam.pageNum = value;
      this._getAddressbook()
    },
    changeTelPageSize(value){//通讯录-选择每页显示多少条数据方法
      this.telPageParam.pageSize = value;
      this._getAddressbook()
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
      getAddressbook(this.telPageParam.pageNum, this.telPageParam.total, this.searchTelParam.dept, this.searchTelParam.empNo, this.searchTelParam.empName, this.searchTelParam.phone).then(res => {
        if (res.code === 1) {
          if (res.data.list.length) {
            this.exportLoading = true
            const params = {
              title: ['员工编号','姓名', '所属组织','岗位','手机号码','办公电话','电子邮件','通讯地址'],
              key: ['empNo', 'name','department','position','mobile','office_phone','email','address'],
              data: res.data.list,
              autoWidth: true,
              filename: '通信录'
            }
            excel.export_array_to_excel(params)
            this.exportLoading = false
          } else {
            this.$Message.info('表格数据不能为空！')
          }
        }
      })
    },
    tab(index) { // 个人基本信息选项卡方法
      this.num = index;
      this.title = this.tabs[index]
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
  width: 150px;
  color: #909399;
}
dd{
  width: 300px;
}
dl{
  line-height: 3;
}
</style>
