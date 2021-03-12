<template>
    <div class="serviceBar">
        <div class="container">
            <ul>
                <li><span></span>预约维修服务</li>
                <li><span></span>7天无理由退货</li>
                <li><span></span>15天免费换货</li>
                <li><span></span>满150元包邮</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'serviceBar'
}
</script>
<style lang='scss'>
.serviceBar{
    height: 50px;
    margin: 33px 0;
    .container{
        height: 50px;
        ul{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 50px;
            li{
                flex: 1;
                border-right: 1px solid #333;
                text-align: center;
                font-size: 16px;
                // &:last-child{
                //     border-right: 0;
                // }
                span{
                    display: inline-block;
                    height: 20px;
                    width: 20px;
                    background: url('/imgs/icon-setting.png') no-repeat center;
                    background-size: contain;
                    vertical-align: middle;
                    margin-right: 5px;
                    // &:nth-child(1){
                    //     background-image: url('/imgs/icon-setting.png');
                    // }
                    // &:nth-child(2){
                    //     background-image: url('/imgs/icon-7day.png');
                    // }
                }
                &:nth-child(2) span{
                    background-image: url('/imgs/icon-7day.png');
                }
                &:nth-child(3) span{
                    background-image: url('/imgs/icon-15day.png');
                }
                &:nth-child(4) span{
                    background-image: url('/imgs/icon-post.png');
                }
            }
        }
    }
}
</style>