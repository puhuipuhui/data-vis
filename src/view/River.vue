<template>
  <div class="rivervue container">
    <div id="river"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allYearData: "",
      year: "2020",
    };
  },
  methods: {
    async Riverdata() {
      var chartDom = document.getElementById("river");
      var myChart = this.$echarts.init(chartDom);
      this.allYearData = await this.getData();
      console.log("echarts");

      let option = {
        title: {
          text: "交易总额分布情况",
          left: "5%",
          top: "5%",
          textStyle: {
            color: "#EEDD78",
            fontSize: 20,
          },
        },
        // backgroundColor: "#000",
        color: [
          "#0667AB",
          "#009FE3",
          "#009394",
          "#769A2F",
          "#AEBD14",
          "#F28D30",
          "#F54F4A",
        ],

        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
            lineStyle: {
              color: "rgba(255,255,0,0.8)",
              width: 1,
              type: "solid",
            },
          },
        },

        legend: {
          bottom: "5%",
          textStyle: {
            color: "rgba(255, 255, 255, 0.4)",
          },
          data: ["湖北", "天津", "深圳", "上海", "广东", "福建", "重庆"],
        },

        singleAxis: {
          top: 90,
          bottom: 90,
          left: 50,
          right: 50,
          axisLine: {
            lineStyle: {
              color: "#999",
            },
          },
          axisTick: {},
          axisLabel: {},
          type: "time",
          axisPointer: {
            animation: true,
            label: {
              show: true,
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              opacity: 0.5,
            },
          },
        },

        series: [
          {
            type: "themeRiver",
            label: {
              normal: {
                show: false,
                position: "left",
              },
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 20,
                shadowColor: "rgba(0, 0, 0, 0.8)",
              },
            },

            data: this.allYearData[this.year],
          },
        ],
      };

      myChart.setOption(option);
    },
    async getData() {
      let tempData = await this.$axios
        .get("http://localhost:5500/src/assets/priceCount.json")
        .then((res) => {
          console.log(res.data);
          return res.data;
        });
      return tempData;
    },
  },
  mounted() {
    this.Riverdata();
  },
  created() {
    this.$bus.$on("sharePriceTime", (val) => {
      let map = {
        2020: "2020",
        2019: "2019",
      };
      this.year = map[val];
      console.log(this.year);
    });
  },
  watch: {
    year: function () {
      this.Riverdata();
    },
  },
};
</script>

<style lang="less" scoped>
#river {
  width: 600px;
  height: 400px;
}
</style>

</style>