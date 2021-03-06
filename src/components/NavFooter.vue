<template>
    <div class="nav-footer">
        <div class="container">
            <div class="logo">
            <img src="/imgs/logo-footer.png" alt="">
            <h1>小米商城</h1>
            </div>
            <div class="list">
            <a href="javascript:;">河畔一角主页</a>
            <span>|</span>
            <a href="javascript:;">Vue全栈课程</a>
            <span>|</span>
            <a href="javascript:;">React全家桶课程</a>
            <span>|</span>
            <a href="javascript:;">微信支付专项课程</a>
            <span>|</span>
            <a href="javascript:;">配套课程：Java通用型支付+电商平台双系统实战</a>
            </div>
            <div class="copy">
            Copyright ©2020 
            <span> mi.futurefe.com </span>
            All Rights Reserved.
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-footer'
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/base.scss';
@import './../assets/scss/reset.scss';
.nav-footer{
    height: 234px;
    border-top: 1px solid $colorA;
    background-color: $colorB;
    color:#999;
    text-align: center;
    .logo{
        height: 77px;
        margin: 46px 0 31px;
        img{
            width: 53px;
            height: auto;
            margin-bottom: 13px;
        }
        h1{
            font-size: 16px;
        }
    }
    .list{
        height: 24px;
        margin-bottom: 13px;
        a{
            color: #999;
        }
        span{
            margin: 0 10px;
        }
    }
    .copy{
        span{
            color: $colorA;
        }
    }
}
</style>