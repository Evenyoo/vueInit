const path=require('path');
const webpack=require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const isDev=process.env.NODE_ENV==='development'  // 判断是否为开发环境
const HTMLPlugin=require('html-webpack-plugin')
const config={
    target:'web',
    //mode: 'development',
    entry:path.join(__dirname,'src/index.js'),// 打包入口文件
    output:{
      filename:'bundle.js', // 打包后的文件名
      path:path.join(__dirname,'dist') // 打包后放到的文件夹
    },
    module:{
      rules:[
       {
        test:/\.vue$/,  // 不是js后缀名需要使用loader
        use:'vue-loader'
       },{
        test:/\.css$/,
        use:['style-loader','css-loader']
       },{
        test:/\.styl$/,
        use:['style-loader','css-loader','stylus-loader']
       },{
        test:/\.(jpg|jpeg|svg|png|gif)$/,
        use:[
         {
          loader:'url-loader',
          options:{ // 处理图片
            limit:1024,
            name:'[name].[ext]' // 自定义文件名
          }
         }
        ]        
       }       
      ]
    },
    plugins:[
      new webpack.DefinePlugin({
          'process.env':{
            NODE_ENV:isDev ? '"development"':'"production"'
          }
      }),
      new VueLoaderPlugin(),
      new HTMLPlugin()
    ]
}

if(isDev){
  config.devtool='#cheap-module-eval-source-map',
  config.devServer={
    host:'0.0.0.0',
    port:8085,
    overlay:{
      errors:true
    },
    hot:true, // 热更新
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )

}


module.exports=config