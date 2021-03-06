<template>
    <div class="NavHeader">
        <div class="topbar">
            <div class="container">
                <div class="menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="user">
                    <a href="javascript:;"  v-if = 'username'>{{username}}</a>
                    <a href="javascript:;"  v-if = 'username'>我的订单</a>
                    <a href="javascript:;"  v-if = 'username' @click = 'exit'>退出</a>
                    <a href="/#/login"  v-if = '!username'>登陆</a>
                    <a href="javascript:;" class="cart"><span></span>购物车({{cartCount}})</a>
                </div>
            </div>
        </div>
        <div class="nav">
            <div class="container">
                <div class="nav-logo"><a href="javascript:;"></a></div>
                <div class="nav-menu">
                    <div class="xiaoPhone">
                        小米手机
                        <ul class="child">
                            <li v-for="(item,index) in productList" :key= 'index'>
                                <a href="javascript:;">
                                    <div class="child-img">
                                        <img :src="item.mainImage" :alt="item.subtitle">
                                    </div>
                                    <div class="title">{{item.name}}</div>
                                    <div class="price">{{item.price | getPrice}}</div>
                                </a>
                                
                            </li>
                        </ul>
                    </div>
                    <div class="redPhone">
                        RedMi红米
                        <ul class="child">
                            <li v-for="(item,index) in productList" :key= 'index'>
                                <div class="child-img">
                                    <img :src="item.mainImage" :alt="item.subtitle">
                                </div>
                                <div class="title">{{item.name}}</div>
                                <div class="price">{{item.price | getPrice}}</div>
                            </li>
                        </ul>
                    </div>
                    <div class="TV">
                        电视
                        <ul class="child">
                            <li v-for="(item,index) in productList" :key= 'index'>
                                <div class="child-img">
                                    <img :src="item.mainImage" :alt="item.subtitle">
                                </div>
                                <div class="title">{{item.name}}</div>
                                <div class="price">{{item.price | getPrice}}</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="nav-search">
                    <input type="text">
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-header',
    data:function(){
        return{
            cartCount:1,
            productList:[],
        }
    },
    computed:{
        username(){
            return this.$store.state.username;
        },
    },
    mounted(){
        this.getProductList()
    },
    methods:{
        getProductList(){
            this.axios.get('/products',{
                params:{
                    pageSize:10
                }
            }).then((data)=>{
                console.log(data.list);
                this.productList = data.list.splice(4,6);
                console.log(data.list);
                // console.log(this.productList)
            })
        },
        exit(){
            this.$cookie.delete('id');
            location.reload();
        }
    },
    filters:{
        getPrice(value){
            let val = Number(value).toFixed(2);
            return `¥${val}元`
        }
    }
}
</script>
<style lang='scss'> 
@import './../assets/scss/reset.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/base.scss';
.NavHeader{
    .topbar{
        height: 39px;
        background-color: $colorB;
        line-height: 39px;
        font-size: 12px;
        .container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            a{
                color: #b0b0b0;
                margin-right: 17px;
                display: inline-block;
            }
            .user a:last-child{
                margin-right: 0;
            }
            .cart{
                width: 110px;
                background-color: $colorA;
                text-align: center;
                color:$colorG;
                span{
                    display: inline-block;
                    width: 16px;
                    height: 12px;
                    // border: 1px solid red;
                    vertical-align: text-top;
                    background: url('/imgs/icon-cart-checked.png') no-repeat center;
                    background-size: contain;
                    margin-right: 4px;
                }
            }
        }
    }
    .nav{
        height: 112px;
        .container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 112px;
            position: relative;
            .nav-logo{
                height: 55px;
                width: 55px;
                background-color: $colorA;
                overflow: hidden;
                &:hover a{
                    margin-left: -55px;
                }
                a{
                    display: inline-block;
                    width: 110px;
                    height: 55px;
                    transition: all .5s;
                }
                a::before{
                    display: inline-block;
                    content: '';
                    width: 55px;
                    height: 55px;
                    background: url('/imgs/mi-logo.png') no-repeat;
                    background-size: 55px 55px;
                }
                a::after{
                    content: '';
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background: url('/imgs/mi-home.png') no-repeat;
                    background-size: 55px 55px;
                    // background-color: pink;
                }
            }
            .nav-menu{
                width: 852px;
                height: 112px;
                padding-left: 209px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                &>div{
                    color: #333333;
                    font-size: 16px;
                    margin-right: 20px;
                    font-weight: 700;
                    height: 112px;
                    line-height: 112px;
                    cursor: pointer;
                    .child{
                        z-index: 12;
                        transition: all .5s;
                        opacity: 0;
                        height: 0;
                        overflow: hidden;
                        position: absolute;
                        left: 0;
                        top: 112px;
                        background-color: #fff;
                        // height: 112px;
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        list-style: none;
                        // &:last-child .child-img{
                        //     border-right: 1px solid red;
                        // }
                        li{
                            height: 220px;
                            padding-top: 26px;
                            // border: 1px solid red;
                            flex: 1;
                            text-align: center;
                            box-sizing: border-box;
                            &:last-child .child-img{
                                border-right: 0;
                            }
                            .child-img{
                                height: 110px;
                                border-right: 1px solid #333333;
                                img{
                                    height: 110px;
                                    width: auto;
                                }
                            }
                            .title{
                                height: 12px;
                                margin: 19px 0 8px;
                                line-height: 12px;
                                color: #000;
                            }
                            .price{
                                height: 12px;
                                line-height: 12px;
                                color: $colorA;
                            }
                        }
                    }    
                }
               
                &>div:hover{
                    color: $colorA;
                    .child{
                        height: 220px;
                        opacity: 1;
                    }
                }
                
            }
            .nav-search{
                width: 319px;
                border: 1px solid #333333;
                height: 50px;
                input{
                    width: 264px;
                    height: 50px;
                    border: none;
                    border-right: 1px solid #333333;
                    padding-left: 14px;
                    box-sizing: border-box;
                }
                span{
                    display: inline-block;
                    height: 18px;
                    width: 18px;
                    // border: 1px solid red;
                    vertical-align: middle;
                    margin-left: 17px;
                    background: url('/imgs/icon-search.png') no-repeat center;
                    background-size: contain;
                    cursor: pointer;
                    // background-color: $colorA;
                }
            }
        }
    }
}
</style>