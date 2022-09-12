<template>
  <div class="price-container container">
    <div id="main" style="height: 350px"></div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      //城市字符
      cityname: "bj",
      cityRealName: "北京",
      cityPrice: [],
      myChart: undefined,
    };
  },
  methods: {
    //设置option
    async getOption(myChart) {
      // 等待json过来放在cityPrice里 再使用数据
      await this.getKlineData();
      const lineData = this.cityPrice[this.cityname];
      const upColor = "#00da3c"; //绿色
      const downColor = "#ec0000"; //红色
      //定义的方法    // 返回数组中的日期和数据
      function splitData(rawData) {
        //rawData
        //年份(year),开盘(open)，收盘(close)，最低(lowest)，最高(highest),数量(volume)
        //["2009-07-01",8447.53,8504.06,8447,8610.32,184600000]
        let categoryData = [];
        let values = [];
        let volumes = [];

        for (let i = 0; i < rawData.length; i++) {
          //数组中添加新元素：
          categoryData.push(rawData[i].splice(0, 1)[0]); //取年份
          values.push(rawData[i]);
          volumes.push([
            i,
            rawData[i][4],
            rawData[i][0] > rawData[i][1] ? 1 : -1,
          ]);
        }
        return {
          categoryData: categoryData, //日期  ['2008-12-05', '2008-12-08']
          values: values, // 价格 [8376.08, 8635.42, 8084.25, 8722.47, 346370000]
          volumes: volumes, //数量[index,volume,开盘>收盘为1， ] [0, 346370000, -1] [1, 358970000, -1]
        };
      }
      //计算MA平均线，N日移动平均线=N日收盘价之和/N  dayCount要计算的天数(5,10,20,30)
      function calculateMA(dayCount, data) {
        var result = [];
        for (var i = 0, len = data.values.length; i < len; i++) {
          if (i < dayCount) {
            result.push("-");
            continue;
          }
          var sum = 0;
          for (var j = 0; j < dayCount; j++) {
            sum += data.values[i - j][1];
          }
          result.push(+(sum / dayCount).toFixed(3));
        }
        return result;
      }
      // $.get('http://127.0.0.1:5500/src/assets/kline.json', function (rawData) {
      // if(传参是北京)赋值给
      let option;

      var data = splitData(lineData);
      myChart.setOption(
        (option = {
          title: [
            {
              text: this.cityRealName + "区域碳交易市场价格分布",
              // subtext: "数据来源：www.tanjiaoyi.com",
              left: "5%",
              top: "2%",
              textStyle: {
                color: "#EEDD78",
                fontSize: 20,
              },
            },
            // {
            //   id: "statistic",
            //   text: this.ch + "具体情况",
            //   left: "75%",
            //   top: "23%",
            //   textStyle: {
            //     color: "#EEDD78",
            //     fontSize: 18,
            //   },
            // },
          ],
          animation: false,
          legend: {
            bottom: 56,
            left: "center",
            data: ["index", "MA5", "MA10", "MA20", "MA30"],
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
            },
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            textStyle: {
              color: "#000",
            },
            position: function (pos, params, el, elRect, size) {
              const obj = {
                top: 10,
              };
              obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 30;
              return obj;
            },
            // extraCssText: 'width: 170px'
          },
          axisPointer: {
            link: [
              {
                xAxisIndex: "all",
              },
            ],
            label: {
              backgroundColor: "rgb(42,39,42)",
            },
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: false,
              },
              brush: {
                type: ["lineX", "clear"],
              },
            },
          },
          brush: {
            xAxisIndex: "all",
            brushLink: "all",
            outOfBrush: {
              colorAlpha: 0.1,
            },
          },
          visualMap: {
            show: false,
            seriesIndex: 5,
            dimension: 2,
            pieces: [
              {
                value: 1,
                color: downColor,
              },
              {
                value: -1,
                color: upColor,
              },
            ],
          },
          // 高度
          grid: [
            {
              left: "10%",
              right: "8%",
              height: "40%",
            },
            {
              left: "10%",
              right: "8%",
              top: "63%",
              height: "10%",
            },
          ],
          xAxis: [
            {
              type: "category",
              data: data.categoryData,
              boundaryGap: false,
              axisLine: { onZero: false },
              splitLine: { show: false },
              min: "dataMin",
              max: "dataMax",
              axisPointer: {
                z: 100,
              },
            },
            {
              type: "category",
              gridIndex: 1,
              data: data.categoryData,
              boundaryGap: false,
              axisLine: { onZero: false },
              axisTick: { show: false },
              splitLine: { show: false },
              axisLabel: { show: false },
              min: "dataMin",
              max: "dataMax",
            },
          ],
          yAxis: [
            {
              scale: true,
              splitArea: {
                show: true,
              },
            },
            {
              scale: true,
              gridIndex: 1,
              splitNumber: 2,
              axisLabel: { show: false },
              axisLine: { show: false },
              axisTick: { show: false },
              splitLine: { show: false },
            },
          ],
          dataZoom: [
            {
              type: "inside", //内置型数据区域缩放组件
              xAxisIndex: [0, 1],
              start: 98, //数据窗口范围的起始百分比
              end: 100,
            },
            {
              show: true,
              xAxisIndex: [0, 1],
              type: "slider",
              top: "85%",
              start: 98,
              end: 100,
            },
          ],
          series: [
            {
              name: "Dow-Jones index",
              type: "candlestick",
              data: data.values,
              itemStyle: {
                color: upColor,
                color0: downColor,
                borderColor: undefined,
                borderColor0: undefined,
              },
              tooltip: {
                formatter: function (param) {
                  param = param[0];
                  return [
                    "Date: " + param.name + '<hr size=1 style="margin: 3px 0">',
                    "Open: " + param.data[0] + "<br/>",
                    "Close: " + param.data[1] + "<br/>",
                    "Lowest: " + param.data[2] + "<br/>",
                    "Highest: " + param.data[3] + "<br/>",
                  ].join("");
                },
              },
            },
            {
              name: "MA5",
              type: "line",
              data: calculateMA(5, data),
              smooth: true,
              lineStyle: {
                opacity: 0.5,
              },
            },
            {
              name: "MA10",
              type: "line",
              data: calculateMA(10, data),
              smooth: true,
              lineStyle: {
                opacity: 0.5,
              },
            },
            {
              name: "MA20",
              type: "line",
              data: calculateMA(20, data),
              smooth: true,
              lineStyle: {
                opacity: 0.5,
              },
            },
            {
              name: "MA30",
              type: "line",
              data: calculateMA(30, data),
              smooth: true,
              lineStyle: {
                opacity: 0.5,
              },
            },
            {
              name: "Volume",
              type: "bar",
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: data.volumes,
            },
          ],
        }),
        true
      );
    },
    Kline() {
      var chartDom = document.getElementById("main");
      if (!myChart) {
        var myChart = this.$echarts.init(chartDom);
        this.myChart = myChart;
      }

      this.getOption(myChart);
      myChart.dispatchAction({
        type: "brush",
        areas: [
          {
            brushType: "lineX",
            coordRange: ["2016-06-02", "2016-06-20"],
            xAxisIndex: 0,
          },
        ],
      });
    },
    //请求json数据存放在 cityPrice里面
    async getKlineData() {
      var that = this;
      const tempData = await $.get(
        "http://127.0.0.1:5500/src/assets/kline.json",
        function (rawData) {
          // that.$store.state.allPrice = rawData;
          return rawData;
        }
      );
      // 放在
      this.cityPrice = tempData;
    },
  },
  watch: {
    cityname: function () {
      this.Kline();
    },
  },
  created() {
    // 将传过来的城市映射为对应json的key
    this.$bus.$on("shareCity", (val) => {
      const map = {
        北京: "bj",
        湖北: "hb",
        重庆: "cq",
        天津: "tj",
        上海: "sh",
        广东: "gd",
        福建: "fj",
      };
      // 城市字符 存放在data里面
      this.cityname = map[val];
      this.cityRealName = val;
    });
  },
  mounted() {
    this.Kline();
  },
};
</script>

<style lang="less" scoped>
</style>