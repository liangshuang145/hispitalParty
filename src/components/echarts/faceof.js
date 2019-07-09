export const option_faceof = {
  title: {
    text: ' 科室统计',
    x: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    data: ['急诊科', '眼科', '外科', '皮肤科', '中医科']

  },
  series: [{
    name: '访问来源',
    type: 'pie',
    radius: ['50%', '70%'],
    avoidLabelOverlap: false,
    label: {
      normal: {
        show: false,
        position: 'center'
      },
      emphasis: {
        show: true,
        textStyle: {
          fontSize: '30',
          fontWeight: 'bold'
        }
      }
    },
    labelLine: {
      normal: {
        show: false
      }
    },
    data: [{
        // value: 180,
        name: '急诊科'
      },
      {
        // value: 67,
        name: '眼科'
      },
      {
        // value: 234,
        name: '外科'
      },
      {
        // value: 90,
        name: '皮肤科'
      },
      {
        // value: 87,
        name: '中医科'
      },

    ]
  }]
}
