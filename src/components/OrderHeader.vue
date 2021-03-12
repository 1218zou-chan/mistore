<template>
    <div class="orderHeader">
        <div class="container clearfix">
             <div class="nav-logo"><a href="javascript:;"></a></div>
             <h2 class="title">{{title}}<slot name="tip"></slot></h2>
             <div class="user">{{username}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'order-list',
    data(){
        return{
            
        }
    },
    props:{
        title:String
    },
    computed:{
        username(){
            return this.$store.state.username || '未登陆';
        }
    }
}
</script>
<style lang="scss">
.orderHeader{
    height: 55px;
    padding: 30px 0;
    border-bottom: 2px solid #FF6600;
    .container{
        line-height: 55px;
        &.clearfix::after{
            content: '';
            display: block;
            clear: both;
        }
        .nav-logo,.title{
            float: left;
        }
        .user{
            float: right;
            font-size: 16px;
            color: #333;
        }
        .title{
            margin-left: 55px;
            font-size: 28px;
            span{
                font-size: 14px;
                color: #999;
                margin-left: 17px;
            }
        }
    }
}
</style>