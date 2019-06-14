export const option_pchangge = {
  title: { text: ' 人数变化', x:'center'},
  xAxis: {
    type: 'category',
    data: ['2015', '2016', '2017', '2018', '2019']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [820, 932, 901, 934, 1290],
    type: 'line'
  }]
}
