---
title: TMX-IOT核心SaaS系统
---

# 关于 TMX-IOT核心SaaS系统

TMX-IOT核心SaaS系统 是 ThingsMatrix 的一个核心Saas系统

> IOT物联网设备管理系统，主要通过对设备、平台和连接的深度整合，实现对企业用户设备资产的管理、数据分析、设备固件远程升级等服务，达到提升用户的业务流程的目的。

# 预览

<el-tabs tab-position="left" style="height: 380px" class="demo-tabs">
  <el-tab-pane label="Access" height="360px">
    <h3>Access 是 IOT 项目的设备管理系统</h3>
    <p>该项目主要功能是管理用户的设备，包括设备跟踪、定位、信息管理、命令管理、事件管理、日志跟踪等</p>
    <a href="https://sso.thingsmatrix.io/">地址</a>
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="item in imgList1" :key="item">
        <img :src="item" >
      </el-carousel-item>
    </el-carousel>
  </el-tab-pane>
  <el-tab-pane label="Insight">
    <h3>Insight 是 IOT 项目的数据管理系统</h3>
    <p>该项目主要功能是管理设备数据，包括数据统计、数据可视化、数据流配置、自定义数据处理函数等</p>
    <a href="https://sso.thingsmatrix.io/">地址</a>
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="item in imgList2" :key="item">
        <img :src="item" >
      </el-carousel-item>
    </el-carousel>
  </el-tab-pane>
  <el-tab-pane label="Connect">
    <h3>Connect 是 IOT 项目的SIM卡管理系统</h3>
    <p>该项目主要功能是管理用户的SIM卡，包括SIM卡统计、SIM流量统计、信息管理、分组管理、流量可视化等</p>
    <a href="https://sso.thingsmatrix.io/">地址</a>
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="item in imgList3" :key="item">
        <img :src="item" >
      </el-carousel-item>
    </el-carousel>
  </el-tab-pane>
  <el-tab-pane label="Upgrade">
    <h3>Upgrade 是 IOT 项目的设备升级系统</h3>
    <p>该项目主要功能是设备升级管理，包括设备升级统计、升级任务管理等</p>
    <a href="https://sso.thingsmatrix.io/">地址</a>
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="item in imgList4" :key="item">
        <img :src="item" >
      </el-carousel-item>
    </el-carousel>
  </el-tab-pane>
  <el-tab-pane label="官网">
    <h3>官网 是 IOT 项目的官网</h3>
    <p>该项目主要功能是向客户展示、介绍公司业务，同时提供项目介绍文档、API文档等</p>
    <a href="https://www.thingsmatrix.cn">官网</a>
    <br/>
    <a href="https://docs.thingsmatrix.io">文档</a>
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="item in imgList5" :key="item">
        <img :src="item" >
      </el-carousel-item>
    </el-carousel>
  </el-tab-pane>
</el-tabs>
<img src="/project/公司项目/iot/access/1.png">

<script>
  export default {
    data() {
      return {
        imgList1:[],
        imgList2:[],
        imgList3:[],
        imgList4:[],
        imgList5:[],
      }
    },
    mounted(){
      for(var i = 1 ;i < 7 ;i++){
        this.imgList1.push('/vue-press/project/公司项目/iot/access/'+i+'.png')
      }
      for(var i = 1 ;i < 8 ;i++){
        this.imgList2.push('/vue-press/project/公司项目/iot/insight/'+i+'.png')
      }
      for(var i = 1 ;i < 6 ;i++){
        this.imgList3.push('/vue-press/project/公司项目/iot/cmp/'+i+'.png')
      }
      for(var i = 1 ;i < 6 ;i++){
        this.imgList4.push('/vue-press/project/公司项目/iot/fota/'+i+'.png')
      }
      for(var i = 1 ;i < 6 ;i++){
        this.imgList5.push('/vue-press/project/公司项目/iot/home/'+i+'.png')
      }
    }
  }
</script>