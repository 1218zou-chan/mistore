<template>
    <div class="order">
        <!-- <order-header
            :title='title'>
            <template v-slot:tip>
                <span>{{tip}}</span>
            </template>
        </order-header> -->
       <router-view></router-view>
       <service-bar></service-bar>
       <nav-footer></nav-footer>
    </div>
</template>
<script>
// import OrderHeader from '../components/OrderHeader';
import ServiceBar from '../components/ServiceBar';
import NavFooter from "../components/NavFooter";
export default {
    components: { 
        ServiceBar,
        NavFooter,
        // OrderHeader
    },
    name:'order',
    data(){
        return{
            // title:'',
            // tip:''
        }
    },
    computed:{
        
    },
    mounted(){
        // let path = this.$route.path;
        // if(path === '/orderConfirm'){
        //     this.title = '订单确认';
        //     this.tip = '请认真确认收货地址';
        // }else if(path === '/orderPay'){
        //     this.title = '支付确认';
        //     this.tip = '请认真确认支付信息';
        // }else if(path === '/orderList'){
        //     this.title = '支付确认1';
        //     this.tip = '请认真确认支付信息1';
        // }
    },
    methods:{
        
    }

}

</script>
<style >
 
</style>