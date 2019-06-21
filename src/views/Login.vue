#@Author: bjy @Date: 2019/5/17 11:16 #
<template>
  <div class="main-div">
    <div class="main-div-top">
      <div class="main-div-top-title"></div>
    </div>
    <div class="main-div-middle">
      <div class="main-div-middle-div">
        <div class="main-div-middle-div-title">
          <span style="font-size: 32px; color: #ff0100">杭州市富阳区第一人民医院智慧党建系统</span>
        </div>
        <div class="main-div-middle-div-content">
          <div class="main-div-middle-div-content-login">
            <login-form @submitForm="doLogin"/>
          </div>
        </div>
      </div>
    </div>
    <div class="main-div-bottom">
      <div class="main-div-bottom-title">

      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm/LoginForm'
import LoginService from '@/services/LoginService'

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  data() {
    return {
      userName: '',
      userPwd: '',
      select: '',
      fullscreenLoading: false
    }
  },
  created() {
    // this.keyupSubmit();
  },
  methods: {
    keyupSubmit() {
      document.onkeydown = e => {
        let _key = window.event.keyCode;
        if (_key === 13) {
          this.openFullScreen()
        }
      }
    },
    openFullScreen() {
      this.fullscreenLoading = true;
      this.login()
    },
    doLogin({ username, password }) {
      LoginService.userLogin({
        username,
        password
      }).then((res) => {
          console.log('用户登录信息',res);
          if(res.code === 200){
            let userInfo = res.data;
            sessionStorage.setItem('userInfo',JSON.stringify(res.data));
            this.$router.push('Index');
            this.$notify.success({
              title: res.message,
              message: userInfo.name+ ' ,您好,欢迎回来',
              duration: 5000
            });
          }else {
            this.$notify.error({
              title: "错误码："+res.code,
              message: res.message,
              duration: 5000
            });
          }
      })
    }
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .main-div{
    width: 100%;
    height: 100%;
    /*background: rgba(0, 107, 211, 0.5);*/
    background: url(../assets/bg.png) no-repeat;
    background-size: cover;
    display: -webkit-flex; /*在webkit内核的浏览器上使用要加前缀*/
    display: flex; /*将对象作为弹性伸缩盒显示*/
    flex-direction: column;
  }

  .main-div-top{
    width: 100%;
    height: 100px;
    display: -webkit-flex; /*在webkit内核的浏览器上使用要加前缀*/
    display: flex; /*将对象作为弹性伸缩盒显示*/
    justify-content: center;
    flex-direction: row;
  }
  .main-div-top-title{
    width: 80%;
    height: 200px;
    flex-direction: row;
  }
  .main-div-middle{
    width: 100%;
    height: 500px;
    margin-top: 120px;
    display: -webkit-flex; /*在webkit内核的浏览器上使用要加前缀*/
    display: flex; /*将对象作为弹性伸缩盒显示*/
    justify-content: center;
    flex-direction: row;
  }
  .main-div-middle-div{
    width: 700px;
    height: 500px;
    display: -webkit-flex; /*在webkit内核的浏览器上使用要加前缀*/
    display: flex; /*将对象作为弹性伸缩盒显示*/
    justify-content: center;
    align-items:center;
    flex-direction: column;
  }
  .main-div-middle-div-title{
    color: #ffffff;
    width: 100%;
    height: 250px;
    display: -webkit-flex; /*在webkit内核的浏览器上使用要加前缀*/
    display: flex; /*将对象作为弹性伸缩盒显示*/
    justify-content: center;
    align-items:center;
    flex-direction: column;
  }
  .main-div-middle-div-content{
    width: 65%;
    height: 250px;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid #ffffff;
    display: -webkit-flex; /*在webkit内核的浏览器上使用要加前缀*/
    display: flex; /*将对象作为弹性伸缩盒显示*/
    justify-content: center;
    align-items:center;
    flex-direction: column;
    border-radius:10px;
  }

  .main-div-middle-div-content-login{
    width: 65%;
  }

  .main-div-bottom{
    width: 100%;
    height: 200px;
    display: -webkit-flex; /*在webkit内核的浏览器上使用要加前缀*/
    display: flex; /*将对象作为弹性伸缩盒显示*/
    flex-direction: row;
    justify-content: center;
  }
  .main-div-bottom-title{
    width: 70%;
    height: 200px;
    color: white;
    display: -webkit-flex; /*在webkit内核的浏览器上使用要加前缀*/
    display: flex; /*将对象作为弹性伸缩盒显示*/
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .main-div-bottom-title-content{
    padding-top: 10px;
  }
</style>
