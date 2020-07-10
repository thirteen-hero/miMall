<template>
    <div class="product">
        <product-param>
            <template v-slot:buy>
                <button class="btn">立即购买</button>
            </template>
        </product-param>
        <div class="aaa"></div>
    </div>
</template>
<script>
import ProductParam from './../components/ProductParam'
export default {
    name:'product',
    components:{
        ProductParam
    }
}
</script>
<style lang="scss">
    .product{
        button{
            margin-left: 10px;
        }
        .aaa{
            height: 1200px;
            background-color: rosybrown;
        }
    }
</style>