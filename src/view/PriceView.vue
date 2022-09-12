<template>
  <div class="price-container">
    <!-- 上半部分 -->
    <div class="top-con">
      <div class="top-left">
        <!-- 左边 --><!-- 地图 -->
        <MapVue />
      </div>
      <div class="top-right">
        <!-- 右边 -->
        <PriceVue />
      </div>
    </div>
    <!-- 下面部分 -->
    <div class="bottom-con">
      <!-- 其他 -->

      <!-- 预测 -->
      <div class="forcast">
        <!-- <ForecastVue /> -->
      </div>
      <div class="bottom-lef">
        <RiverVue />
      </div>
      <div class="bottom-center">
        <MapleftVue />
      </div>
      <div class="bottom-right">
        <autoTextVue />
      </div>
      <!-- <div class="other"></div> -->
    </div>
  </div>
</template>


<script>
// import Map from "@/view/Map.vue";
import MapVue from "@/components/Map.vue";
import MapleftVue from "@/view/Mapleft.vue";
import ForecastVue from "@/view/Forecast.vue";
import PriceVue from "@/view/Price.vue";
import autoTextVue from "@/view/autoText.vue";
import HeadNavVue from "@/components/HeadNav.vue";
import RiverVue from "./River.vue";
export default {
  name: "Layout",
  data() {
    return {
      catename: "城市碳生产率",
    };
  },
  components: {
    MapVue,
    RiverVue,
    // Map,
    MapleftVue,
    ForecastVue,
    PriceVue,
    autoTextVue,
    HeadNavVue,
  },
};
</script>

<style lang="less" scoped>
.top-con {
  display: flex;
  .top-left {
    flex: 1.8;
  }
  .top-right {
    flex: 1;
    transform: translateY(80px);
  }
}
.bottom-con {
  display: flex;

  .forcast,
  .bottom-left,
  .bottom-center,
  .bottom-right {
    float: left;
    height: 435px;
  }
  // .forcast {
  //   // transform: translate(-200px, -300px);
  // }
}
</style>
