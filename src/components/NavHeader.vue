<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;">登录</a>
                    <a href="javascript:;">注册</a>
                    <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phoneList" :key="index">
                                    <a :href="'/#/product/'+item.id" target="_blank">
                                        <div class="pro-img">
                                            <img :src="item.mainimage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>Redmi红米</span>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="~@/../public/imgs/nav-img/nav-3-1.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米壁画电视 65英寸</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="~@/../public/imgs/nav-img/nav-3-2.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米全面屏电视</div>
                                        <div class="pro-price">1999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="~@/../public/imgs/nav-img/nav-3-3.png" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 32英寸</div>
                                        <div class="pro-price">699元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="~@/../public/imgs/nav-img/nav-3-4.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 55英寸</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="~@/../public/imgs/nav-img/nav-3-5.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 65英寸</div>
                                        <div class="pro-price">2699元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="~@/../public/imgs/nav-img/nav-3-6.png" alt="">
                                        </div>
                                        <div class="pro-name">查看全部</div>
                                        <div class="pro-price">小米电视</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-header',
    data(){
        return{
            username:'thirteen',
            phoneList:[]
        }
    },
    filters:{
        currency(val){
            if(!val)return '0.00';
            return '￥'+val.toFixed(2)+'元'
        }
    },
    mounted(){
        //this.getProductList();
    },
    methods:{
        getProductList(){
            this.axios.get('/manage/product/list.do',{
                categoryId:'3'
            }).then((res)=>{
                if(res.list.length>6){
                    this.phoneList=res.list.slice(0,6)
                }
            })
        }
    }
}
</script>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #b0b0b0;
            .container{
                @include flex();
                a{
                    display: inline-block;
                    color: #b0b0b0;
                    margin-right: 17px;
                }
                .my-cart{
                    width: 110px;
                    background-color: #FF6600;
                    text-align: center;
                    color: #ffffff;
                    .icon-cart{
                        @include bgImg(16px,12px,'~@/../public/imgs/icon-cart-checked.png');
                        margin-right: 4px;
                    }
                }
            }
        }
        .nav-header{
            .container{
                height: 112px;
                position: relative;
                @include flex();
                .header-logo{
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background-color: #FF6600;
                    a{
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        &:before{
                            content:'';
                            @include bgImg(55px,55px,'~@/../public/imgs/mi-logo.png',55px);
                            transition: margin .2s;
                        }
                        &:after{
                            content:'';
                            @include bgImg(55px,55px,'~@/../public/imgs/mi-home.png',55px);
                        }
                        &:hover:before{
                            margin-left: -55px;
                            transition: margin .2s;
                        }
                    }
                }
                .header-menu{
                    display: inline-block;
                    width: 643px;
                    padding-left: 209px;
                    .item-menu{
                        display: inline-block;
                        color: #333333;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        margin-right: 20px;
                        span{
                            cursor: pointer;
                        }
                        &:hover{
                            color:$colorA;
                            .children{
                                height: 220px;
                                display: block;
                                box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.11);
                                border-top: 1px solid #e5e5e5;
                            }
                        }
                        .children{
                            position: absolute;
                            top: 112px;
                            left: 0;
                            width: 1226px;
                            height: 0px;
                            overflow: hidden;
                            transition: height .5s;
                            .product{
                                float: left;
                                width: 16.6%;
                                height: 220px;
                                font-size: 12px;
                                line-height: 12px;
                                text-align: center;
                                position: relative;
                                a{
                                    display: inline-block;
                                }
                                .pro-img{
                                    height: 137px; 
                                }
                                img{
                                    height: 111px;
                                    width: auto;
                                    margin-top: 26px;
                                }
                                .pro-name{
                                    font-weight: bold;
                                    margin-top: 19px;
                                    margin-bottom: 8px;
                                    color: $colorB;
                                }
                                .pro-price{
                                    color: $colorA;
                                }
                                &:before{
                                    content: '';
                                    position: absolute;
                                    top: 28px;
                                    right: 0;
                                    border-left: 2px solid $colorF;
                                    height: 100px;
                                    width: 2px;
                                }
                                &:last-child:before{
                                    display: none;
                                }
                            }
                        }
                    }
                }
                .header-search{
                    width: 319px;
                    .wrapper{
                        height: 50px;
                        border: 1px solid #e0e0e0;
                        display: flex;
                        align-items: center;
                        input{
                            border: none;
                            box-sizing:border-box; 
                            border-right: 1px solid #e0e0e0;
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;
                        }
                        a{
                            @include bgImg(18px,18px,'~@/../public/imgs/icon-search.png');
                            margin-left: 17px;
                        }
                    }
                }
            }
        }
    }
</style>