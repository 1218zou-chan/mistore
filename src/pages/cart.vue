<template>
    <div class="cart">
        <order-header title="我的购物车"
        >
        <template v-slot:tip>
            <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
        </template>
        </order-header>
        <div class="cart-list">
            <div class="container">
                <div class="cart-box">
                    <ul class="cart-box-header">
                        <li class="all area1"><span :class="{'checked':selectedAll}" @click="checking"></span>全选</li>
                        <li class="area3">商品名称</li>
                        <li class="area1">单价</li>
                        <li class="area2">数量</li>
                        <li class="area1">小计</li>
                        <li class="area1">操作</li>
                    </ul>
                    <ul class="cart-box-body" v-for="(item,index) in cartProductVoList" :key='index'>
                        <li class="all area1"><span :class="{'checked':item.productSelected}" @click="update(item)"></span></li>
                        <li class="area3"><img :src="item.productMainImage" alt=""><span>{{item.productName}}</span></li>
                        <li class="area1">{{item.productPrice}}</li>
                        <li class="area2">
                            <div class="num">
                                <span @click="update(item,'-')">-</span>
                                <span>{{item.quantity}}</span>
                                <span @click="update(item,'+')">+</span>
                            </div>
                        </li>
                        <li class="area1 productTotalPrice">{{item.productTotalPrice}}</li>
                        <li class="area1"><a href="javascript:;" @click="removeItem(item)">X</a></li>
                    </ul>
                </div>
                <div class="order-list">
                    <div class="container">
                        <div class="shop"><a href="/#/index">继续购物</a></div>
                        <div class="selectPro"> 共<span>{{cartProductVoList.length}}</span>件商品，已选择<span>{{allNumber}}</span>件</div>
                        <div class="fr">
                            合计：<span class="allnum">{{cartTotalPrice}}</span>元
                            <a href="javascript:;" class="goToSum" @click="goSum">去结算</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
// import {Message} from 'element-ui'; 
import NavFooter from '../components/NavFooter.vue';
import OrderHeader from '../components/OrderHeader.vue';
export default {
    components:{ 
        OrderHeader,
        NavFooter,
    },
    name:'cart',
    data(){
        return{
            cartProductVoList:[],
            selectedAll:false,
            cartTotalPrice:0,
            allNumber:0
        }
    },
    computed:{
        
    },
    mounted(){
        this.getCart();
    },
    methods:{
        getCart(){
            this.axios.get('/carts').then((data)=>{
                this.resRender(data);
            })
        },
        resRender(data){
            this.cartProductVoList = data.cartProductVoList || [];
            this.selectedAll = data.selectedAll;
            this.cartTotalPrice = data.cartTotalPrice;
            this.allNumber = data.cartProductVoList.filter(err=>err.productSelected).length;
        },
        checking(){
            if(!this.selectedAll){
                this.axios.put('/carts/selectAll').then(data=>{
                    this.resRender(data);
                })
            }
            if(this.selectedAll){
                this.axios.put('/carts/unSelectAll').then(data=>{
                    this.resRender(data);
                })
            }
            
        },
        update(item,type){
             let quantity = item.quantity,
                selected = item.productSelected;
                if(quantity>=1 && quantity<=item.productStock){
                    if(type === '-'){
                        if(quantity === 1){
                            this.$message.warning('至少添加一件');
                        }
                        if(quantity > 1){
                            --quantity;
                        }
                    }else if(type === '+'){
                        if(quantity === item.productStock){
                            this.$message.warning('超出最大值');
                        }
                        if(quantity<item.productStock){
                            ++quantity;
                        }
                    }else{
                            selected = !selected;
                    }
                    this.axios.put(`/carts/${item.productId}`,{
                            quantity,
                            selected
                    }).then(data=>{
                            this.resRender(data);
                    })
                }
           
        },
        removeItem(item){
            this.axios.delete(`/carts/${item.productId}`).then(data=>{
                this.resRender(data);
                this.$message.warning('商品已删除');
            })
            
        },
        goSum(){
            let res = this.cartProductVoList.every(item=>!item.productSelected);
            if(res){
                alert("请选择一个产品");
            }else{
                this.$router.push('/orderConfirm')
            }

        }
    }

}
</script>
<style lang="scss">
.cart{
    .cart-list{
        // height: 402px;
        padding: 30px 0 114px;
        background-color: #f5f5f5;
        .container{
            .cart-box{
                background-color: #fff;
                .cart-box-header,.cart-box-body{
                    height: 79px;
                    display: flex;
                    align-items: center;
                    li{
                        text-align: center;
                    }
                    .all{
                        span{
                            display: inline-block;
                            height: 22px;
                            width: 22px;
                            border: 1px solid #000;
                            margin-right: 17px;
                            vertical-align: middle;
                            &.checked{
                                background: url('/imgs/icon-gou.png') #f60 no-repeat center;
                                background-size: contain;
                            }
                        }
                    }
                    .area1{
                        flex: 1;
                        a{
                            color: #333;
                        }
                    }
                    .area2{
                        flex: 2;
                        text-align: center;
                        .num{
                            height: 40px;
                            width: 150px;
                            border: 1px solid #e5e5e5;
                            margin: 0 auto;
                            line-height: 40px;
                            font-size: 14px;
                            span{
                                width: 50px;
                                height: 40px;
                                display: inline-block;
                            }
                        }
                    }
                    .area3{
                        flex: 3;
                    }
                }
                .cart-box-body{
                    height: 125px;
                    border-top: 1px solid #e5e5e5;
                    font-size: 18px;
                    .num{
                        border: 1px solid red;
                    }
                    .productTotalPrice{
                        color: #f60;
                    }
                    .area3{
                        text-align: left;
                        img{
                            height: 80px;
                            width: 80px;
                            vertical-align: middle;
                        }
                        span{
                            margin-left: 50px;
                        }
                    }
                }
            }
            .order-list{
                height: 50px;
                margin-top: 20px;
                line-height: 50px;
                .container{
                    font-size: 14px;
                    .shop,.selectPro{
                        float: left;
                    }
                    .shop{
                       a{
                           display: inline-block;
                           height: 50px;
                            color: #333;
                       } 
                       margin-right: 37px;
                    }
                    .selectPro{
                        span{
                            color: #f60;
                            margin: 0 5px;
                        }
                    }
                    .fr{
                        float: right;
                        .allnum{
                           font-size: 20px;
                           color: #f60;
                        }
                        a{
                            margin-left: 37px;
                            font-size: 18px;
                            display: inline-block;
                            width: 202px;
                            height: 50px;
                            background-color: #f60;
                            text-align: center;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
}
</style>