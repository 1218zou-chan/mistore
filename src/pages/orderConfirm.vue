<template>
    <div class="orderConfirm">
        <order-header
            title='订单确认'>
            <template v-slot:tip>
                <span>请认真填写收货地址</span>
            </template>
        </order-header>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
            <defs>
              <symbol id="icon-add" viewBox="0 0 31 32">
                <title>add</title>
                <path d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z" class="path1"></path>
              </symbol>
              <symbol id="icon-edit" viewBox="0 0 32 32">
                <title>edit</title>
                <path d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z" class="path1"></path>
              </symbol>
              <symbol id="icon-del" viewBox="0 0 32 32">
                <title>delete</title>
                <path d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z" class="path1"></path>
                <path d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path2"></path>
                <path d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path3"></path>
                <path d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path4"></path>
              </symbol>
            </defs>
        </svg>
        <div class="orderConfirmBody">
            <div class="container">
                <div class="order-main">
                    <div class="address">
                        <h2 class="address-header">收货地址</h2>
                        <ul class="addr-list clearFix" >
                            <li v-for="(item,index) in addList" :key = index>
                                <h3 class="name">{{item.receiverName}}</h3>
                                <p class="phone">{{item.receiverMobile}}</p>
                                <p class="detail-address">{{item.receiverProvince+' '+item.receiverCity+' '+item.receiverDistrict+' '+item.receiverAddress}}</p>
                                <div class="action">
                                  <a href="javascript:;" class="fl">
                                    <svg class="icon icon-del">
                                      <use xlink:href="#icon-del"></use>
                                    </svg>
                                  </a>
                                  <a href="javascript:;" class="fr">
                                    <svg class="icon icon-edit">
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>
                                  </a>
                                </div>
                            </li>
                            <li class="add checked">
                                <div class="addIcon"></div>
                                <p>添加地址</p>
                            </li>
                        </ul>
                    </div>
                     <div class="order-product">
                        <h2 class="title">商品</h2>
                        <ul class="phoneList">
                            <li v-for="(item,index) in proSel" :key='index'>
                                <div class="itemMain">
                                    <img :src="item.productMainImage " alt="">
                                    <span>{{item.productName + ' ' + item.productSubtitle}}</span>
                                </div>
                                <div class="itemNum">
                                    {{item.productPrice+'x'+item.quantity}}
                                </div>
                                <div class="tolNum">
                                    {{item.productTotalPrice+'元'}}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="post">
                        <h2>配送方式</h2> <span>包邮</span>
                    </div>
                    <div class="invoice">
                        <h2>发票</h2>
                        <a href="javascript:;">电子发票</a>
                        <a href="javascript:;">个人</a>
                    </div>
                     <div class="lastPro">
                         <div>商品件数：<span>{{tolNum}}</span></div>
                         <div>商品总价：<span>{{tolPrice}}</span></div>
                    </div>   
                </div>

            </div>
        </div>
       
    </div> 
       
   
</template>
<script>
import OrderHeader from './../components/OrderHeader.vue';
export default {
    name:'orderConfirm',
    data(){
        return{
            addList:{},
            proSel:[],
            tolPrice:0,
            tolNum:0,
        }
    },
    components:{
        OrderHeader
    },
    mounted(){
        this.getAddList();
        this.getProSel();
    },
    methods:{
        getAddList(){
            this.axios.get("/shippings").then((res)=>{
                this.addList = res.list;

            })
        },
        getProSel(){
            this.axios.get('carts').then((res)=>{
                // let proSel = res.cartProductVoList.filter((item)=>item.productSelected);
                this.proSel = res.cartProductVoList.filter((item)=>item.productSelected);
                this.proSel.map((item)=>{
                    this.tolNum += item.quantity;
                });
                console.log(this.proSel);
                // let num = 0;
                // for(let key in this.proSel){
                //     num += this.proSel[key].quantity;
                // }
                // this.tolNum = num;
                this.tolPrice = res.cartTotalPrice;
            })
        }
    }
}
</script>
<style lang="scss">
.orderConfirm{
        .orderConfirmBody{
            padding: 30px 0 84px;
            background-color: #f5f5f5;
            .container{
                .order-main{
                    background-color: #fff;
                    padding: 0 0 40px 40px;
                    .address{
                        padding-top: 38px;
                        .address-header{
                            height: 30px;
                            margin-bottom: 21px;
                            color: #333;
                            font-size: 20px;
                            font-weight: 200;
                        }
                        .addr-list{
                           li{
                                float: left;
                                margin-right: 15px;
                                height: 148px;
                                width: 220px;
                                padding: 15px 24px 15px 24px;
                                border: 1px solid #e5e5e5;
                                &.checked{
                                    border-color: red;
                                }
                                .name{
                                    height: 27px;
                                    margin-bottom: 10px;
                                    font-size: 18px;
                                    color: #333;
                                    font-weight: 300;
                                }
                                .phone{
                                    height: 16px;
                                    font-size: 14px;
                                    color: #757575;
                                }
                                .detail-address{
                                    height: 50px;
                                    font-size: 14px;
                                    color: #757575;
                                }
                                .action{
                                    .icon{
                                        height: 50px;
                                        width: 20px;
                                    }
                                }
                           }
                           .add{
                               .addIcon{
                                   width: 30px;
                                   height: 30px;
                                   background: url('/imgs/icon-add.png') no-repeat center;
                                   background-size: 20px 20px;
                                   background-color: #e0e0e0;
                                   border-radius: 50%;
                                   margin: 45px 95px 10px 95px;
                               }
                               p{
                                   text-align: center;
                                   font-size: 14px;
                                   color: #757575;
                               }
                           }
                        }
                    }
                    .order-product{
                        margin-top: 34px;
                        .title{
                           height: 30px;
                           margin-bottom: 21px; 
                           font-size: 14px;
                        //    border-bottom: 1px solid #e0e0e0;
                        //    border-top: 1px solid #e0e0e0;
                           line-height: 30px;
                        //    color: #333;
                        //    font-weight: ;
                        }
                        .phoneList{
                            border-top: 1px solid #e0e0e0;
                            border-bottom: 1px solid #e0e0e0;;
                            li{
                                margin:10px 0;
                                height: 40px;
                                line-height: 40px;
                                div{
                                    float: left;
                                }
                                .itemMain{
                                    width: 700px;
                                    img{
                                        height: 30px;
                                        width: 30px;
                                        vertical-align: middle;
                                    }
                                    span{

                                    }
                                }
                                .itemNum{
                                    // margin-left: 600px;
                                }
                                .tolNum{
                                    float: right;
                                    margin-right: 60px;
                                    color: #FF6600;
                                }
                            }
                        }
                    }
                    .post{
                        height: 23px;
                        margin-top: 31px;
                        font-size: 20px;
                        font-weight: 400;
                        h2{
                            float: left;
                            width: 400px;
                            font-size: 18px;
                        }
                        span{
                            font-size: 14px;
                            color: #FF6600;
                            vertical-align: middle;
                            // margin-left: 20;
                            
                        }
                    }
                    .invoice{
                        height: 23px;
                        margin-top:31px;
                        line-height: 23px;
                        margin-bottom: 20px;
                        h2{
                            float: left;
                            width: 400px;
                            font-size: 18px;
                        }
                        a{
                            color: #FF6600;
                            font-size: 14px;

                            &:last-child{
                                margin-left: 20px;
                                
                            }
                        }
                    }
                }
            }
        }
}
</style>