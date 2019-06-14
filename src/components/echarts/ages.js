export const option_age = {
  title: { text: ' 年龄统计', x:'center'},
  tooltip: {},
  xAxis: {
    data: ["28周岁以下","28到35周岁"," 35周岁以上"],

  },
  yAxis: {},
  series: [{
    name: '年龄',
    type: 'bar',
    barWidth: '30%',
    data: [22,33,44],
    itemStyle: {
      normal: {
        color: 'hotpink'
      }
    }
  }]
}


