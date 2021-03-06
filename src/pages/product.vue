<template>
    <div class="product">
        <product-param :title="productData.name" buttom='"true"'></product-param>
        <div class="product-banner">
            <div class="title">{{productData.name}}</div>
            <div class="photo">3200万自拍，4800万三摄</div>
            <div class="detail">
                <a href="javascript:;">全球首款双频GP</a>
                <span>|</span>
                <a href="javascript:;">晓龙845</a>
                <span>|</span>
                <a href="javascript:;">AI变焦双摄</a>
                <span>|</span>
                <a href="javascript:;">红外人脸识别</a>
            </div>
            <div class="price">¥1799</div>
        </div>
        <div class="product-detail">
            <div class="container">
                <ul class="product-detail2">
                    <li v-for="(item,index) in detail" :key="index">
                        <h2 class="title">{{item.detailTitle}}</h2>
                        <p>{{item.detailOther}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="product-bg">
            <!-- <h2>超轻四曲面</h2>
            <h3>轻薄圆润，舒适握感</h3>
            <p>四曲面玻璃机身，超轻7系铝金属中矿，水滴弧收腰设计</p> -->
        </div>
        <div class="product-swiper">
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="product-video">
            <div class="title">60帧超慢动作摄影<br/>
            慢慢回味每一瞬间的精彩</div>
            <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>
            更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
            <div class="video-bg" @click="isShow = true"></div>
            <div class="video-box" v-show="isShow" :class="isShow? 'is_show':''">
                <div class="mask"></div>
                <div class="close" @click="isShow = false">X</div>
                <video src="/imgs/product/video.mp4" controls autoplay muted>
                </video>
            </div>
        </div>
        
    </div>
</template>
<script>
import { Swiper, SwiperSlide} from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import ProductParam from '../components/ProductParam.vue'
export default {
    components: { 
        ProductParam,
        Swiper,
        SwiperSlide
        },
    name:'product',
    data:function(){
        return {
            detail:[
                {detailTitle:'晓龙845 处理器',detailOther:'超旗舰性能'},
                {detailTitle:'晓龙845 处理器',detailOther:'超旗舰性能'},
                {detailTitle:'晓龙845 处理器',detailOther:'超旗舰性能'},
                {detailTitle:'晓龙845 处理器',detailOther:'超旗舰性能'},
                {detailTitle:'晓龙845 处理器',detailOther:'超旗舰性能'},
                {detailTitle:'晓龙845 处理器',detailOther:'超旗舰性能'},
                {detailTitle:'晓龙845 处理器',detailOther:'超旗舰性能'},
                {detailTitle:'晓龙845 处理器',detailOther:'超旗舰性能'},
                {detailTitle:'晓龙846 处理器',detailOther:'超旗舰性能'},
                {detailTitle:'晓龙847 处理器',detailOther:'超旗舰性能'},
                {detailTitle:'晓龙848 处理器',detailOther:'超旗舰性能'},
                {detailTitle:'晓龙849 处理器',detailOther:'超旗舰性能'},
            ],
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                },
                slidesPerView: 3,
                // spaceBetween: 30,
                // freeMode: true,
                // centeredSlides : true,
                // centeredSlidesBounds: true,
                spaceBetween : 20,
                autoplay:true,
            },
            isShow:false,
            productData:{}
        }
    },
    computed:{
    },
    methods:{
        getIfo(){
            let id = this.$route.params.id;
            // let id = location.search;
            // console.log(id);
            this.axios.get(`/products/${id}`,{
                params:{
                    productId:id
                }
            }).then((data)=>{
                this.productData = data;
                console.log(this.productData);
            })
        }
    },
    mounted(){
        this.getIfo();
    },
    destroyed(){
        
    }
}
</script>
<style lang="scss">

.product{
    margin-bottom: 76px;
    .product-banner{
        height: 718px;
        width: 100%;
        background: url('/imgs/product/product-bg-1.png') no-repeat center;
        background-size: 100% 100%;
        color: #333;
        text-align: center;
        .title{
            height: 120px;
            padding-top: 55px;
            font-size: 80px;
            // text-align: center;
            font-weight: 700;
        }
        .photo{
            height: 36px;
            font-weight: 700;
            font-size: 24px;
            letter-spacing: 10px;
        }
        .detail{
            height: 24px;
            margin: 21px 0 40px;
            font-size: 16px;
            a{
                color: #333;
            }
            span{
                margin: 0 10px;
            }
        }
        .price{
            height: 48px;
            font-weight: 700;
            font-size: 38px;
        }
    }
    .product-detail{
        height: 480px;
        .container{
            ul{
                display: flex;
                flex-wrap: wrap;
                text-align: center;
                padding: 100px 0;
                li{
                    height: 100px;
                    width: 300px;
                    border-right: 1px solid #333;
                    border-bottom: 1px solid #333;

                    &:nth-child(4n){
                        border-right: 0;
                    }
                    &:nth-child(9),&:nth-child(10),&:nth-child(11),&:nth-child(12){
                        border-bottom: 0;
                    }
                    .title{
                        margin: 25px 0 5px;
                        letter-spacing: 2px;
                    }
                }
            }
        }
    }
    .product-bg{
        height: 638px;
        text-align: center;
        background: url('/imgs/product/product-bg-3.png') no-repeat center;
        background-size: 100% 100%;
    }
    .product-swiper{
        height: 348px;
        margin: 36px 0 52px;
        img{
            height: 100%;
            width: 100%;
            // margin-right: 30px;
        }
    }
    .product-video{
        height: 1044px;
        text-align: center;
        background-color: #000;
        color: #fff;
        font-weight: 700;
        .title{
            font-size: 60px;
            height: 182px;
            padding: 82px 0 47px;
            
        }
        p{
            height: 72px;
            margin-bottom: 58px;
            font-size: 24px;
        }
        .video-bg{
            height: 540px;
            width: 1226px;
            margin: 0 auto;
            margin-bottom: 120px;
            background: url('/imgs/product/gallery-1.png') no-repeat center;
            background-size: contain;
            // background-color: #000;
        }
        .video-box{
            // position: fixed;
            // top: -150%;
            // left:0;
            // width: 100%;
            // height: 100%;
            // z-index: 12;
            // transition: all .7s;
            // overflow: hidden;
            // opacity: 0;
            // &.is_show{
            //     top: 0;
            //     opacity: 1;
            // }
            
            // width: 100%;
            // height: 100%;
            // z-index: 40;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 12;
            overflow: hidden;
            &.is_show{
                .mask{
                    opacity: 1;
                }
                video{
                    top:50%;
                }

            }
            .close{
                position: absolute;
                top: 40px;
                right: 60px;
                color: #fff;
                width: 200px;
                height: 100px;
                background-color: pink;
                z-index: 100;
            }
            .mask{
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                position: fixed;
                top: 0;
                left: 0;
                opacity: 0;
                transition: opacity .5s;
                // z-index: 15;
                // &.is_show1{
                //     opacity: 1;
                // }
            }
            video{
                height: 536px;
                width: 1000;
                position: absolute;
                top: -150%;
                left: 50%;
                transform: translate(-50%,-50%);
                border: none;
                outline: none;
                transition: top .5s;
                // z-index: 15;
                // &.is_show2{
                //     top: 50%;
                // }
            }
        }
    }
}
</style>