<template>
    <div class="index">
        <div class="swiper">
            <div class="container">
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide><img class="bigImg" src="/imgs/slider/slide-1.jpg" alt=""></swiper-slide>
                    <swiper-slide><img class="bigImg" src="/imgs/slider/slide-2.jpg" alt=""></swiper-slide>
                    <swiper-slide><img class="bigImg" src="/imgs/slider/slide-3.jpg" alt=""></swiper-slide>
                    <swiper-slide><img class="bigImg" src="/imgs/slider/slide-4.jpg" alt=""></swiper-slide>
                    <swiper-slide><img class="bigImg" src="/imgs/slider/slide-5.jpg" alt=""></swiper-slide>
                    <div class="swiper-button-prev" slot='button-prev'></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
                    <div class="swiper-button-next" slot="button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <div class="list">
                    <ul>
                        <li class="listItem">
                            <a class="listItem1" href="javascript:;">手机 电话卡 <span>></span></a>
                            <div class="children">
                                <ul v-for="(item2,index2) in menuList" :key='index2'>
                                    <li v-for="(item,index) in item2" :key ='index'>
                                        <a href="javascript:;">
                                            <img :src="item.img ? item.img: '/imgs/item-box-2.png'" alt="">
                                            <span>{{item.name?item.name:'小米8青春版'}}</span>
                                        </a>
                                        
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="listItem">
                            <a class="listItem1" href="javascript:;">手机1 电话卡 <span>></span></a>
                        </li>
                        <li class="listItem">
                            <a class="listItem1" href="javascript:;">手机1 电话卡 <span>></span></a>
                        </li>
                        <li class="listItem">
                            <a class="listItem1" href="javascript:;">手机1 电话卡 <span>></span></a>
                        </li>
                        <li class="listItem">
                            <a class="listItem1" href="javascript:;">手机1 电话卡 <span>></span></a>
                        </li>
                        <li class="listItem">
                            <a class="listItem1" href="javascript:;">手机1 电话卡 <span>></span></a>
                        </li>
                        <li class="listItem">
                            <a class="listItem1" href="javascript:;">手机1 电话卡 <span>></span></a>
                        </li>
                        <li class="listItem">
                            <a class="listItem1" href="javascript:;">手机1 电话卡 <span>></span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="adv-box">
            <div class="container">
                <div class="img"><a href="javascript:;"><img src="/imgs/ads/ads-1.png" alt=""></a></div>
                <div class="img"><a href="javascript:;"><img src="/imgs/ads/ads-2.jpg" alt=""></a></div>
                <div class="img"><a href="javascript:;"><img src="/imgs/ads/ads-3.png" alt=""></a></div>
                <div class="img"><a href="javascript:;"><img src="/imgs/ads/ads-4.jpg" alt=""></a></div>
            </div>
        </div>
        <div class="banner-box">
            <div class="container">
                <a href="javascript:;">
                    <img src="/imgs/banner-1.png" alt="">
                </a>
            </div>
        </div>
        <div class="phone">
            <div class="container">
                <h2 class="title">手机</h2>
                <div class="phoneOther">
                    <div class="left">
                        <img src="/imgs/mix-alpha.jpg" alt="">
                    </div>
                    <div class="right">
                        <ul>
                            <li v-for="(item,index) in phoneListBox" :key = 'index'>
                                <div class= 'new'>新品</div>
                                <img :src="item.mainImage" alt="">
                                <h3>{{item.name}}</h3>
                                <p>{{item.subtitle}}</p>
                                <div class="price">
                                    {{`${item.price}元`}}
                                    <a href="javascript:;" class="cart" @click="showModal = true">
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
        <module-bar title="提示"
                sureText='查看购物车'
                :showModal = 'showModal'
                v-on:cancel = 'showModal = false'
                @submit="goToCart"
        >
            <template v-slot:body>
                <p>商品添加成功</p>
            </template>
        </module-bar>
    </div>
