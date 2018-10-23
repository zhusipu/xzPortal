<template>
  <div class="pageBox">
    <div class="breadCrub">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem to="newsCenter">新闻中心</BreadcrumbItem>
        <BreadcrumbItem >{{ detail.title }}</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="pageDetail">
      <h1>{{ detail.title }}</h1>
      <div class="pageInfos">
        <span>发布时间：{{ detail.createDate }}</span>
        <span>来源公司：{{ detail.comp }}</span>
        <span>来源部门：{{ detail.dept }}</span>
        <span>发布人：{{ detail.creator }}</span>
      </div>
      <div class="pageDetailMain" v-html="detail.content">
      </div>
    </div>
  </div>
</template>

<script>
import { getNewsDetail } from 'api/news'
export default {
  data(){
    return {
      id: null,
      detail: {
        title: '',
        content: '',
        creator: '',
        createDate: '',
        dept: '',
        comp: ''
      }
    }
  },
  created(){
    this.id = this.$route.params.id
    this._getNewsDetail()
  },
  methods:{
    _getNewsDetail() {
      if (this.id === null || this.id === undefined) {
        this.$message.error('参数错误')
        return false
      }
      getNewsDetail(this.id).then(res => {
        if (res.code === 1) {
          this.detail = res.data
        } else {
          this.$message.error(res.msg)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
