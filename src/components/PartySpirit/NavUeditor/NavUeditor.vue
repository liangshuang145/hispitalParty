<template>
  <div>
    <div :id="id" type="text/plain" ></div>
  </div>
</template>

<script>
  import '../../../../static/ueditor/ueditor.config.js'
  import '../../../../static/ueditor/ueditor.all.js'
  import '../../../../static/ueditor/lang/zh-cn/zh-cn.js'
  import '../../../../static/ueditor/jquery-2.2.3.min.js'
  export default {
    name: "UEditor",
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
    mounted() {
      //初始化UE
      const _this = this;
      this.editor = UE.delEditor(this.id);
      this.editor = UE.getEditor(this.id,this.config);
    },
    destoryed() {
      this.editor.destory();
    },
    methods:{
      setUEContent: function(html){
        this.editor.setContent(html);
      },
      getUEContent: function(){
        return this.editor.getContent();
      },
      getContentTxt: function(){
        return this.editor.getContentTxt();
      }
    }
  }
</script>
