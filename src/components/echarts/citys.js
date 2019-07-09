export const option_citys = {
  title: {
    text: '各民主党派人数统计',
    x: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['中国民主同盟', '台湾民主自治同盟', '中国民主建国会',
      '中国致公告', '中国国民党革命委员',
      '中国民主促进会', '九三学社', '中国农工民主党'
    ]
  },
  series: [{
    name: '访问来源',
    type: 'pie',
    radius: '55%',
    center: ['50%', '60%'],
    data: [{
        name: '中国民主同盟'
      },
      {
        name: '台湾民主自治同盟'
      },
      {
        name: '中国民主建国会'
      },
      {
        name: '中国致公党'
      },
      {
        name: '中国国民党革命委员会'
      },
      {
        name: '中国民主促进会'
      },
      {
        name: '九三学社'
      },
      {
        name: '中国农工民主党'
      }
    ],
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }]
}
