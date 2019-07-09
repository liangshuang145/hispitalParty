export const option_city = {
  title: {
    text: ' 年龄统计',
    x: 'center'
  },
  tooltip: {},
  xAxis: {
    data: ["2年以下", "2-5年", "5-10年", '10年以上'],

  },
  yAxis: {},
  series: [{
    name: '年龄',
    type: 'bar',
    barWidth: '40%',
    data: [],
    itemStyle: {
      normal: {
        color: 'green'
      }
    }
  }]
}
