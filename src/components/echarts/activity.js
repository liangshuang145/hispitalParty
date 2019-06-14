export const option_activity = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '出勤率', '签到率', '积极率'],
      ['2015', 43.3, 85.8, 93.7],
      ['2016', 83.1, 73.4, 55.1],
      ['2017', 86.4, 65.2, 82.5],
      ['2018', 72.4, 53.9, 39.1]
    ]
  },
  xAxis: {type: 'category'},
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
    {type: 'bar'},
    {type: 'bar'},
    {type: 'bar'}
  ]
}

