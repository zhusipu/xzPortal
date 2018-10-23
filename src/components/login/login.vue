<template>
  <div class="loginWr" ref="homePage" v-bind:style="{backgroundImage:'url(' + backgroundPic + ')'}">
    <div class="ownerInfo">
    </div>
    <div class="loginrotate">
    </div>
    <div class="loginBd">
      <div class="loginLogo">
        <img src="../../assets/images/logo.png" alt=""/>
      </div>
      <div class="loginMain">
        <!--登陆-->
        <Form ref="formInline" :model="formInline" :rules="ruleInline" >
          <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="用户名">

            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码">

            </Input>
          </FormItem>
          <div class="password_ji">
            <Checkbox v-model="password_ji">记住密码</Checkbox>
          </div>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">登陆</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
  import { login } from 'api/action'
  export default {
    data () {
      return {
        clientHeight:'',
        backgroundPic:require('../../assets/images/temp/loginBg.jpg'),
        password_ji:'',
        formInline: {
          user: '',
          password: '',
          remember: false
        },
        ruleInline: {
          user: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
  watch: {
    clientHeight: function () {
      this.changeFixed(this.clientHeight)
    }
  },
  mounted(){
    this.initHeight();
    this.getCookie();
  },
  methods: {

    changeFixed(clientHeight){
      this.$refs.homePage.style.height = clientHeight+'px';

    },
    initHeight(){
      this.clientHeight = document.body.clientHeight;
      window.onresize = () => {
        this.clientHeight = document.body.clientHeight;
      };
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$store.dispatch('Login', this.formInline).then((data) => {
            let redirect = decodeURIComponent(this.$route.query.redirect || '/');
            this.$router.push({path: redirect});
            this.$Message.success('登陆成功!');
          }).catch((msg) => {
              this.$Message.error(msg);
          })
        } else {
          this.$Message.error('登陆失败!');
        }
    })
    },

  //设置cookie
  setCookie(c_name, c_pwd, exdays) {
    var exdate = new Date();
    exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays);
    document.cookie = "userName=" + c_name + ";path=/;expires=" + exdate.toLocaleString()
    document.cookie = "userPwd=" + c_pwd + ";path=/;expires=" + exdate.toLocaleString()
  },
  //获取cookie
  getCookie: function() {
    if (document.cookie.length > 0) {
      var arr = document.cookie.split('; ');
      // console.log(arr)
      for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('=');

        if (arr2[0] == 'userName') {
          this.username = arr2[1];
        } else if (arr2[0] == 'userPwd') {
          this.password = arr2[1];
        }
      }
    }
  },
  //删除cookie
  clearCookie: function() {
    this.setCookie("", "", -1);

  },
  login_submit(){
    if (this.password_ji == true) {
      console.log("checked == true");
      this.setCookie(this.username, this.password, 7);
    }else {
      console.log("清空Cookie");
      this.clearCookie();
    }
    console.log("登陆成功");
  }

  }
  }
</script>

<style scoped>
.loginWr{
  width:100%;
  height:100%;
  background-size:cover;
}
  .loginrotate, .loginBd{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 362px;
    height: 458px;
    background: #FFFFFF;
    box-shadow: 0 1px 10px 0 rgba(74,74,74,0.40);
    border-radius: 3px;
    margin-left: -181px;
    margin-top: -229px;
  }
.loginrotate{
  transform: rotate(-3deg);
  opacity: 0.4;
}
  .ownerInfo{
    position: absolute;
    top: 40px;
    right: 74px;
    width: 400px;
    height: 28px;
    background: url('../../assets/images/loginditie.png') no-repeat;
  }
.loginLogo{
  padding-top: 70px;
  width: 190px;
  height: 101px;
  margin: 0 auto;
}
  .loginMain{
    padding:69px 52px 0 52px;
  }
.ivu-btn-primary{
  display: block;
  height: 41px;
  background: #F13D3D ;
  width: 100%;
  border:none;
  font-size:15px;
}
  .password_ji{
    margin-bottom: 30px;
  }
</style>
