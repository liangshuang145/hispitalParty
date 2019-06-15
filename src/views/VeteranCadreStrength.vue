<template>
  <div class="i-div">
    <div style="float: left">
      <div id="people" :style="{width: '550px', height: '270px'}"></div>
      <div id="education" :style="{width: '550px', height: '270px'}"></div>
      <div id="pchangge" :style="{width: '550px', height: '270px'}"></div>
    </div>
    <div style="float: left">
      <div id="faceof" :style="{width: '550px', height: '270px'}"></div>
      <div id="stripline" :style="{width: '550px', height: '270px'}"></div>
      <div id="ages" :style="{width: '550px', height: '270px'}"></div>
    </div>
    <div style="float: left">
      <div id="city" :style="{width: '550px', height: '270px'}"></div>
      <div id="activity" :style="{width: '550px', height: '270px'}"></div>
      <div id="financial" :style="{width: '550px', height: '270px'}"></div>
    </div>
  </div>
</template>
<script>
  import{option_people} from  '@/components/echarts/people.js'
  import{option_education} from  '@/components/echarts/education.js'
  import{option_pchangge} from  '@/components/echarts/pchangge.js'
  import{option_faceof} from  '@/components/echarts/faceof.js'
  import{option_stripline} from '@/components/echarts/stripline.js'
  import{option_age} from  '@/components/echarts/ages.js'
  import{option_city} from  '@/components/echarts/city.js'
  import{option_activity} from  '@/components/echarts/activity.js'
  import{option_financial} from  '@/components/echarts/financial.js'

  // import __ from '__' // __是需要手动引入的文件
  //引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')

  export default {
    name: '',
    components: {},
    data () {
      return {

      }
    },
    mounted(){
      this.people();
      this.age();
      this.education();
      this.pchangge();
      this.faceof();
      this.stripline();
      this.city();
      this.activity();
      this.financial();
    },
    methods: {
      //男女比例
      people(){
        var people = this.$echarts.init(document.getElementById('people'));
        // 绘制图表
        people.setOption(option_people);
      },

      //学历
      education(){
        var education = this.$echarts.init(document.getElementById('education'))
        // 绘制图表
        education.setOption(option_education);
      },

      //人数变化
      pchangge(){
        var pchangge = this.$echarts.init(document.getElementById('pchangge'))
        // 绘制图表
        pchangge.setOption(option_pchangge);
      },

      //群众面貌
      faceof(){
        var faceof = this.$echarts.init(document.getElementById('faceof'))
        // 绘制图表
        faceof.setOption(option_faceof);
      },

      //条线统计
      stripline(){

        var stripline = this.$echarts.init(document.getElementById('stripline'))
        // 绘制图表
        stripline.setOption(option_stripline);
      },

      //年龄统计
      age(){
        // 基于准备好的dom，初始化echarts实例
        var ages = this.$echarts.init(document.getElementById('ages'))
        // 绘制图表
        ages.setOption(option_age);
      },

      //城市分布
      city(){
        // 基于准备好的dom，初始化echarts实例
        var city = this.$echarts.init(document.getElementById('city'))
        // 绘制图表
        city.setOption(option_city);
      },

      //活动统计
      activity(){
        // 基于准备好的dom，初始化echarts实例
        var activity = this.$echarts.init(document.getElementById('activity'))
        // 绘制图表
        activity.setOption(option_activity);
      },

      //财政
      financial(){
        // 基于准备好的dom，初始化echarts实例
        var financial = this.$echarts.init(document.getElementById('financial'))
        // 绘制图表
        financial.setOption(option_financial);
      }




    }
  }
</script>
<style lang="postcss" scoped>
.i-div{
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
