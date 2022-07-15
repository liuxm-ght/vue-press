### 个人介绍

> 90 后

> 程序员

> 摄影 电影 


<el-row :gutter="20">
  <el-col :span="8">
    <el-image
      style="width: 100px; height: 100px"
      :src="url"
      :preview-src-list="srcList"
      :initial-index="1"
      fit="cover"
    />
  </el-col>
</el-row>

<script lang="ts" setup>
const url =
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const srcList = [
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F01%2F7e%2Fdd%2F017eddef7a8e32ad18103d5adb0a6720.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658483804&t=a35cc2251e26b7fe1672c259890f0ee5',
]
</script>
