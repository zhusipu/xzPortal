<template>
  <div class="pageBox">
    <div class="breadCrub">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem to="MsgCenter">消息中心</BreadcrumbItem>
        <BreadcrumbItem >{{ detail.messageName }}</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div v-if="loadDetail === true" class="pageDetail">
      <h1>{{ detail.messageName }}</h1>
      <div class="pageInfos">
        <span>发布时间：{{ detail.postDt }}</span>
        <span>来源公司：{{ detail.comp }}</span>
        <span>来源部门：{{ detail.dept }}</span>
        <span>发布人：{{ detail.empName }}</span>
      </div>
      <div class="pageDetailMain" v-html="detail.messageContent">
      </div>
      <Spin size="large" fix v-if="spinShow"></Spin>
    </div>
  </div>
</template>

<script>
import { getMessageDetail } from 'api/message'
export default {
  data(){
    return {
      id: '',
      detail: {},
      spinShow: false,
      loadDetail: false
    }
  },
  created(){
    this.id = this.$route.params.id
    this._getDetail()
  },
  methods:{
    _getDetail() {
      this.spinShow = true
      getMessageDetail(this.id).then(res => {
        if (res.code === 1) {
          this.detail = res.data
          this.loadDetail = true
        } else {
          this.$message.error(res.msg)
        }
        this.spinShow = false
      })
    }
  }
}
</script>

<style scoped>

</style>
