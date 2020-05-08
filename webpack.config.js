const path=require('path');
/**
 * [hash]
 * [chunkhash]
 * [id]
 * [name]
 * [query]
 * [contnenthash]
 */


module.exports={

    mode:'development',
    // entry:'./src/index.js',
    entry:{
     main:'./src/app.js'
    },
    output:{
      path:path.resolve(__dirname,"dist"),
        // filename:'main.js'
        filename:'[name].js',
        publicPath:'/dist/',
        libraryTarget:'umd', //var,amd,common.js,umd
        library:'printer_setup',
        umdNamedDefine: true,
        libraryExport: 'default' 
    },
    devServer:{
        port:3236,
        contentBase:path.join(__dirname,'')
    }


}
