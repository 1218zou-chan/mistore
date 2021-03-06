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
                            <span class="nowPrice">{{`productData.price元`}}</span>
                            <span class="beforePrice">1999元</span>
                        </div>
                        <div class="address">
                            <div class="del-address"></div>
                            <div class="has">有现货</div>
                        </div>
                        <div class="version">
                            <h4>选择版本</h4>
                            <span class="all" @click="change">6GB+64GB 全网通</span>
                            <span class="move" @click="change">4GB+64GB 移动4G</span>
                        </div>
                        <div class="color">
                            <h4>选择颜色</h4>
                            <div class="true-color"></div>
                        </div>
                        <div class="all-detail">
                            <div class="all-detail-title">
                                <span class="all-name">{{productData.name}}</span>
                                <span ref="allVersion" class="all-version">6GB+64GB 全网通</span>
                            </div>
                            <div class="totalPrice">{{`总计：${productData.price}`}}</div>
                            <div class="all-detail-button">
                                加入购物车
                            </div>
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
                    el: '.swiper-pagination'
                },
                // Some Swiper option/callback...
            }
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
        }
    }
}
</script>
<style lang='scss'>

</style>