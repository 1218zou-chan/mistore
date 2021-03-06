<template>
    <div class="module-bar" v-show="showModal">
        <div class="mask">
            <div class="box">
                <div class="title">
                    {{title}}
                    <div class="cal" v-on:click="$emit('cancel')">X</div>
                </div>
                <div class="module-body">
                    <slot name="body"></slot>
                </div>
                <div class="footer">
                    <a href="javascript:;" class="btn" @click="$emit('submit')">{{sureText}}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'module-bar',
    props:{
        title:String,
        showModal:Boolean,
        sureText:{
            type:String,
            default:"确认"
        }
    }
}
</script>
<style lang="scss">
@import './../assets/scss/btn.scss';
@import './../assets/scss/reset.scss';
.module-bar{
    .mask{
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.4);
        z-index: 12;
        .box{
            position: fixed;
            top: 40%;
            left: 50%;
            transform: translateX(-50%);
            width: 660px;
            background-color: #fff;
            // height: 258px;
            .title{
                height: 60px;
                background-color: #f5f5f5;
                padding:0 25px;
                font-size: 16px;
                color: #333;
                line-height: 60px;
                position: relative;
                .cal{
                    position: absolute;
                    right: 20px;
                    top: 0;
                    transition: all .5s;
                    &:hover{
                        transform: scale(2);
                    }
                }

            }
            .module-body{
                height: 116px;
                padding: 42px 40px 54px;
                box-sizing: border-box;
                font-size: 14px;
            }
            .footer{
                height: 82px;
                background-color: #f5f5f5;
                text-align: center;
                line-height: 82px;
                // position: relative;
                // line-height: 82px;
                // a{
                //     display: inline-block;
                //     color:#fff
                // }
                a{
                    display: inline-block;
                    // line-height: ;
                    // line-height: 82px;
                    // position: absolute;
                    // top: 50%;                           
                }
            }
        }
    }
}
</style>