<template>
    <div class="login">
        <div class="login-header">
             <div class="container">
                <a href="/#/index"></a>
            </div> 
        </div>
       <div class="login-body">
           <div class="container">
               <form action="" method="">
                   <div class="form-header">
                       <span class="acc">账号登陆</span>
                       <span class="oth">|</span>
                       <span class="scan">扫码登陆</span>
                   </div>
                   <div class="form-account">
                        <input type="text"  placeholder="请输入账号" name="accout" v-model="username">
                   </div>
                  <div class="from-password">
                      <input type="password" name="pass" id="" placeholder="请输入密码" v-model="password">
                  </div>
                  <div class="go">
                      <button @click="logining">登陆</button>
                  </div>
                  <div class="resize">
                    <a href="javascript:;">手机短信登陆/注册</a>
                  </div>
               </form>
           </div>
       </div>
       <div class="login-footer"></div>
    </div>
</template>
<script>

export default {
    name:'login',
    data:function(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        logining(){
            this.axios.post("/user/login",{
                username:this.username,
                password:this.password
            }).then((data)=>{
                this.$router.push('/index');
                // this.$store.state.username = data.username;
                this.$cookie.set('id',data.id);
                this.$store.dispatch('saveUserName',data.username);
                console.log(this.$store.username);
                console.log(this.$cookie.get('id'));
            })
        },
    }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
.login{
    .login-header{
        height: 113px;
        .container{
            a{
                display: inline-block;
                height: 113px;
                width: 230px;
                background: url('/imgs/login-logo.png') no-repeat center;
                background-size: contain;
                // border: 1px solid red;
            }
        }
    }
    .login-body{
        height: 576px;
        background: url('/imgs/login-bg.jpg') no-repeat center;
        .container{
            position: relative;
            form{
                width: 348px;
                height: 510px;
                padding: 0 31px;
                box-sizing: border-box;
                background-color: #fff;
                position: absolute;
                top: 37px;
                right: 0;
                .form-header{
                    height: 23px;
                    margin: 40px 0 49px;
                    font-size: 24px;
                    line-height: 23px;
                    font-weight: 700;
                    text-align: center;
                    .oth{
                        margin: 0 32px;
                    }
                    .acc{
                        color: $colorA;
                    }
                }
                input{
                    width: 100%;
                    height: 50px;
                    margin-bottom: 20px;
                    border: 1px solid #333;
                    box-sizing: border-box;
                    padding-left: 20px;
                }
                .go{
                    button{
                        height: 50px;
                        margin-top: 10px;
                        width: 100%;
                        background-color: $colorA;
                        font-size: 14px;
                        color: #fff;
                    }
                }
                .resize{
                    height: 20px;
                    margin-top: 14px;
                    font-size: 12px;
                    line-height: 12px;
                    a{
                        color: $colorA;
                    }
                }
            }
        }
    }
}
</style>