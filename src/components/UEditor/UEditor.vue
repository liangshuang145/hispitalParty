<template>
  <div :id="id" type="text/plain"></div>
</template>

<script>
import '../../../static/ueditor/ueditor.config.js'
import '../../../static/ueditor/ueditor.all.js'
import '../../../static/ueditor/lang/zh-cn/zh-cn.js'
import '../../../static/ueditor/ueditor.parse.min.js'

export default {
  name: 'UEditor',
  props: {
    id: {
      type: String
    },
    config: {
      type: Object
    }
  },
  data() {
    return {
      editor: null
    }
  },
  created() {
    console.log('组件加载')
  },
  mounted() {
    // 初始化UE
    this.editor = UE.delEditor(this.id)
    this.editor = UE.getEditor(this.id, this.config)
  },
  destoryed() {
    this.editor.destory()
  },
  methods: {
    setUEContent(html) {
      this.editor.setContent(html)
    },
    getUEContent() {
      return this.editor.getContent()
    },
    getContentTxt() {
      return this.editor.getContentTxt()
    }
  }
}
</script>
