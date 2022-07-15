---
title: 包活干SaaS系统
---

# 关于 包活干SaaS系统

包活干汽车服务共享平台

> 包活干业务平台提供了全流程的线上化展业工具，让服务商可便捷的分配安装人员、跟进订单安装情况，降低服务商日常管理难度，提高管理质量。
该项目的前端模块由本人主导并参与开发。共享平台主要包含一个PC端综合管理系统及4个C端小程序，针对的服务对象有汽车服务商、服务技工，商品供应商，商业运营人员。

# 技术框架
> vue全家桶 + ElementUi + echarts + axios

> webpacl + mockjs 

> 微信小程序 + weUi + 小程序UI
# 预览

<el-tabs tab-position="left" style="height: 380px" class="demo-tabs">
  <el-tab-pane label="包活干汽车服务共享平台" height="360px">
    <h3>包活干汽车服务共享平台</h3>
    <p>该项目主要是一个PC端综合管理系统，管理汽车服务订单、人员、设备等。</p>
    <p>该项目针对的服务对象有汽车服务商、商品供应商、商业运营人员。</p>
    <a href="http://www.baohuogan.com.cn/">地址</a>
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="item in imgList1" :key="item">
        <img :src="item" >
      </el-carousel-item>
    </el-carousel>
  </el-tab-pane>
</el-tabs>

<script>
  export default {
    data() {
      return {
        imgList1:[],
      }
    },
    mounted(){
      for(var i = 1 ;i < 5 ;i++){
        this.imgList1.push('/vue-press/project/公司项目/bhg/pc/'+i+'.png')
      }
    }
  }
</script>