
<template>
  <div class="pricemap">
    <div id="graph" style="height: 500px"></div>
  </div>
</template>

<script>
import $ from "jquery";

// import '@/util/js/china.js'
export default {
  data() {
    return {
      city: "北京",
    };
  },
  methods: {
    drawgraphChart() {
      var that = this;
      var chartDom = document.getElementById("graph");
      var myChart = this.$echarts.init(chartDom);
      // myChart.showLoading();
      var uploadedDataURL = "https://geojson.cn/api/data/china.json";

      var colorIndex = 0;
      $(function () {
        //城市 经纬度
        var geoCoordMap = {
          北京: [116.4551, 40.2539],
          天津: [117.4219, 39.4189],
          深圳: [114.031, 22.3243],
          上海: [121.4648, 31.2891],
          福建: [119.4543, 25.9222],
          湖北: [114.3896, 30.6628],
          广东: [113.12244, 23.009505],
          重庆: [108.384366, 30.439702],
        };
        //年份数组
        var voltageLevel = [
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
        ];
        var mapData = [[], [], [], [], [], [], [], []];
        var d2020 = {
          北京: 113.9568,
          天津: 520.2671,
          深圳: 255.1302,
          福建: 44.5902,
          湖北: 1421.6219,
          广东: 1948.8561,
          重庆: 21.9734,
          上海: 214.7202,
        };
        var d2019 = {
          北京: 311.2079,
          天津: 4.3783,
          深圳: 100.7849,
          福建: 386.5264,
          湖北: 598.196,
          广东: 1359.2624,
          重庆: 67.9578,
          上海: 270.4625,
        };
        var d2018 = {
          北京: 306.3046,
          天津: 0.074,
          深圳: 134.0616,
          福建: 209.9954,
          湖北: 890.7597,
          广东: 987.4967,
          重庆: 26.0625,
          上海: 235.6961,
        };
        var d2017 = {
          北京: 238.346,
          天津: 116.099,
          深圳: 691.3098,
          福建: 206.8943,
          湖北: 1487.0121,
          广东: 1236.7779,
          重庆: 678.2049,
          上海: 245.6703,
        };
        var d2016 = {
          北京: 241.918,
          天津: 31.0471,
          深圳: 1102.0702,
          福建: 0,
          湖北: 1111.8122,
          广东: 1396.7763,
          重庆: 46.021,
          上海: 415.5717,
        };

        var d2015 = {
          北京: 125.8748,
          天津: 52.6725,
          深圳: 460.0903,
          福建: 0,
          湖北: 1394.1508,
          广东: 465.6275,
          重庆: 12.7583,
          上海: 168.954,
        };
        var d2014 = {
          北京: 105.6212,
          天津: 98.992,
          深圳: 284.7124,
          湖北: 898.1413,
          广东: 105.5538,
          重庆: 14.5,
          上海: 171.076,
        };
        var d2013 = {
          北京: 0.26,
          天津: 1.72,
          深圳: 17.6216,
          湖北: 0,
          广东: 12.0129,
          重庆: 33.4,
          上海: 0.326,
        };

        var colors = [
          [
            "#0667AB",
            "#009FE3",
            "#009394",
            "#769A2F",
            "#AEBD14",
            "#F28D30",
            "#009394",
            "#F54F4A",
          ],
        ];

        var categoryData = [];
        var barData = [];
        //geoCoordMap: 城市的经纬度
        for (var key in geoCoordMap) {
          categoryData.push(key);
          //categoryData :['北京', '天津', '深圳', '上海', '福建', '湖北', '广东', '重庆']
          //每年放在一起mapData 一共8年
          mapData[0].push({
            year: "2013",
            name: key,
            value: d2013[key],
          });
          mapData[1].push({
            year: "2014",
            name: key,
            value: d2014[key],
          });
          mapData[2].push({
            year: "2015",
            name: key,
            value: d2015[key],
          });
          mapData[3].push({
            year: "2016",
            name: key,
            value: d2016[key],
          });
          mapData[4].push({
            year: "2017",
            name: key,
            value: d2017[key],
          });
          mapData[5].push({
            year: "2018",
            name: key,
            value: d2018[key],
          });
          mapData[6].push({
            year: "2019",
            name: key,
            value: d2019[key],
          });
          mapData[7].push({
            year: "2020",
            name: key,
            value: d2020[key],
          });
        }

        // barData:
        // 0: (8) [50, 51.6, 53.1, 42, undefined, 43.2, 27, 33.4]
        // 1: (8) [50, 51.6, 898.1413, 42, undefined, 43.2, 27, 14.5]
        // 2: (8) [50, 51.6, 53.1, 42, undefined, 43.2, 27, 12.7583]
        // 3: (8) [50, 51.6, 53.1, 42, undefined, 43.2, 27, 46.021]
        // 4: (8) [50, 51.6, 53.1, 42, 206.8943, 43.2, 27, 678.2049]
        // 5: (8) [50, 51.6, 53.1, 42, 209.9954, 43.2, 27, 26.0625]
        // 6: (8) [50, 51.6, 53.1, 42, 386.5264, 43.2, 27, 67.9578]
        // 7: (8) [50, 51.6, 53.1, 42, 44.5902, 43.2, 27, 21.9734]
        // 存储 直方图value
        for (var i = 0; i < mapData.length; i++) {
          barData.push([]);
          for (var j = 0; j < mapData[i].length; j++) {
            barData[i].push(mapData[i][j].value);
          }
        }
        // uploadedDataURL 地图矢量数据
        $.getJSON(uploadedDataURL, function (geoJson) {
          that.$echarts.registerMap("china", geoJson);
          //返回对应地区的数据:
          // name: "北京"
          // value: (3) [116.4551, 40.2539, 50]
          var convertData = function (data) {
            //data  :{year: '2013', name: '北京', value: 50},{year: '2013', name: '天津', value: 51.6}...{year: '2013', name: '重庆', value: 51.6}
            var res = [];
            //
            for (var i = 0; i < data.length; i++) {
              //data[i].name城市 对应经纬度： geoCoord
              var geoCoord = geoCoordMap[data[i].name];
              if (geoCoord) {
                data[i].value = data[i].value / 3;
                res.push({
                  name: data[i].name,
                  value: geoCoord.concat(data[i].value),
                });
              }
            }
            return res;
          };

          var convertToLineData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
              var dataItem = data[i];
              var fromCoord = geoCoordMap[dataItem.name];
              var toCoord = gps; //市区
              if (fromCoord && toCoord) {
                res.push([
                  {
                    coord: fromCoord,
                    value: dataItem.value,
                  },
                  {
                    coord: toCoord,
                  },
                ]);
              }
            }
            return res;
          };

          let optionXyMap01 = {
            //时间线
            timeline: {
              data: voltageLevel,
              axisType: "category",
              autoPlay: true,
              playInterval: 3000,
              left: "39%",
              right: "15%",
              bottom: "0%",
              width: "60%",
              //  height: null,
              label: {
                normal: {
                  textStyle: {
                    color: "#389BB7",
                  },
                },
                emphasis: {
                  textStyle: {
                    color: "#fff",
                  },
                },
              },
              symbolSize: 10,
              lineStyle: {
                color: "#ccc",
              },
              checkpointStyle: {
                borderColor: "#fff",
                borderWidth: 2,
              },
              controlStyle: {
                showNextBtn: true,
                showPrevBtn: true,
                normal: {
                  color: "#666",
                  borderColor: "#666",
                },
                emphasis: {
                  color: "#aaa",
                  borderColor: "#aaa",
                },
              },
            },
            baseOption: {
              animation: true,
              animationDuration: 1000,
              animationEasing: "cubicInOut",
              animationDurationUpdate: 1000,
              animationEasingUpdate: "cubicInOut",
              //   直方图的高宽
              grid: {
                right: "2%",
                top: "35%",
                bottom: "20%",
                width: "20%",
              },
              tooltip: {
                trigger: "axis", // hover触发器
                axisPointer: {
                  // 坐标轴指示器，坐标轴触发有效
                  type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                  shadowStyle: {
                    color: "rgba(150,150,150,0.1)", //hover颜色
                  },
                },
              },
              geo: {
                show: true,
                map: "china",
                roam: true,
                zoom: 1,
                center: [113.83531246, 34.0267395887], //中心点
                label: {
                  emphasis: {
                    show: false,
                  },
                },
                itemStyle: {
                  normal: {
                    borderColor: "rgba(147, 235, 248, 1)",
                    borderWidth: 1,
                    areaColor: {
                      type: "radial",
                      x: 0.5,
                      y: 0.5,
                      r: 0.5,
                      colorStops: [
                        {
                          offset: 0,
                          color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                        },
                      ],
                      globalCoord: false, // 缺省为 false
                    },
                    // shadowColor: 'rgba(128, 217, 248, 1)',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    // shadowOffsetX: -2,
                    // shadowOffsetY: 2,
                    // shadowBlur: 10
                  },
                  emphasis: {
                    areaColor: "#389BB7",
                    borderWidth: 0,
                  },
                },
              },
            },
            options: [],
          };
          //   有几年就循环调用几次
          //   voltageLevel年份数据
          for (var n = 0; n < voltageLevel.length; n++) {
            optionXyMap01.options.push({
              // backgroundColor: "#2A272A",
              title: [
                {
                  text: "全国碳交易量变化",
                  subtext: "数据来源：www.tanjiaoyi.com",
                  left: "5%",
                  top: "2%",
                  textStyle: {
                    color: "#EEDD78",
                    fontSize: 25,
                  },
                },
                {
                  id: "statistic",
                  text: voltageLevel[n] + "具体情况",
                  left: "75%",
                  top: "23%",
                  textStyle: {
                    color: "#EEDD78",
                    fontSize: 18,
                  },
                },
              ],
              xAxis: {
                type: "value",
                scale: true,
                position: "top",
                min: 0,
                boundaryGap: false,
                splitLine: {
                  show: false,
                },
                axisLine: {
                  show: false,
                },
                axisTick: {
                  show: false,
                },
                axisLabel: {
                  margin: 2,
                  textStyle: {
                    color: "#fff",
                  },
                },
              },
              yAxis: {
                type: "category",
                //  name: 'TOP 20',
                nameGap: 10,
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: "#ddd",
                  },
                },
                axisTick: {
                  show: false,
                  lineStyle: {
                    color: "#ddd",
                  },
                },
                axisLabel: {
                  //设置成 0 强制显示所有标签。
                  interval: 0,
                  textStyle: {
                    color: "#ddd",
                  },
                },
                data: categoryData,
              },
              //散点图
              series: [
                {
                  //文字和标志
                  name: "light",
                  type: "scatter",
                  //   symbol:'triangle',
                  coordinateSystem: "geo",
                  //n 是第几年
                  data: convertData(mapData[n]),
                  symbolSize: function (val) {
                    return val[2] / 12;
                  },
                  //   label: {
                  //       normal: {
                  //           formatter: '{b}',
                  //           position: 'right',
                  //           show: true
                  //       },
                  //       emphasis: {
                  //           show: true
                  //       }
                  //   },
                  itemStyle: {
                    normal: {
                      color: colors[colorIndex][n],
                    },
                  },
                },
                //   地图
                {
                  type: "map",
                  map: "china",
                  geoIndex: 0,
                  aspectScale: 0.75, //长宽比
                  showLegendSymbol: false, // 存在legend时显示
                  label: {
                    normal: {
                      show: false,
                    },
                    emphasis: {
                      show: false,
                      textStyle: {
                        color: "#fff",
                      },
                    },
                  },
                  roam: true,

                  itemStyle: {
                    opacity: 0.7,
                    normal: {
                      areaColor: "#031525",
                      borderColor: "#FFFFFF",
                    },
                    emphasis: {
                      areaColor: "#2B91B7",
                    },
                  },
                  animation: false,
                  data: mapData,
                },
                {
                  //  name: 'Top 10',
                  type: "effectScatter",
                  coordinateSystem: "geo",
                  data: convertData(
                    mapData[n]
                      .sort(function (a, b) {
                        return b.value - a.value;
                      })
                      .slice(0, 20)
                  ),
                  symbolSize: function (val) {
                    return val[2] / 2;
                  },
                  showEffectOn: "render",
                  rippleEffect: {
                    brushType: "stroke",
                  },
                  hoverAnimation: true,
                  label: {
                    normal: {
                      formatter: "{b}",
                      position: "right",
                      show: true,
                    },
                  },
                  itemStyle: {
                    normal: {
                      color: colors[colorIndex][n],
                      shadowBlur: 5,
                      shadowColor: colors[colorIndex][n],
                    },
                  },
                  zlevel: 1,
                },
                //直角坐标系图 直方图
                {
                  zlevel: 1,
                  type: "bar",
                  barWidth: 15, // 柱子宽度
                  symbol: "none",
                  itemStyle: {
                    normal: {
                      color: colors[colorIndex][n],
                    },
                  },
                  data: barData[n],
                },
              ],
            });
          }

          optionXyMap01 && myChart.setOption(optionXyMap01);
          // option && myChart.setOption(option);
        });
      });
      myChart.on("mouseover", "series", (e) => {
        this.city = e.name;
        // console.log("e.name:", e.name);
        // console.log("this.city:", this.city);
        this.$bus.$emit("shareCity", this.city);
      });
      myChart.on("mouseover", "timeline", (e) => {
        console.log("e.name:", e.name);
        this.$bus.$emit("sharePriceTime", e.name);
      });
    },
  },
  mounted() {
    this.drawgraphChart();
    // console.log(this);
  },
};
</script>

<style lang="less" scoped>
.pricemap {
  margin: 20px;
  // margin-left: 200px;
  // position:absolute;
  // left: 200px;
}
</style>
