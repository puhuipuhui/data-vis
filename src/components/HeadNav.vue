<template>
  <div class="header-con">
    <div class="icon">
      <!-- 实验室图标 -->
      <img :src="icondata" alt="" width="60px" />
      <span>可视化与人机交互实验室</span>
    </div>
    <div class="category1">
      <!-- 可视化主题内容导航 -->
      <router-link to="/priceView">碳交易市场</router-link>
    </div>
    <div class="category2">
      <router-link to="/productView">碳生产率</router-link>
    </div>
    <!-- 系统题目 -->
    <div class="title">碳中和可视分析辅助系统</div>
    <div style="clear: both"></div>
  </div>
</template>

<script>
import pic from "@/assets/image/1.png";

export default {
  data() {
    return {
      icondata: pic,
    };
  },
};
</script>

<style lang="less" scoped>
.header-con {
  height: 60px;

  .icon {
    float: right;
    margin-right: 100px;
    img,
    span {
      vertical-align: middle;
    }
    // span {
    // }
  }
  .category2,
  .category1 {
    color: #fff;
    margin-left: 20px;
    background-color: rgb(16, 48, 71);
  }
  .category2:hover,
  .category1:hover {
    background-color: rgb(5, 99, 167);
  }
  .category1 {
    float: left;
    font-size: 18px;
    width: 120px;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }
  .category2 {
    float: left;
    font-size: 18px;
    width: 120px;
    text-align: center;
    line-height: 40px;
  }
  .title {
    float: left;
    font-size: 30px;
    // margin: auto auto;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    line-height: 60px;
  }
}
</style>