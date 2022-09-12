<template>
  <div class="map_left container">
    <div id="Sunchart"></div>
  </div>
</template>

<script>
export default {
  name: "Sun",
  methods: {
    Sunchart() {
      var chartDom = document.getElementById("Sunchart");
      var myChart = this.$echarts.init(chartDom, "dark");
      var option;

      var colors = [
        "#0667AB",
        "#009FE3",
        "#009394",
        "#769A2F",
        "#AEBD14",
        "#F28D30",
        "#F54F4A",
      ];

      const item1 = {
        color: colors[0],
      };
      const item2 = {
        color: colors[1],
      };
      const item3 = {
        color: colors[2],
      };
      const item4 = {
        color: colors[3],
      };
      const item5 = {
        color: colors[4],
      };
      const item6 = {
        color: colors[5],
      };
      const item7 = {
        color: colors[6],
      };
      const item8 = {
        color: "rgba(255,0,0,0)",
      };

      var data = [
        {
          // // name:  '林业',
          value: 1,
          itemStyle: item8,
          children: [
            {
              // name:  '废弃物',
              value: 1,
              itemStyle: item8,
              children: [
                {
                  // name:  '建筑',
                  value: 1,
                  itemStyle: item8,
                  children: [
                    {
                      // name:  '交通',
                      value: 1,
                      itemStyle: item8,
                      children: [
                        {
                          name: "天津市",
                          value: 1,
                          itemStyle: item8,
                          children: [
                            {
                              // name:  '工业',
                              value: 1,
                              itemStyle: item2,
                              children: [
                                {
                                  // name:  '电力',
                                  value: 1,
                                  itemStyle: item1,
                                  children: [
                                    {
                                      name: "天津市",
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          // name:  '林业',
          value: 1,
          itemStyle: item8,
          children: [
            {
              // name:  '废弃物',
              value: 1,
              itemStyle: item8,
              children: [
                {
                  // name:  '建筑',
                  value: 1,
                  itemStyle: item5,
                  children: [
                    {
                      // name:  '交通',
                      value: 1,
                      itemStyle: item4,
                      children: [
                        {
                          name: "深圳市",
                          value: 1,
                          itemStyle: item8,
                          children: [
                            {
                              // name:  '工业',
                              value: 1,
                              itemStyle: item2,
                              children: [
                                {
                                  // name:  '电力',
                                  value: 1,
                                  itemStyle: item1,
                                  children: [
                                    {
                                      // name: '深圳市'
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          // name:  '林业',
          value: 1,
          itemStyle: item8,
          children: [
            {
              // name:  '废弃物',
              value: 1,
              itemStyle: item8,
              children: [
                {
                  // name:  '建筑',
                  value: 1,
                  itemStyle: item5,
                  children: [
                    {
                      // name:  '交通',
                      value: 1,
                      itemStyle: item8,
                      children: [
                        {
                          name: "上海市",
                          value: 1,
                          itemStyle: item3,
                          children: [
                            {
                              // name:  '工业',
                              value: 1,
                              itemStyle: item2,
                              children: [
                                {
                                  // name:  '电力',
                                  value: 1,
                                  itemStyle: item1,
                                  children: [
                                    {
                                      // name: '上海市'
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          // name:  '林业',
          value: 1,
          itemStyle: item8,
          children: [
            {
              // name:  '废弃物',
              value: 1,
              itemStyle: item8,
              children: [
                {
                  // name:  '建筑',
                  value: 1,
                  itemStyle: item8,
                  children: [
                    {
                      // name:  '交通',
                      value: 1,
                      itemStyle: item8,
                      children: [
                        {
                          name: "湖北省",
                          value: 1,
                          itemStyle: item8,
                          children: [
                            {
                              // name:  '工业',
                              value: 1,
                              itemStyle: item2,
                              children: [
                                {
                                  // name:  '电力',
                                  value: 1,
                                  itemStyle: item1,
                                  children: [
                                    {
                                      // name: '湖北市'
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          // name:  '林业',
          value: 1,
          itemStyle: item8,
          children: [
            {
              // name:  '废弃物',
              value: 1,
              itemStyle: item8,
              children: [
                {
                  // name:  '建筑',
                  value: 1,
                  itemStyle: item8,
                  children: [
                    {
                      // name:  '交通',
                      value: 1,
                      itemStyle: item8,
                      children: [
                        {
                          name: "广东省",
                          value: 1,
                          itemStyle: item3,
                          children: [
                            {
                              // name:  '工业',
                              value: 1,
                              itemStyle: item2,
                              children: [
                                {
                                  // name:  '电力',
                                  value: 1,
                                  itemStyle: item1,
                                  children: [
                                    {
                                      // name: '广东市'
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          // name:  '林业',
          value: 1,
          itemStyle: item8,
          children: [
            {
              // name:  '废弃物',
              value: 1,
              itemStyle: item8,
              children: [
                {
                  // name:  '建筑',
                  value: 1,
                  itemStyle: item8,
                  children: [
                    {
                      // name:  '交通',
                      value: 1,
                      itemStyle: item8,
                      children: [
                        {
                          name: "福建省",
                          value: 1,
                          itemStyle: item3,
                          children: [
                            {
                              // name:  '工业',
                              value: 1,
                              itemStyle: item2,
                              children: [
                                {
                                  // name:  '电力',
                                  value: 1,
                                  itemStyle: item1,
                                  children: [
                                    {
                                      // name: '福建市'
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          // name:  '林业',
          value: 1,
          itemStyle: item8,
          children: [
            {
              // name:  '废弃物',
              value: 1,
              itemStyle: item8,
              children: [
                {
                  // name:  '建筑',
                  value: 1,
                  itemStyle: item8,
                  children: [
                    {
                      // name:  '交通',
                      value: 1,
                      itemStyle: item8,
                      children: [
                        {
                          name: "重庆市",
                          value: 1,
                          itemStyle: item8,
                          children: [
                            {
                              // name:  '工业',
                              value: 1,
                              itemStyle: item2,
                              children: [
                                {
                                  // name:  '电力',
                                  value: 1,
                                  itemStyle: item1,
                                  children: [
                                    {
                                      // name: '重庆市'
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ];
      option = {
        // title: {
        //   text: "参与企业行业",
        //   // subtext: "数据来源：www.tanjiaoyi.com",
        //   left: "5%",
        //   top: "2%",
        //   textStyle: {
        //     color: "#EEDD78",
        //     fontSize: 20,
        //   },
        // },
        backgroundColor: "#000",
        visualMap: {
          left: 10,
          bottom: 15,
          dimension: 2,
          orient: "vertical", //vertical  horizontal
          padding: 5,
          textGap: 4,
          seriesIndex: 2,
          color: colors.reverse(),
          categories: [
            "电力",
            "工业",
            "国内航空",
            "交通",
            "建筑",
            "废弃物",
            "林业",
          ], //categories是每个颜色对应的名称
        },
        title: [
          {
            text: "碳市场覆盖行业",
            // subtext: "废弃物和林业暂时没覆盖，未来将纳入更多行业",

            left: "5%",
            top: "5%",
            // top: '50%',
            textStyle: {
              fontSize: 20,
              color: "#EEDD78",
            },
          },
          {
            id: "statistic",
            text: "废弃物和林业暂时没覆盖，未来将纳入更多行业",
            left: "5%",
            top: "12%",
            textStyle: {
              color: "rgba(255, 255, 255, 0.4)",
              fontSize: 12,
            },
          },
        ],
        series: {
          type: "sunburst",
          data: data,
          radius: [40, "80%"],
          center: ["60%", "60%"],
          itemStyle: {
            borderRadius: 6,
            borderWidth: 1,
          },
          label: {
            // position: 'outside',
            fontSize: 12,
            // rotate: 'radial',
            show: true,
          },
        },
      };
      // myChart.resize({
      //   height: 300,
      //   width: 300,
      // });
      option && myChart.setOption(option);
    },
  },
  mounted() {
    this.Sunchart();
  },
};
</script>

<style lang="less" scoped>
// .map_left {
//   position: absolute;
//   left: 40px;
//   top: 80px;
// }
#Sunchart {
  height: 400px;
  width: 360px;
}
</style>