<template>
  <div class="proForcast-con container">
    <div class="pro-head">
      <!-- 标题 -->
      <h2>预测模块</h2>
    </div>
    <div class="pro-body">
      <!-- 表单 -->
      <div class="fromdata">
        <div>
          <label for="1">第一产业占GDP比重:</label>
          <input type="text" id="1" />
        </div>
        <div>
          <label for="2">第三产业占GDP比重:</label>
          <input type="text" id="2" />
        </div>
        <div>
          <label for="3">城市建设用地面积占市区比重:</label>
          <input type="text" id="3" />
        </div>
        <div>
          <label for="4">科学技术支出:</label>
          <input type="text" id="4" />
        </div>
        <div>
          <label for="5">能源消费总吨标煤:</label>
          <input type="text" id="5" />
        </div>
      </div>
      <!-- 预测结果 -->
      <div class="yuce">
        <button class="submit" @click="onSubmit">开始预测</button>
        <div class="context">预测结果:</div>
        <div class="result">{{ forcastResult }}</div>
        <div style="clear: both"></div>
      </div>
      <div class="line2"></div>
      <div class="suggest">
        政策建议：
        <div class="advise">
          {{ type }}
          <div>{{ advise }}</div>
        </div>
      </div>
    </div>
    <div class="pro-foot">
      <!-- 建议 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "",
      advise: "",
      forcastResult: "",
      tip: "",
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    onSubmit() {
      this.forcastResult = "大概需等待5秒...";
      setTimeout(() => {
        this.type = "该地区属于：高碳城市 ";
        this.advise =
          "推动碳捕捉与封存等低碳技术向产业的转变，建立新型低碳产业发展模式。同时要积极推动低碳经济发展，坚持区域平衡发展和区域优先发展相结合，营造各区域低碳经济协调并进的发展局面。";
        this.forcastResult = 4.854772;
        // this.tip = "";
      }, 5000);
    },
  },
};
</script>

<style lang="less" scoped>
.proForcast-con {
  z-index: 1;
  position: absolute;
  left: 20px;
  top: 60px;
  // padding-top: 20px;
  width: 350px;
  .fromdata {
    // text-align: center;
    padding-left: 20px;
    margin-bottom: 30px;
    label {
      // text-justify: inter-ideograph;
      display: inline-block;
      // justify-content: space-between;
      // text-align: justify;
      font-size: 15px;
      width: 220px; /*或者 width: 100px;*/
    }
    // label:after {
    //   content: "";
    //   display: inline-block;
    //   width: 100%;
    // }
    input {
      width: 50px;
    }
  }
  //预测

  .yuce {
    // text-align: center;
    vertical-align: middle;
    line-height: 30px;
    margin-bottom: 10px;
    .context {
      margin: 10px;
      float: left;
    }
    .result {
      margin: 10px 10px 10px 0;
      text-align: center;
      font-size: 15px;
      float: left;
      width: 130px;
      height: 30px;
      border-bottom: 1px solid #fff;
    }
    .submit {
      float: left;
      background-color: rgb(84, 112, 198);
      color: #fff;
      border-radius: 5%;
      padding: 10px;
      margin: 0 10px 0 20px;
    }
  }
  .line2 {
    height: 0;
    border: 1px solid rgba(32, 136, 210, 0.6);
  }
  .suggest {
    margin: 20px;
    height: 180px;
    .advise {
      margin-top: 20px;
    }
  }
}
h2 {
  margin: 20px;
  font-size: 20px;
  color: "#EEDD78";
}
</style>
