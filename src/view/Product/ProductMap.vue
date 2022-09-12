
<template>
  <div class="mapchart" style="margin: 20px">
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
      // var uploadedDataURL = 'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json';

      //geoCoordMap把所有可能出现的城市加到数组里面
      var geoCoordMap = {
        台湾: [121.5135, 25.0308],
        黑龙江: [127.9688, 45.368],
        内蒙古: [110.3467, 41.4899],
        吉林: [125.8154, 44.2584],
        北京: [116.4551, 40.2539],
        辽宁: [123.1238, 42.1216],
        河北: [114.4995, 38.1006],
        天津: [117.4219, 39.4189],
        山西: [112.3352, 37.9413],
        陕西: [109.1162, 34.2004],
        甘肃: [103.5901, 36.3043],
        宁夏: [106.3586, 38.1775],
        青海: [101.4038, 36.8207],
        新疆: [87.9236, 43.5883],
        西藏: [91.11, 29.97],
        四川: [103.9526, 30.7617],
        重庆: [108.384366, 30.439702],
        山东: [117.1582, 36.8701],
        河南: [113.4668, 34.6234],
        江苏: [118.8062, 31.9208],
        安徽: [117.29, 32.0581],
        湖北: [114.3896, 30.6628],
        浙江: [119.5313, 29.8773],
        福建: [119.4543, 25.9222],
        江西: [116.0046, 28.6633],
        湖南: [113.0823, 28.2568],
        贵州: [106.6992, 26.7682],
        云南: [102.9199, 25.4663],
        广东: [113.12244, 23.009505],
        广西: [108.479, 23.1152],
        海南: [110.3893, 19.8516],
        上海: [121.4648, 31.2891],
      };

      //2021年6月数据
      var d1 = {
        安徽: 3.622370223,
        北京: 1.596300886,
        福建: 5.15245615,
        甘肃: 4.39915834,
        广东: 4.785790608,
        广西: 4.442798477,
        贵州: 1.793622648,
        海南: 2.159659521,
        河北: 2.985441327,
        河南: 3.962864682,
        黑龙江: 2.16659755,
        湖北: 5.742737326,
        湖南: 5.55079052,
        吉林: 3.163803659,
        江苏: 4.137697034,
        江西: 7.636254938,
        辽宁: 2.045917209,
        内蒙古: 4.42405015,
        宁夏: 1.012776479,
        山东: 3.216607542,
        山西: 3.50328773,
        陕西: 8.033001331,
        四川: 4.687017737,
        天津: 1.816405788,
        新疆: 1.330252691,
        云南: 7.616037275,
        浙江: 4.225221137,
      };

      //2021年7月数据
      var d2 = {
        北京: 1.677686889,
        甘肃: 4.957469685,
        广东: 3.9915889,
        广西: 4.594810169,
        贵州: 3.173982785,
        海南: 2.167720047,
        河北: 2.902379107,
        黑龙江: 2.72535729,
        湖北: 5.876988015,
        湖南: 6.129186394,
        吉林: 3.81146844,
        江苏: 3.830449373,
        辽宁: 2.518502079,
        内蒙古: 3.728677419,
        宁夏: 1.108985936,
        青海: 1.186231812,
        山西: 3.427571171,
        陕西: 8.758472671,
        四川: 4.388566976,
        天津: 1.869779201,
        新疆: 1.326617066,
        云南: 7.677917081,
        浙江: 2.377505193,
        重庆: 2.315081174,
      };
      //2021年8月数据
      var d3 = {
        安徽: 4.060347772,
        北京: 1.749772571,
        福建: 5.663396811,
        甘肃: 4.531552831,
        广东: 3.544949945,
        广西: 4.618643329,
        贵州: 4.443116509,
        海南: 2.07490448,
        河北: 2.879632177,
        河南: 4.372553477,
        黑龙江: 2.754567732,
        湖北: 4.989457685,
        湖南: 6.024763885,
        吉林: 3.53076026,
        江苏: 3.974303288,
        江西: 8.202716399,
        辽宁: 2.309936474,
        内蒙古: 3.371507626,
        宁夏: 1.161045498,
        青海: 1.345024451,
        山东: 3.531808799,
        山西: 3.633803912,
        陕西: 8.341156005,
        四川: 4.923633965,
        天津: 2.008807781,
        新疆: 1.413696256,
        云南: 6.929938892,
        浙江: 4.008453514,
        重庆: 2.431597365,
      };
      //2021年9月数据
      var d4 = {
        安徽: 3.851404581,
        福建: 5.729744919,
        甘肃: 1.527080955,
        广东: 4.693375844,
        广西: 7.809868277,
        贵州: 2.891400684,
        海南: 1.934588375,
        河北: 3.100417224,
        河南: 5.135872551,
        黑龙江: 3.230497152,
        湖北: 5.3722209,
        湖南: 7.074992015,
        吉林: 3.661018382,
        江苏: 4.143845213,
        江西: 7.612759478,
        辽宁: 1.895411223,
        内蒙古: 4.264631377,
        宁夏: 0.180871592,
        山东: 3.636627263,
        山西: 3.266742095,
        陕西: 3.469670379,
        四川: 6.014014001,
        天津: 2.17349032,
        新疆: 1.731539841,
        云南: 0.987095246,
        浙江: 4.650765335,
        重庆: 2.748309723,
      };
      //2021年10月数据
      var d5 = {
        安徽: 4.348163149,
        安徽: 4.348163149,
        福建: 5.922817373,
        甘肃: 6.27685256,
        广东: 4.423894109,
        广西: 10.08845613,
        贵州: 11.25332474,
        海南: 10.81952937,
        河北: 3.194343043,
        河南: 5.59425241,
        黑龙江: 2.807944189,
        湖北: 7.074318381,
        湖南: 7.670860144,
        吉林: 4.074301972,
        江苏: 4.407549255,
        江西: 8.711821379,
        辽宁: 1.229571413,
        内蒙古: 5.028793921,
        宁夏: 1.408892433,
        山东: 3.653878104,
        山西: 4.240858942,
        陕西: 9.64712646,
        四川: 5.701110948,
        新疆: 1.10226091,
        云南: 13.82082662,
        浙江: 4.602537753,
        重庆: 2.049931378,
      };
      //2021年11月数据
      var d6 = {
        安徽: 1.092393776,
        北京: 2.171461746,
        福建: 1.106050463,
        甘肃: 0.659017687,
        广东: 1.407397625,
        广西壮族自治区: 1.321672766,
        贵州: 1.150933843,
        河北: 0.505944768,
        河南: 0.743377014,
        黑龙江: 0.999308389,
        湖北: 1.425814599,
        湖南: 1.283823282,
        吉林: 0.814880274,
        江苏: 1.450147329,
        江西: 0.867219705,
        辽宁: 0.707845769,
        内蒙古: 0.381462366,
        宁夏: 0.34675377,
        山东: 0.999816984,
        山西: 0.405516824,
        陕西: 1.153820843,
        上海: 2.606051609,
        四川: 1.382610844,
        新疆: 1.060026488,
        云南: 0.84843278,
        浙江: 1.026796922,
      };
      var d7 = {
        安徽: 2.031777419,
        北京: 2.132618904,
        福建: 2.175622672,
        甘肃: 1.273057151,
        广东: 2.054387735,
        广西壮族自治区: 1.994006551,
        贵州: 2.669777574,
        海南: 2.940912089,
        河北: 1.167351659,
        河南: 2.162109586,
        黑龙江: 1.525365261,
        湖北: 2.650782993,
        湖南: 3.084734256,
        吉林: 1.906332208,
        江苏: 2.312298342,
        江西: 2.165726968,
        辽宁: 1.083257531,
        内蒙古: 0.674900194,
        宁夏: 0.532432957,
        山东: 1.73824042,
        山西: 0.987964221,
        陕西: 2.33296495,
        上海: 2.507208514,
        四川: 2.569523303,
        新疆: 1.060288878,
        云南: 2.303643209,
        浙江: 1.709298186,
        重庆: 2.380913069,
      };

      var colors = [
        "#0667AB",
        "#009FE3",
        "#009394",
        "#769A2F",
        "#0667AB",
        "#AEBD14",
        "#F28D30",
        "#F54F4A",
      ];
      var colorIndex = 0;
      $(function () {
        var year = ["2012", "2013", "2014", "2015", "2016", "2017", "2018"];
        var mapData = [[], [], [], [], [], [], []];

        /*柱子Y名称*/
        var categoryData = [];
        var barData = [];

        for (var key in geoCoordMap) {
          mapData[0].push({
            year: "2012",
            name: key,
            value: d1[key],
          });
          mapData[1].push({
            year: "2013",
            name: key,
            value: d2[key],
          });
          mapData[2].push({
            year: "2014",
            name: key,
            value: d3[key],
          });
          mapData[3].push({
            year: "2015",
            name: key,
            value: d4[key],
          });
          mapData[4].push({
            year: "2016",
            name: key,
            value: d5[key],
          });
          mapData[5].push({
            year: "2017",
            name: key,
            value: d6[key],
          });
          mapData[6].push({
            year: "2018",
            name: key,
            value: d7[key],
          });
        }

        // for (var i = 0; i < mapData.length; i++) {
        //   mapData[i].sort(function sortNumber(a, b) {
        //     return a.value - b.value;
        //   });
        //   barData.push([]);
        //   categoryData.push([]);
        //   for (var j = 0; j < mapData[i].length; j++) {
        //     barData[i].push(mapData[i][j].value);
        //     categoryData[i].push(mapData[i][j].name);
        //   }
        // }

        $.getJSON(uploadedDataURL, function (geoJson) {
          that.$echarts.registerMap("china", geoJson);
          var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
              var geoCoord = geoCoordMap[data[i].name];
              if (geoCoord) {
                res.push({
                  name: data[i].name,
                  value: geoCoord.concat(data[i].value),
                });
              }
            }
            return res;
          };
          let optionXyMap01;
          optionXyMap01 = {
            //时间线
            timeline: {
              data: year,
              axisType: "category",
              autoPlay: true,
              playInterval: 3000,
              left: "10%",
              right: "0%",
              bottom: "0%",
              width: "70%",
              label: {
                normal: {
                  textStyle: {
                    color: "#ddd",
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
                color: "#555",
              },
              checkpointStyle: {
                borderColor: "#777",
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
              grid: {
                right: "1%",
                top: "15%",
                bottom: "10%",
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
                center: [113.83531246, 34.0267395887],
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
                      r: 0.8,
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
                    shadowColor: "rgba(128, 217, 248, 1)",
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10,
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

          for (var n = 0; n < year.length; n++) {
            optionXyMap01.options.push({
              backgroundColor: "#000",
              title: [
                {
                  text: "全国碳生产率时空分布",
                  subtext: "数据来源：统计年鉴",
                  sublink: "https://qianxi.baidu.com/",
                  left: "5%",
                  top: "5%",
                  textStyle: {
                    color: "#EEDD78",
                    fontSize: 20,
                  },
                },
                // {
                //   id: "statistic",
                //   text: year[n] + "碳生产率均值",
                //   left: "75%",
                //   top: "5%",
                //   textStyle: {
                //     color: "#fff",
                //     fontSize: 15,
                //   },
                // },
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
                    color: "#aaa",
                  },
                },
              },
              yAxis: {
                type: "category",
                //  name: 'TOP 20',
                nameGap: 16,
                axisLine: {
                  show: false,
                  lineStyle: {
                    color: "#ddd",
                  },
                },
                // axisTick: {
                //   show: false,
                //   lineStyle: {
                //     color: "#ddd",
                //   },
                // },
                axisLabel: {
                  show: false,
                  interval: 0,
                  textStyle: {
                    color: "#ddd",
                  },
                },
                data: categoryData[n],
              },

              series: [
                //地图
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
                //地图中闪烁的点
                {
                  //  name: 'Top 5',
                  type: "effectScatter",
                  coordinateSystem: "geo",
                  data: convertData(
                    mapData[n]
                      .sort(function (a, b) {
                        return b.value - a.value;
                      })
                      .slice(0, 40)
                  ),
                  symbolSize: function (val) {
                    return val[2] * 5;
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
                      color: colors[n],
                      shadowBlur: 10,
                      shadowColor: colors[n],
                    },
                  },
                  zlevel: 1,
                },
                //柱状图
                // {
                //   zlevel: 1.5,
                //   type: "bar",
                //   symbol: "none",
                //   itemStyle: {
                //     normal: {
                //       color: colors[colorIndex][n],
                //     },
                //   },
                //   data: barData[n],
                // },
              ],
            });
          }
          myChart.on("click", "series", (e) => {
            // console.log("e", e);
            that.$bus.$emit("productMap", e.name);
          });
          myChart.on("click", "timeline", function (e) {
            console.log(e.name);
            that.$bus.$emit("productTime", e.name);
          });
          myChart.setOption(optionXyMap01);
        });
      });
    },
  },
  mounted() {
    this.drawgraphChart();
  },
};
</script>

<style lang="less" scoped>
</style>
