<template>
  <el-form class="loginForm" :model="loginForm" :rules="loginRule" ref="loginForm">
    <el-form-item prop="username">
      <el-input type="text" v-model="loginForm.username" placeholder="账号" autocomplete="off">
        <!-- <template slot="prepend">账 号：</template> -->
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" placeholder="密码" autocomplete="off">
        <!-- <template slot="prepend">密 码：</template> -->
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="medium" @click="submitForm('loginForm')">登录</el-button>
    </el-form-item>
    <el-form-item hidden>
      <p>
        <router-link to="/forget">
          <i class="el-icon-arrow-right"/>
          忘记密码
        </router-link>
      </p>
      <p>
        <a href="#">
          <i class="el-icon-arrow-right"/>
          注册账号
        </a>
      </p>
    </el-form-item>
  </el-form>
</template>

<script>
import Validator from '@/lib/validator'

export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRule: {
        username: [{
          validator: Validator.checkUsername,
          trigger: 'blur'
        }],
        password: [{
          validator: Validator.checkPassword,
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 数据提交到父页面
          this.$emit('submitForm', {
            username: this.loginForm.username,
            password: this.loginForm.password
          })
        } else {
          this.$message.error('提交失败')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.loginForm .el-button {
  width: 100%;
}

.loginForm p {
  line-height: 24px;
  margin: 0;
}
</style>
