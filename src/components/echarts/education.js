export const option_education = {
  title: {
    text: '学历统计',
    x: 'center'
  },
  color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    data: ['高中', '大专', '本科', '硕士', '博士'],
    // data: names,
    // data: [],s
    axisTick: {
      alignWithLabel: true
    }
  }],
  yAxis: [{
    type: 'value'
  }],
  series: [{
    name: '学历情况',
    type: 'bar',
    barWidth: '55%',
    data: []
    // data: nums
    // data: ['45', '23', '67', '98', '34']
  }]
}
