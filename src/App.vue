<template>
  <div id="app" class="App">
    <router-view/>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
  min-width: 960px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.el-dialog__body {
  padding: 10px 30px !important;
}

.el-dialog__footer {
  padding-top: 0 !important;
}
</style>
