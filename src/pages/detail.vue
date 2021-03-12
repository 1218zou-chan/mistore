<template>
    <div class="detail">
        <product-param :title="productData.name"></product-param>
        <div class="product-detail">
            <div class="container">
                <div class="img-swiper">
                    <swiper ref="mySwiper" :options="swiperOptions">
                        <swiper-slide><img src="/imgs/detail/phone-1.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
                <div class="img-detail">
                    <div class="title">{{productData.name}}</div>
                    <div class="other-detail">
                        相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏
                    </div>
                    <div class="price">
                        <h4>小米自营</h4>
                        <div class="two-price">
                            <span class="nowPrice">{{`${productData.price}元`}}</span>
                            <span class="beforePrice">1999元</span>
                        </div>
                        <div class="address">
                            <div class="del-address">
                                <span></span>北京 北京市 朝安区 安定门街道
                            </div>
                            <div class="has">有现货</div>
                        </div>
                        <div class="version">
                            <h4>选择版本</h4>
                            <span :class="versionChange==1?'versionShow':''"  @click="versionChange = 1">6GB+64GB 全网通</span>
                            <span :class="versionChange==2?'versionShow':''"  @click="versionChange = 2">4GB+64GB 移动4G</span>
                        </div>
                        <div class="color">
                            <h4>选择颜色</h4>
                            <div class="true-color">深空灰</div>
                        </div>
                        <div class="all-detail">
                            <div class="all-detail-title">
                                <span class="all-name">{{productData.name}}</span>
                                <span ref="allVersion" class="all-version">{{versionChange==1?'  6GB+64GB 全网通':'  4GB+64GB 移动4G'}}</span>
                                <span class="allPrice">{{`${productData.price}元`}}</span>
                            </div>
                            <div class="totalPrice">{{`总计：${productData.price}元`}}</div>
                            
                        </div>
                        <div class="joinCart">
                                <a href="javascript:;" @click="addCard">加入购物车</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ProductParam from '../components/ProductParam.vue';
import { Swiper, SwiperSlide} from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
    name:'detail',
    data:function(){
        return{
            productData:{},
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                },
                autoplay:true,
                loop:true
                // Some Swiper option/callback...
            },
            versionChange:1
        }
    },
    components:{
        ProductParam,
        Swiper,
        SwiperSlide
    },
    mounted(){
        this.getProduct();
    },
    methods:{
        getProduct(){
            let id = this.$route.params.id;
            this.axios.get(`/products/${id}`,{
                params:id
            }).then((data)=>{
                this.productData = data;
            })
        },
        change(event){
            console.log(this.$refs.allVersion.innerText);
            // console.log(event);
            this.$refs.allVersion.innerText = event.target.innerText;
        },
        addCard(){
            let id = this.$route.params.id;
            this.axios.post('/carts',{
                productId:id,
                selected: true
            }).then(()=>{
                this.$store.dispatch('saveCart');
                console.log(this.$store.state.cartCount);
                this.$router.push('/cart')
            })
        }
    }
}
</script>
<style lang='scss'>
.detail{
    .product-detail{
        height: 870px;
        .container{
            display: flex;
            justify-content: space-between;
            .img-swiper{
                height: 617px;
                width: 642px;
                margin-top: 5px;
                img{
                    height: 643px;
                    width: 643px;
                }
            }
            .img-detail{
                width: 584px;
                height: 870px;
                .title{
                    width: 584px;
                    height: 26px;
                    padding: 30px 0 16px;
                    font-size: 28px;
                    font-weight: 700;
                    color: #333;
                }
                .other-detail{
                    width: 584px;
                    height: 36px;
                    font-size: 14px;
                    line-height: 18px;
                }
                .price{
                    h4{
                        height: 15px;
                        margin: 26px 0 14px;
                        font-size: 16px;
                        color: #ff6700;
                    }
                    .two-price{
                        height: 40px;
                        border-bottom: 1px solid #333 ;
                        margin-bottom: 28px;
                        .nowPrice{
                            font-size: 20px;
                            color: #ff6700;
                            margin-right: 10px;
                        }
                        .beforePrice{
                            font-size: 14px;
                            text-decoration: line-through;
                        }
                    }
                    .address{
                        height: 75px;
                        padding: 31px 0 0 64px;
                        border: 1px solid #333;
                        position: relative;
                        span{
                            position: absolute;
                            width: 20px;
                            height: 20px;
                            background: url('/imgs/detail/icon-loc.png') no-repeat center;
                            background-size: contain;
                            left: 34px;
                            top: 27px;
                        }
                        .has{
                            margin-top: 15px;
                            color: #ff6700;
                            font-weight: 700;
                            // font-size: 14px;
                        }
                    }
                    .version{
                        height: 98px;
                        margin-top: 30px;
                        h4{
                            color: #000;
                            height: 28px;
                            margin-bottom: 20px;
                        }
                        span{
                            display: inline-block;
                            height: 48px;
                            width: 285px;
                            border: 1px solid #333;
                            font-size: 16px;
                            line-height: 48px;
                            text-align: center;
                            margin-right: 5px;
                            &:last-child{
                                margin-right: 0;
                            }
                            &.versionShow{
                                border-color: #ff6700;
                                color: #ff6700;
                            }
                        }
                    }
                    .color{
                        height: 98px;
                        margin-bottom: 30px;
                        h4{
                            color:#000;
                            height: 28px;
                            width: 584px;
                            margin-bottom: 20px;
                        }
                        .true-color{
                            height: 48px;
                            width: 285px;
                            border: 1px solid #ff6700;
                            line-height: 48px;
                            text-align: center;
                            font-size: 14px;
                        }
                    }
                    .all-detail{
                        height: 55px;
                        padding: 24px 33px 29px 30px;
                        margin: 50px 0 30px;
                        background: rgba(0,0,0,.1);
                        .all-detail-title{
                            font-size: 14px;
                            height: 20px;
                            .allPrice{
                                float: right;
                            }
                        }
                        .totalPrice{
                            height: 36px;
                            margin-top: 18px;
                            color: #ff6700;
                            font-size: 24px;
                        }
                    }
                    .joinCart{
                        a{
                            display: inline-block;
                            width: 300px;
                            height: 54px;
                            background-color: #ff6700;
                            text-align: center;
                            line-height: 54px;
                            color: #fff;
                            font-size: 16px;
                        }
                    }
                }
            }

        }
    }
}
</style>