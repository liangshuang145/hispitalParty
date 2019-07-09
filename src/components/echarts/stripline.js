export const option_stripline = {
  color: ['#3398DB'],
  title: {
    text: '支部',
    x: 'center'
  },
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
    data: ['第一党支部', '第二党支部', '第三党支部', '第四党支部', '第五党支部'],
    axisTick: {
      alignWithLabel: true
    }
  }],
  yAxis: [{
    type: 'value'
  }],
  series: [{
    name: '直接访问',
    type: 'bar',
    barWidth: '60%',
    // data: [30, 52, 140, 230, 160]
    data: []

  }]
};
