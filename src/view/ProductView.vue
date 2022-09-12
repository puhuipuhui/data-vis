<template>
  <div class="product-container">
    <ForcastModelVue />
    <div class="top-con">
      <div class="top-left">
        <!-- 预测模块 -->
      </div>
      <!-- 地图 -->
      <div class="top-center">
        <ProductMap />
      </div>
      <div class="top-right">
        <!-- 右边 -->
        <Bar3DVue />
      </div>
    </div>
    <div class="bottom-con">
      <div class="bottom-center"><Scatter3DVue /></div>
      <div class="bottom-right"><HeadMapVue /></div>
      <div style="clear: both"></div>
      <!-- <BoxplotVue /> -->
    </div>
  </div>
</template>

<script>
// import MapVue from "@/components/Map.vue";
import ProductMap from "@/view/Product/ProductMap.vue";
import Bar3DVue from "./Product/Bar3D.vue";
import HeadMapVue from "./Product/HeadMap.vue";
import ForcastModelVue from "./Product/ForcastModel.vue";
// import BoxplotVue from "./Product/Boxplot.vue";
import Scatter3DVue from "./Product/Scatter3D.vue";
export default {
  components: {
    ProductMap,
    Bar3DVue,
    HeadMapVue,
    ForcastModelVue,
    Scatter3DVue,
    // BoxplotVue,
  },
};
</script>

<style lang="less" scoped>
.top-con {
  display: flex;
  .top-left {
    flex: 1;
  }
  .top-center {
    flex: 3;
  }
  .top-right {
    flex: 1;
  }
}
.bottom-left,
.bottom-center,
.bottom-right {
  float: left;
}
</style>