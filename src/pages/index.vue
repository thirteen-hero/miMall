<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <ul v-for="(item,index) in menuList" :key="index">
                                    <li v-for="(sub,id) in item" :key="id">
                                        <a :href="sub?'/#/product/'+sub.id:''">
                                            <img :src="sub?sub.img:'/static/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                        </li>
                    </ul>
                </div>
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in slideList" :key="index"> 
                        <a :href="'/#/product/'+item.id"><img :src="item.img"></a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box"></div>
            <div class="banner"></div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>
<script>
import ServiceBar from './../components/ServiceBar'
import {Swiper,SwiperSlide,directive} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name:'index',
    components:{
        Swiper,
        SwiperSlide,
        ServiceBar
    },
    directives:{
        swiper:directive
    },
    data(){
        return{
            swiperOption:{
                autoplay:true,
                loop:true,
                effect:'cube', 
                cubeEffect:{
                    slideShows:true,
                    shadow:true,
                    shadowOffset:100,
                    shadowScale:0.6
                },
                pagination:{
                    el:'.swiper-pagination',
                    clickable:true
                },
                navigation:{
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev'
                }
            },
            slideList:[
                {
                    id:'42',
                    img:'/static/imgs/slider/slide-1.jpg'
                },
                {
                    id:'45',
                    img:'/static/imgs/slider/slide-2.jpg'
                },
                {
                    id:'46',
                    img:'/static/imgs/slider/slide-3.jpg'
                },
                {
                    id:'42',
                    img:'/static/imgs/slider/slide-4.jpg'
                },
                {
                    id:'42',
                    img:'/static/imgs/slider/slide-5.jpg'
                }
            ],
            menuList:[
                [
                    {
                        id:30,
                        img:'/static/imgs/item-box-1.png',
                        name:'小米CC9'
                    },{
                        id:31,
                        img:'/static/imgs/item-box-2.png',
                        name:'小米8青春版'
                    },{
                        id:32,
                        img:'/static/imgs/item-box-3.jpg',
                        name:'Redmi K20 Pro'
                    },{
                        id:33,
                        img:'/static/imgs/item-box-4.jpg',
                        name:'移动4G专区'
                    }
                ],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]
            ]
        }
    }
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
    .index{
        .swiper-box{
            position: relative;
            .nav-menu{
                position: absolute;
                width: 264px;
                height: 451px;
                left: 0;
                top: 0;
                z-index: 9;
                padding: 26px 0;
                background-color: #55585a7a;
                box-sizing: border-box;
                .menu-wrap{
                    .menu-item{
                        height: 50px;
                        line-height: 50px;
                        position: relative;
                        a{
                            font-size: 16px;
                            color: #ffffff;
                            padding-left: 30px;
                            display: block;
                        }
                        &:after{
                            content: '';
                            @include bgImg(10px,15px,'/static/imgs/icon-arrow.png');
                            position: absolute;
                            right: 30px;
                            top: 17.5px;
                        }
                        &:hover{
                        background-color: $colorA;
                        .children{
                            display: block;
                            }
                        }
                        .children{
                            width: 962px;
                            height: 451px;
                            background-color: $colorG;
                            position: absolute;
                            top: -26px;
                            left: 264px;
                            display: none;
                            ul{
                                display: flex;
                                justify-content: space-between;
                                height: 75px;
                                li{
                                    height: 75px;
                                    line-height: 75px;
                                    flex: 1;
                                    padding-left: 23px;
                                    a{
                                    color: $colorB;
                                    font-size: 14px;
                                        img{
                                        width: 42px;
                                        height: 35px;
                                        vertical-align: middle;
                                        margin-right: 40px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .swiper-container{
                height: 451px;
                .swiper-button-prev{
                    left: 274px;
                }
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>