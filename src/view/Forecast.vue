<template>
  <div class="forcast-container container">
    <h2 class="title">碳交易价格预测模块</h2>
    <div class="for-body">
      <div class="upload" @click="getData()">
        <!--上传文件按钮 -->
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :file-list="fileList"
        >
          <el-button size="small" type="info">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">建议:只能上传excel文件</div>
        </el-upload>
      </div>
      <div class="result">
        <div id="forchart"></div>
        <div class="1" style="height: 1px"></div>
      </div>
      <div style="clear: both"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      forData: [],
      xdata: [],
    };
  },
  methods: {
    forchart() {
      var chartDom = document.getElementById("forchart");
      var myChart = this.$echarts.init(chartDom, "dark");
      var xData = this.xdata;
      let option = {
        animationDuration: 5000,
        backgroundColor: "#000",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            textStyle: {
              color: "#fff",
            },
          },
        },
        grid: {
          borderWidth: 0,
          top: 110,
          bottom: 95,
          textStyle: {
            color: "#fff",
          },
        },
        legend: {
          x: "46%",
          top: "11%",
          textStyle: {
            color: "#90979c",
          },
          data: ["碳交易权市场价格"],
        },

        calculable: true,
        xAxis: [
          {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "rgba(204,187,225,0.5)",
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            data: xData,
          },
        ],

        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "rgba(204,187,225,0.5)",
              },
            },
          },
        ],
        dataZoom: [
          {
            show: true,
            height: 30,
            xAxisIndex: [0],
            bottom: 30,

            start: 10,
            end: 80,
            handleIcon:
              "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
            handleSize: "110%",
            handleStyle: {
              color: "#5B3AAE",
            },
            textStyle: {
              color: "rgba(204,187,225,0.5)",
            },
            fillerColor: "rgba(67,55,160,0.4)",
            borderColor: "rgba(204,187,225,0.5)",
          },
          {
            type: "inside",
            show: true,
            height: 15,
            start: 1,
            end: 35,
          },
        ],
        series: [
          {
            name: "碳交易权市场价格",
            type: "line",
            symbolSize: 2,
            symbol: "circle",
            itemStyle: {
              color: "#6f7de3",
            },
            markPoint: {
              label: {
                normal: {
                  textStyle: {
                    color: "#fff",
                  },
                },
              },
              data: [
                {
                  type: "max",
                  name: "最大值",
                },
                {
                  type: "min",
                  name: "最小值",
                },
              ],
            },
            data: this.forData,
          },
        ],
      };
      option && myChart.setOption(option);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    getData() {
      setTimeout(() => {
        this.forData = [
          37.77, 37.34, 38.08, 38.66, 38.85, 38.69, 37.66, 29.26, 28.38, 26.97,
          27.41, 27.41, 19.66, 20.92, 20.92, 30, 27, 29.7, 29.7, 29.7, 29.7,
          36.91, 37.92, 37.95, 39.02, 41.52, 40.69, 41.44, 42.28, 40.79, 39.32,
          37.88, 38.27, 37.65, 37.73,
        ];
        let data = [];
        for (var i = 4; i < 31; i++) {
          data.push("7月" + i + "日");
        }
        this.xdata = data;
      }, 10000);
    },
  },
  mounted() {
    this.forchart();
    // this.getData();
  },
  //数据变化后再次调用
  watch: {
    forData: function () {
      this.forchart();
    },
  },
};
</script>

<style lang="less" scoped>
h2 {
  padding-left: 105px;
}
.title {
  margin: 20px 0 5px 42px;
  padding-top: 10px;
  color: #eedd78;
  font-size: 20px;
}
// .for-body {
//    padding: 20px;
// }
.upload {
  // float: right;
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
  width: 440px;
  height: 120px;
  border-bottom: 1px solid rgba(85, 163, 241, 0.625);
}
.forcast-container {
  transform: translateY(-120px);
}
#forchart {
  // float: left;
  margin: 20px;
  height: 280px;
  width: 400px;
  border: 1px dotted rgba(196, 208, 228, 0.536);
}
</style>