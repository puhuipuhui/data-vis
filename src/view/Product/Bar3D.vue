<template>
  <div class="bar3d">
    <div id="bar3d" style="width: 500px; height: 400px"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      allData: undefined,
      cityName: "",
      Data: "",
      hours: "",
      key1: "data",
      key2: "hours",
    };
  },
  methods: {
    async bar3dchart() {
      await this.getbar3dData();
      // console.log("调用了echarts");
      // var chartDom = document.getElementsByClassName("main");
      var chartDom = document.getElementById("bar3d");
      var myChart = this.$echarts.init(chartDom);
      // var myChart = this.$echarts.init(chartDom);

      var option;
      var hours = this.hours;
      // prettier-ignore
      var days = ["2018", "2017", "2016","2015", "2014", "2013", "2012"]
      // prettier-ignore
      var data = this.Data;
      option = {
        title: {
          text: "时空演变特征",
          left: "5%",
          top: "5%",
          textStyle: {
            color: "#EEDD78",
            fontSize: 20,
          },
        },
        tooltip: {},
        visualMap: {
          max: 20,
          inRange: {
            color: [
              "#313695",
              "#4575b4",
              "#74add1",
              "#abd9e9",
              "#e0f3f8",
              "#ffffbf",
              "#fee090",
              "#fdae61",
              "#f46d43",
              "#d73027",
              "#a50026",
            ],
          },
          right: "-10",
          bottom: "10",
        },
        xAxis3D: {
          type: "category",
          data: hours,
          axisLabel: {
            interval: 0,
            textStyle: {
              color: "#ffffff",
            },
          },
        },
        yAxis3D: {
          type: "category",
          data: days,
          axisLabel: {
            textStyle: {
              color: "#ffffff",
            },
          },
        },
        zAxis3D: {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#ffffff",
            },
          },
        },
        // grid3D: {
        //   boxWidth: 200,
        //   boxDepth: 80,
        //   light: {
        //     main: {
        //       intensity: 1.2,
        //     },
        //     ambient: {
        //       intensity: 0.3,
        //     },
        //   },
        // },
        grid3D: {
          // top: "1%",
          boxWidth: 200,
          boxDepth: 100,
          top: -50,
          right: -40,
          light: {
            main: {
              intensity: 1.2,
            },
            ambient: {
              intensity: 1,
            },
          },
          viewControl: {
            alpha: 15,
            beta: 40,
            autoRotate: true,
            zoomSensitivity: 0,
            autoRotateAfterStill: 5,
            distance: 250,
          },
        },
        series: [
          {
            type: "bar3D",
            data: data.map(function (item) {
              return {
                value: [item[0], item[1], item[2]],
              };
            }),
            shading: "color",
            label: {
              show: false,
              fontSize: 16,
              borderWidth: 1,
            },
            itemStyle: {
              opacity: 0.4,
            },
            emphasis: {
              label: {
                fontSize: 20,
                color: "#fff",
              },
              itemStyle: {
                color: "#900",
              },
            },
          },
        ],
      };
      myChart.resize({
        width: "500px",
        height: "450px",
      });
      option && myChart.setOption(option);
    },
    async getbar3dData() {
      let tempdata = await axios
        .get("http://localhost:5500/src/assets/productJson/bar3d.json")
        .then((res) => {
          // console.log("res:", res.data);
          console.log("axios请求数据成功");
          return res.data;
        });
      this.allData = tempdata;
      if (this.Data == "") {
        this.Data = this.allData["全国"][this.key1];
        this.hours = this.allData["全国"][this.key2];
      }
    },
  },
  created() {
    this.$bus.$on("productMap", (val) => {
      console.log("拿到了:", val);
      let map = {
        四川: "四川省",
        河南: "河南省",
      };
      this.cityName = map[val];
      this.Data = this.allData[this.cityName][this.key1];
      this.hours = this.allData[this.cityName][this.key2];

      // console.log("map[val]:", map[val]);
      // console.log("this.allData[this.cityName]:", this.allData[this.cityName]);
    });
  },
  mounted() {
    this.bar3dchart();
  },
  watch: {
    cityName: function () {
      this.bar3dchart();
    },
  },
};
</script>

<style lang="less" scoped>
#bar3d {
  position: absolute;
  top: 90px;
  right: 60px;
}
</style>