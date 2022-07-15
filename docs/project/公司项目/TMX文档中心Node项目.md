---
title: TMX文档中心Node项目
---

# 关于 TMX文档中心Node项目

TMX文档中心Node项目 是 ThingsMatrix 的一个文档中心项目

> TMX文档中心Node项目，主要是介绍TMX IOT SAAS及移动端项目，及使用配置方法，同时提供了接口API文档介绍，方便用户使用。

> Node上传项目，主要是为了方便产品修改、提交、打包、部署文档中心，从而减少对开发的依赖。

# 技术框架
> node + koa + koa-router + simpleGit(用于 git 的操作 add\commit\push 等)

> vue全家桶 + iview + vuepress
# 预览

<el-tabs tab-position="left" style="height: 380px" class="demo-tabs">
  <el-tab-pane label="文档中心" height="360px">
    <h3>TMX文档中心Node项目</h3>
    <p>该项目主要是介绍TMX IOT SAAS及移动端项目，及使用配置方法，同时提供了接口API文档介绍，方便用户使用。</p>
    <a href="https://docs.thingsmatrix.io//">地址</a>
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="item in imgList1" :key="item">
        <img :src="item" >
      </el-carousel-item>
    </el-carousel>
  </el-tab-pane>
  <el-tab-pane label="Node上传项目">
    <h3>Node上传项目</h3>
    <p>主要是为了方便产品修改、提交、打包、部署文档中心，从而减少对开发的依赖。</p>
    <a href="">地址</a>
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="item in imgList2" :key="item">
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
        imgList2:[],
      }
    },
    mounted(){
      for(var i = 3 ;i < 7 ;i++){
        this.imgList1.push('/vue-press/project/公司项目/node/'+i+'.png')
      }
      for(var i = 1 ;i < 3 ;i++){
        this.imgList2.push('/vue-press/project/公司项目/node/'+i+'.png')
      }
    }
  }
</script>