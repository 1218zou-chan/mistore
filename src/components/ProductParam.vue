<template>
    <div class="product-param" :class="isFixed? 'is_fixed' : ''">
            <div class="container">
                <div class="title">{{title}}</div>
                <div class="pro-param">
                        <a href="javascript:;">概述</a>
                        <span>|</span>
                        <a href="javascript:;">参数</a>
                        <span>|</span>
                        <a href="javascript:;">用户评价</a>
                        <a href="javascript:;" class="buy" v-if="buttom">立即购买</a>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    name:'product-param',
    data:function(){
        return{
            isFixed:false
        }
    },
    props:{
        title:String,
        buttom:String
    },
    mounted(){
        window.addEventListener("scroll",this.getFixed,false)
    },
    methods:{
        getFixed(){
            let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(top > 150){
                this.isFixed = true;
                console.log(this.isFixed);
            }else{
                this.isFixed = false;
            }
        },
        bingEvent(ele,type,selected,fn){
            if(fn == null){
                fn = selected;
                selected = null
            }
            ele.addEventListener(type,event=>{
                let target = event.target;
                if(selected){
                    if(target.matches(selected)){
                        fn.call(target,event);
                    }
                }else{
                    fn.call(target,event);
                }
            })
        }

    },
    
    destroyed(){
        window.removeEventListener('scroll',this.getFixed,false);
    }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
.product-param{
    height: 70px;
    border-top: 1px solid #eee;
    line-height: 70px;
    background-color: #fff;
    z-index: 12;
    // box-shadow: 0 2px 2px #333;
    &.is_fixed{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        box-shadow: 0 2px 2px #333;
    }
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #333;
        .title{
            font-size: 18px;
            font-weight: 700;
        }
        .pro-param{
            a{
                color: #333;
                font-size: 14px;
                &.buy{
                    display: inline-block;
                    width: 110px;
                    height: 30px;
                    margin-left: 10px;
                    background-color: $colorA;
                    line-height: 30px;
                    text-align: center;
                    color: #fff;
                }
            }
            span{
                margin: 0 10px;
            }
        }
    }
}  
</style>