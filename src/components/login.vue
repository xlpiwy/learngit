<template>
  <el-main>
    <el-form
    :model="LoginForm"
    ref="LoginForm"
    :rules="rule"
    label-width="0"
    class="login-form">
    <h3>用户登录</h3>
      <el-form-item prop="username">
        <el-input
          type="text" v-model="LoginForm.username" placeholder="用户名">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="text" v-model="LoginForm.password" placeholder="密码">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" class="submitBtn" round @click.native.prevent="submit" :loading="logining">登录</el-button>
        <el-button type="primary" class="resetBtn" round @click.native.prevent="reset">重置</el-button>
      </el-form-item>
      <hr>
      <p>还没有账号，马上去<span class="to" @click="toregin">注册</span></p>
    </el-form>
  </el-main>
</template>
<script>
import {LoginUser} from '../api/api'
export default {
  data () {
    return {
      LoginForm: {
        username: '',
        password: ''
      },
      logining: false,
      rule: {
        username: [
          {
            required: true,
            max: 14,
            min: 7,
            message: '用户名是必须的，长度为7-14位',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密码是必须的！',
            trigger: 'blur' // 失去焦点
          }
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.LoginForm.validate(valid => {
        if (valid) {
          this.logining = true
          // console.log('开始请求后台数据，验证返回之类的操作！')
          let LoginParams = {
            username: this.LoginForm.username,
            password: this.LoginForm.password
          }
          LoginUser(LoginParams).then(res => {
            this.logining = false
            let {code, msg, user} = res.data
            if (code !== 200) {
              this.$message({
                type: 'error',
                message: msg
              })
            } else {
              this.$message({
                type: 'success',
                message: msg
              })
              // 将返回的数据注入sessionStorage
              sessionStorage.setItem('user', JSON.stringify(user))
              // 跳转到我的信息的页面
              this.$router.push('/manger/my')
            }
          })
        } else {
          console.log('submit err')
        }
      })
    },
    reset () {
      this.$refs.LoginForm.resetFields()
    },
    toregin () {
      this.$router.push('/regin')
    }
  }
}
</script>
<style scoped>
.login-form {
  margin: 20px auto;
  width: 310px;
  background: #fff;
  box-shadow: 0 0 35px #B4BCCC;
  padding: 30px 30px 0 30px;
  border-radius: 25px;
}
.submitBtn {
  width: 65%;
}
.to {
  color: #67C23A;
  cursor: pointer;
}
</style>
