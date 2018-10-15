<template>
  <div class="pageBox">
    <div class="breadCrub">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>员工自助</BreadcrumbItem>
        <BreadcrumbItem to="/layout/selfService">个人薪资</BreadcrumbItem>
        <BreadcrumbItem>薪资详情2</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="pageareMain">
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
            <FormItem label="姓 名：">
              <Input v-model="searchData.empName" clearable></Input>
            </FormItem>
            </Col>
          </Row>
          <Row :gutter="64">
            <Col span="8">
            <FormItem label="期 间：">
              <DatePicker :v-model="searchData.duration" type="daterange" clearable split-panels placeholder="选择时间段"></DatePicker>
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
      <div class="project">
        <div class="projectTitle">工资项目</div>
        <div class="projectDetail">
          <div class="proDetLeft">
            <dl>
              <dt>BIC职务工资：</dt>
              <dd>2000.00</dd>
              <dt>BIC职务补贴：</dt>
              <dd>2000.00</dd>
              <dt>BIC工龄工资：</dt>
              <dd>2000.00</dd>
              <dt>BIC专业补贴：</dt>
              <dd>2000.00</dd>
            </dl>
            <dl>
              <dt>BIC特殊补贴：</dt>
              <dd>2000.00</dd>
              <dt>BIC其他收款：</dt>
              <dd>2000.00</dd>
              <dt>BIC提成工资：</dt>
              <dd>2000.00</dd>
              <dt>BIC加班费：</dt>
              <dd>2000.00</dd>
            </dl>
            <dl>
              <dt>BIC年终奖：</dt>
              <dd>2000.00</dd>
              <dt>BIC补偿金：</dt>
              <dd>2000.00</dd>
              <dt>BIC养老金：</dt>
              <dd>2000.00</dd>
              <dt>BIC失业保险：</dt>
              <dd>2000.00</dd>
            </dl>
            <dl>
              <dt>BIC大额医疗保险：</dt>
              <dd>200.00</dd>
              <dt>BIC住房公积金：</dt>
              <dd>2000.00</dd>
              <dt>BIC年金：</dt>
              <dd>2000.00</dd>
              <dt>BIC计税项目：</dt>
              <dd>2000.00</dd>
            </dl>
          </div>
          <div class="proDetRight">
            <dl>
              <dt>BIC综合补贴：</dt>
              <dd>2000.00</dd>
            </dl>
            <dl>
              <dt>BIC出差补贴：</dt>
              <dd>2000.00</dd>
            </dl>
            <dl>
              <dt>BIC医疗保险：</dt>
              <dd>200.00</dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="project">
        <div class="projectTitle">扣款项目</div>
        <div class="projectDetail">
          <div class="proDetLeft">
            <dl>
              <dt>BIC迟到扣款：</dt>
              <dd>2000.00</dd>
              <dt>BIC工资扣除：</dt>
              <dd>2000.00</dd>
              <dt>BIC其他工资扣除：</dt>
              <dd>2000.00</dd>
              <dt>BIC其他福利扣除：</dt>
              <dd>2000.00</dd>
            </dl>
            <dl>
              <dt>BIC代扣税：</dt>
              <dd>2000.00</dd>
              <dt>BIC奖金代扣税：</dt>
              <dd>2000.00</dd>
            </dl>
          </div>
          <div class="proDetRight">
            <dl>
              <dt>BIC其他扣款：</dt>
              <dd>2000.00</dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="project">
        <div class="projectTitle">其他项目</div>
        <div class="projectDetail">
          <div class="proDetLeft">
            <dl>
              <dt>应纳税所得额：</dt>
              <dd>2000.00</dd>
            </dl>
          </div>
          <div class="proDetRight">

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
            searchData:{group:"",empNo:"",empName:"",duration:""}
          }
        }
    }
</script>

<style scoped>
  .searchBox{
    border-bottom: 1px solid #ddd;
  }
  .project{
    padding: 25px 0;
    border-bottom: 1px solid #E1E1E1;
  }
  .project:last-child{
    border: none;
  }
  .projectTitle{
    color: #444;
    position: relative;
    padding-left: 15px;
    margin-bottom: 10px;
  }
  .projectTitle:before{
    content: " ";
    position: absolute;
    width: 4px;
    top: 0;
    bottom: 0;
    left:0px;
    background-color: #A93439;
  }
  .projectDetail{
    display: flex;
  }
  .proDetRight{
    line-height: 2;
    padding: 20px 0;
  }
  .proDetRight dl{width:230px;}
  dt,dd{ display:inline-block; }
  .proDetLeft dl{
    line-height: 2.2;
  }
  dt{
    color:#909399;
    width: 130px;
  }
  dd{
    margin-right: 10px;
    width: 80px;
  }

</style>
