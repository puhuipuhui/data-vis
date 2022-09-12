<template>
  <div class="container">
    <div id="scatter"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      year: "2018",
      allData: "",
      eachYearData: "",
    };
  },
  created() {
    this.$bus.$on("productTime", (val) => {
      this.year = val;
    });
  },
  mounted() {
    this.scatterChart();
  },
  methods: {
    async scatterChart() {
      this.allData = await this.getData();
      let data = this.allData[this.year];
      console.log(data);
      var chartDom = document.getElementById("scatter");
      var myChart = this.$echarts.init(chartDom);

      var option;

      var sizeValue = "57%";
      var symbolSize = 2.5;
      option = {
        title: {
          text: "三维点阵图",
          left: "8%",
          top: "5%",
          textStyle: {
            color: "#EEDD78",
            fontSize: 20,
          },
        },
        tooltip: {},
        grid3D: {
          width: "300",
          left: "20",
          viewControl: {
            alpha: 15,
            beta: 40,
            autoRotate: true,
            zoomSensitivity: 0,
            autoRotateAfterStill: 5,
            distance: 250,
          },
        },

        xAxis3D: {},
        yAxis3D: {},
        zAxis3D: {},
        grid: [
          { left: "400", width: "160", bottom: sizeValue },
          { left: "450", width: "720", top: sizeValue },
          { left: "700", width: "160", bottom: sizeValue },
          { left: "1000", width: "160", bottom: sizeValue },
        ],
        xAxis: [
          {
            type: "value",
            gridIndex: 0,
            name: "GDP",
            label: {
              color: "#fff",
            },
            axisLabel: { rotate: 50, interval: 0 },
            splitLine: {
              //x网格样式
              show: true,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
                type: "dashed",
              },
            },
          },
          {
            type: "category",
            gridIndex: 1,
            name: "Country",
            boundaryGap: false,
            axisLabel: { rotate: 50, interval: 5 },
            splitLine: {
              //x网格样式
              show: true,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
                type: "dashed",
              },
            },
          },
          {
            type: "value",
            gridIndex: 2,
            name: "GDP",
            axisLabel: { rotate: 50, interval: 0 },
            splitLine: {
              //x网格样式
              show: true,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
                type: "dashed",
              },
            },
          },
          {
            type: "value",
            gridIndex: 3,
            name: "Carbon Productivity",
            axisLabel: { rotate: 50, interval: 0 },
            splitLine: {
              //x网格样式
              show: true,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
                type: "dashed",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            gridIndex: 0,
            name: "Carbon Productivity",
            splitLine: {
              //x网格样式
              show: true,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
                type: "dashed",
              },
            },
          },
          {
            type: "value",
            gridIndex: 1,
            name: "GDP",
            splitLine: {
              //x网格样式
              show: true,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
                type: "dashed",
              },
            },
          },
          {
            type: "value",
            gridIndex: 2,
            name: "Carbon Emission",
            splitLine: {
              //x网格样式
              show: true,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
                type: "dashed",
              },
            },
          },
          {
            type: "value",
            gridIndex: 3,
            name: "Carbon Emission",
            splitLine: {
              //x网格样式
              show: true,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
                type: "dashed",
              },
            },
          },
        ],
        dataset: {
          dimensions: [
            "GDP",
            "Carbon Productivity",
            "Carbon Emission",
            "Country",
            { name: "Year", type: "ordinal" },
          ],
          source: data,
        },
        series: [
          {
            type: "scatter3D",
            symbolSize: 10,
            encode: {
              x: "Carbon Emission",
              y: "Carbon Productivity",
              z: "GDP",
              tooltip: [0, 1, 2, 3, 4],
            },
          },
          {
            type: "scatter",
            symbolSize: 3,
            xAxisIndex: 0,
            yAxisIndex: 0,
            encode: {
              x: "GDP",
              y: "Carbon Productivity",
              tooltip: [0, 1, 2, 3, 4],
            },
          },
          {
            type: "scatter",
            symbolSize: 5,
            xAxisIndex: 1,
            yAxisIndex: 1,
            encode: {
              x: "Country",
              y: "GDP",
              tooltip: [0, 1, 2, 3, 4],
            },
          },
          {
            type: "scatter",
            symbolSize: symbolSize,
            xAxisIndex: 2,
            yAxisIndex: 2,
            encode: {
              x: "GDP",
              y: "Carbon Emission",
              tooltip: [0, 1, 2, 3, 4],
            },
          },
          {
            type: "scatter",
            symbolSize: symbolSize,
            xAxisIndex: 3,
            yAxisIndex: 3,
            encode: {
              x: "Carbon Productivity",
              y: "Carbon Emission",
              tooltip: [0, 1, 2, 3, 4],
            },
          },
        ],
      };
      //   myChart.resize({
      //     width: 500,
      //     height: 600
      // })
      myChart.setOption(option);

      option && myChart.setOption(option);
    },
    async getData() {
      let tempdata = await axios
        .get("http://localhost:5500/src/assets/productJson/scatter3D.json")
        .then((res) => {
          return res.data;
        });
      return tempdata;
    },
  },
  watch: {
    year: function () {
      this.scatterChart();
    },
  },
};
</script>

<style lang="less" scoped>
#scatter {
  width: 1310px;
  height: 500px;
}
</style>
