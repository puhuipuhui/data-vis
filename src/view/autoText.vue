<template>
  <div class="auto-container container">
    <div class="monitor panel">
      <div class="inner">
        <div class="tabs">
          <div class="tabs-left">重点排放企业监控</div>
          <div class="tabs-right">{{ cityRealName }}</div>
        </div>
        <div class="content" style="display: block">
          <div class="head">
            <span class="col">年份</span>
            <span class="col">重点排放单位名称</span>
            <span class="col">部门类别</span>
            <span class="col">地级</span>
          </div>
          <div class="marquee-view">
            <div class="marquee">
              <div class="row" v-for="items in data" :key="items.id">
                <span class="col">{{ items.year }}</span>
                <span class="col">{{ items.workUnit }}</span>
                <span class="col">{{ items.trade }}</span>
                <span class="col">{{ items.regionalLevel }}</span>
                <span class="icon-dot"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [
        {
          id: "id",
          year: "year",
          workUnit: "企业名称",
          trade: "核算行业",
          regionalLevel: "所属区",
        },
        {
          id: 1,
          year: 2020,
          workUnit: "北京燕厦物业管理有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 2,
          year: 2020,
          workUnit: "北京财贸职业学院（北京市财贸管理干部学院）",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 3,
          year: 2020,
          workUnit: "北京国瑞兴业商业管理有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 4,
          year: 2020,
          workUnit: "首都医科大学附属北京妇产医院",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 5,
          year: 2020,
          workUnit: "北京鼎铭物业管理有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 6,
          year: 2020,
          workUnit: "柒一拾壹（北京）有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 7,
          year: 2020,
          workUnit: "北京市北京饭店",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 8,
          year: 2020,
          workUnit: "北京金鼎轩酒楼有限责任公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 9,
          year: 2020,
          workUnit: "故宫博物院",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 10,
          year: 2020,
          workUnit: "中央戏剧学院",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 11,
          year: 2020,
          workUnit: "北京国际饭店有限责任公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 12,
          year: 2020,
          workUnit: "北京华海金宝房地产开发有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 13,
          year: 2020,
          workUnit: "王府饭店有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 14,
          year: 2020,
          workUnit: "首都医科大学附属北京中医医院",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 15,
          year: 2020,
          workUnit: "王府井集团股份有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 16,
          year: 2020,
          workUnit: "北京新捷房地产开发有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 17,
          year: 2020,
          workUnit: "中冶置业集团北京物业管理有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 18,
          year: 2020,
          workUnit: "北京中医药大学东直门医院",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 19,
          year: 2020,
          workUnit: "北京戴德梁行物业管理有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 20,
          year: 2020,
          workUnit: "中国电信股份有限公司北京分公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 21,
          year: 2020,
          workUnit: "中国移动通信集团北京有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 22,
          year: 2020,
          workUnit: "北京首华物业管理有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 23,
          year: 2020,
          workUnit: "北京肯德基有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 24,
          year: 2020,
          workUnit: "北京稻香村食品有限责任公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 25,
          year: 2020,
          workUnit: "首都医科大学附属北京天坛医院",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 26,
          year: 2020,
          workUnit: "中国医学科学院北京协和医院",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 27,
          year: 2020,
          workUnit: "北京麦当劳食品有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 28,
          year: 2020,
          workUnit: "北京东方广场有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 29,
          year: 2020,
          workUnit: "北京光环新网科技股份有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 30,
          year: 2020,
          workUnit: "中国食品药品检定研究院",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 31,
          year: 2020,
          workUnit: "北京泰利丰瑞物业管理有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 32,
          year: 2020,
          workUnit: "中国银行股份有限公司北京市分行",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 33,
          year: 2020,
          workUnit: "北京医院",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 34,
          year: 2020,
          workUnit: "北京银达物业管理有限责任公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 35,
          year: 2020,
          workUnit: "昆仑数智科技有限责任公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 36,
          year: 2020,
          workUnit: "华夏银行股份有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 37,
          year: 2020,
          workUnit: "北京新中纺正金物业管理有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 38,
          year: 2020,
          workUnit: "北京市公安局东城分局",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 39,
          year: 2020,
          workUnit: "首都医科大学附属北京同仁医院",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 40,
          year: 2020,
          workUnit: "国家体育总局训练局",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 41,
          year: 2020,
          workUnit: "北京国天物业管理发展有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 42,
          year: 2020,
          workUnit: "北京必胜客比萨饼有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 43,
          year: 2020,
          workUnit: "中国国家博物馆",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 44,
          year: 2020,
          workUnit: "北京市民政局房产管理所",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 45,
          year: 2020,
          workUnit: "北京便宜坊烤鸭集团有限公司",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
        {
          id: 46,
          year: 2020,
          workUnit: "工人日报社",
          trade: "其他服务行业",
          regionalLevel: "东城区",
        },
      ],
      dataList: undefined,
      cityname: "bj",
      cityRealName: "北京",
    };
  },
  methods: {
    async loadData() {
      await axios
        .get("http://localhost:5500/src/assets/Enterprise.json")
        .then((res) => {
          if (res.status === 200) {
            this.dataList = res.data;
            // console.log("this.dataList:", this.dataList);
          }
        });
    },
  },
  created() {
    this.$bus.$on("shareCity", (city) => {
      this.cityRealName = city;
      const map = {
        北京: "bj",
        湖北: "hb",
        重庆: "cq",
        天津: "tj",
        上海: "sh",
        广东: "gd",
        福建: "fj",
      };
      this.cityname = map[city];
      this.data = this.dataList[map[city]];
      console.log("this.cityname:", this.cityname);
      console.log("this.data:", this.data);
    });
    this.loadData();
  },
};
</script>