</template>
<script>
import ModuleBar from '../components/ModuleBar.vue';
import ServiceBar from '../components/ServiceBar.vue';
import { Swiper, SwiperSlide} from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
    name:'index',
    components:{
        ServiceBar,
        Swiper,
        SwiperSlide,
        ModuleBar,
    },
    data:function(){
        return{
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                },
                autoplay:true,
                effect : 'cube',
                loop:true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
          // Some Swiper option/callback...
            },
            listItem:['手机 电话卡','电视 盒子','手机 电话卡','电视 盒子','手机 电话卡','电视 盒子','手机 电话卡','电视 盒子'],
            menuList:[
                        [
                          {
                            id:30,
                            img:'/imgs/item-box-1.png',
                            name:'小米CC9',
                          },{
                            id:31,
                            img:'/imgs/item-box-2.png',
                            name:'小米8青春版',
                          },{
                            id:32,
                            img:'/imgs/item-box-3.jpg',
                            name:'Redmi K20 Pro',
                          },{
                            id:33,
                            img:'/imgs/item-box-4.jpg',
                            name:'移动4G专区',
                          }
                        ],
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
            ],
            phoneListBox:[],
            showModal:false
        }
    },
    mounted(){
        this.getPhoneListBox();
    },
    methods:{
        getPhoneListBox(){
            this.axios.get('/products',{params:{
                pageSize:18
            }}).then((data)=>{
                this.phoneListBox = data.list.splice(10,8);
            })
        },
        goToCart(){
            this.$router.push('/cart');
        }
    }
}
</script>
<style lang='scss'>
@import './../assets/scss/config.scss';
.index{
    .swiper{
        height: 451px;
        .container{
            position: relative;
           .bigImg{
               height: 451px;
               width: 100%;
           }
           .list{
               height: 399px;
               width: 264px;
               padding: 26px 0;
               position: absolute;
               top: 0;
               left: 0;
               z-index: 11;
               background-color: rgba(0, 0, 0, .3);
               .listItem{
                   width: 234px;
                   height: 50px;
                   padding-left: 30px;
                   position: relative;
                   &:hover{
                       background-color: $colorA;
                       .children{
                           display: block;
                       }
                   }
                   .listItem1{
                       display: inline-block;
                       height: 100%;
                       width: 100%;
                       line-height: 50px;
                       font-size: 16px;
                       color: #fff;
                       &>span{
                           position: absolute;
                           top: 50%;
                           transform: translateY(-50%);
                           right: 50px;
                       }
                   }
                   .children{
                       display: none;
                       height: 451px;
                       width: 963px;
                       background-color: #fff;
                       position: absolute;
                       left: 264px;
                       top: -26px;
                       
                       ul{
                           height: 75px;
                           display: flex;
                           justify-content: space-between;
                           align-items: center;
                           li{
                               flex: 1;
                            //    text-align: center;
                               height: 75px;
                               line-height: 75px;
                               margin-left: 30px;
                               a{
                                   display: inline-block;
                                   color: #333;
                                   img{
                                   height: 35px;
                                   width: 42px;
                                   margin-right: 15px;
                                   vertical-align: middle;
                                    }
                               }
                               
                           }
                       }
                   }
               }
           }
        }
    }
    .adv-box{
        height: 167px;
        margin: 14px 0 31px 0;
        .container{
            display: flex;
            justify-content: space-between;
            .img{
                    a{
                        display: inline-block;
                        img{
                            height: 167px;
                            width: 296px;
                        }
                    }
                    
            }
        }
       
        
    }
    .banner-box{
        height: 133px;
        margin-bottom: 50px;
        .container{
            a{
                display: inline-block;
                img{
                    height: 130px;
                    width: 100%;
                }
            }
        }
    }
    .phone{
        height: 663px;
        padding: 30px 0 50px;
        background-color: #f5f5f5;
        .container{
            h2{
                height: 21px;
                margin-bottom: 20px;
                font-size: 22px;
            }
            .phoneOther{
                height: 622px;
                .left{
                    float: left;
                    margin-right: 16px;
                    img{
                        height: 622px;
                        width: 224px;
                    }
                }
                .right{
                    float: left;
                    height: 622px;
                    width: 986px;
                    // background-color: #fff;
                    ul{
                        display: flex;
                        flex-wrap: wrap;
                        li{
                            background-color: #fff;
                            width: 236px;
                            height: 302px;
                            position: relative;
                            margin-right: 14px;
                            text-align: center;
                            &:nth-child(1),&:nth-child(2),&:nth-child(3),&:nth-child(4){
                                margin-bottom: 14px;
                            };
                            &:nth-child(4n){
                                margin-right: 0;
                            }
                            &:nth-child(2n+1){
                                .new{
                                    opacity: 1;
                                }
                            }
                            .new{
                                // position: absolute;
                                // top: 5px;
                                // left: 50%;
                                // transform: translateX(-50%);
                                opacity: 0;
                                height: 24px;
                                width: 67px;
                                background-color: #7ecf68;
                                text-align: center;
                                margin: 0 auto;
                                line-height: 24px;
                            }
                            img{
                                height: 195px;
                                width: 236px;
                            }
                            h3{
                                height: 13.4px;
                                font-size: 14px;
                            }
                            p{
                                height: 12px;
                                margin:6px 0 12px 0; 
                                color: #999;
                            }
                            .price{
                                height: 22px;
                                color: #f20a0a;
                                font-size: 14px;
                                font-weight: 700;
                                .cart{
                                    display: inline-block;
                                    height: 22px;
                                    width: 22px;
                                    margin-left: 5px;
                                    background: url('/imgs/icon-cart-hover.png') no-repeat center;
                                    background-size: contain;
                                    vertical-align: middle;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
.swiper-button-prev{
    left: 270px;
}
.swiper-container-cube .swiper-cube-shadow{
    background: none;
}

</style>