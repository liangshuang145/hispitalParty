export const option_age = {
  title: {
    text: ' 年龄统计',
    x: 'center'
  },
  tooltip: {},
  xAxis: {
    data: ["25周岁以下", "25到35周岁", "35到45周岁", '45周岁以上'],

  },
  yAxis: {},
  series: [{
    name: '年龄',
    type: 'bar',
    barWidth: '50%',
    // data: [22, 33, 44],
    data: [],
    itemStyle: {
      normal: {
        color: 'darkpink'
      }
    }
  }]
}