<style>
.monitor {
  height: 400px;
  width: 380px;
}
.monitor .inner {
  height: 400px;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
}
.monitor .tabs {
  padding: 0 1.5rem;
  margin-bottom: 0.75rem;
}
.tabs .tabs-left {
  float: left;
}
.tabs .tabs-right {
  float: right;
}

.monitor .content {
  flex: 1;
  display: none;
  position: relative;
}
.monitor .head {
  background: rgba(255, 255, 255, 0.1);
  font-size: 0.583rem;
  padding: 0.5rem 1.5rem;
  color: #68d8fe;
  display: flex;
  justify-content: space-between;
  line-height: 1.05;
}
.monitor .col:nth-child(1) {
  width: 3.2rem;
}
.monitor .col:nth-child(2) {
  width: 150px;
  /* 不换行  一行省略*/
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.monitor .col:nth-child(3) {
  width: 80px;
}
.monitor .marquee-view {
  position: absolute;
  top: 1.6rem;
  bottom: 0;
  width: 100%;
  overflow: hidden;
}

.monitor .row {
  line-height: 1.05;
  padding: 0.5rem 1.5rem;
  color: #61a8ff;
  font-size: 0.5rem;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.monitor .row:hover {
  color: #68d8ff;
  background: rgba(255, 255, 255, 0.1);
}
.monitor .row:hover .icon-dot {
  opacity: 1;
}

.monitor .icon-dot {
  position: absolute;
  left: 0.64rem;
  opacity: 0;
}
.monitor .marquee-view {
  position: absolute;
  top: 1.6rem;
  bottom: 0;
  width: 100%;
  overflow: hidden;
}

.monitor .row {
  line-height: 1.05;
  padding: 0.5rem 1.5rem;
  color: #61a8ff;
  font-size: 0.5rem;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.monitor .row:hover {
  color: #68d8ff;
  background: rgba(255, 255, 255, 0.1);
}
.monitor .row:hover .icon-dot {
  opacity: 1;
}

.monitor .icon-dot {
  position: absolute;
  left: 0.64rem;
  opacity: 0;
}
/* ------------------------------------------------------------动画 */
@keyframes row {
  0% {
  }
  100% {
    transform: translateY(-50%);
  }
}
/* 调用动画 */
.monitor .marquee {
  /* //infinite永久调用动画 */
  animation: row 10s linear infinite;
}
/*鼠标划入 停止动画  */
.monitor .marquee:hover {
  animation-play-state: paused;
}
</style>