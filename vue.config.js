module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/activity':'https://www.imooc.com', 
            changeOrigin:true,
            pathRewrite:{
                '/activity':'/activity'
            }
        }
        //使用自己的接口去转发别人的服务
        //原本的url为 'https://www.imooc.com/activity/servicetime'
        //通过nginx代理转发为 'http://localhost:8080/activity/servicetime?callback=_jp0'
    }
} 