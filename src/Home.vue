<template>
  <div id="home-container">
    <!-- 上部分 -->
    <HeadNavVue />
    <router-view></router-view>
    <!-- <PriceViewVue /> -->
  </div>
</template>

<script>
// import PriceViewVue from "@/view/PriceView.vue";
import HeadNavVue from "@/components/HeadNav.vue";
export default {
  name: "Layout",
  components: {
    HeadNavVue,
    // PriceViewVue,
  },
};
</script>

<style lang="less">
</style>
