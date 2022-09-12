const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // configureWebpack: {
  //   plugins: [
  //     new webpack.ProvidePlugin({
  //       jQuery: "jquery",
  //       $: "jquery"
  //     })
  //   ]
  // }
})
