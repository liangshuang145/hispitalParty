# 待修改 - Gacai #
<template>
  <div class="headerDiv">
    <div class="headerDiv-left">
      <!-- <div class="headerDiv-left-title"> -->
      <!-- <div style="padding-left:10px;text-align:center;"> -->
      <!-- <h2>{{ projectTitle }}</h2> -->
      <!-- </div> -->
      <!-- </div> -->
    </div>
    <div class="headerDiv-left">
      <div class="headerDiv-left-subhead"></div>
    </div>
    <div class="headerDiv-right">
      <el-dropdown>
        <span class="el-dropdown-link" style>
          你好，{{ userName }}，欢迎回来
          <i class="el-icon-arrow-down"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link to="/index/user">修改密码</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <span @click="outLogin">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped>
.headerDiv {
  height: 90px;
}

.headerDiv-left {
  float: left;
  height: 90px;
}

.headerDiv-left-title {
  font-size: 24px;
}

.headerDiv-left-subhead {
  padding-left: 20px;
  color: #dddddd;
  font-size: 18px;
}

.headerDiv-right {
  padding-right: 10px;
  float: right;
  height: 90px;
}
</style>
