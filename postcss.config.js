// 参考 https://blog.csdn.net/wangping146/article/details/126436251
// 使用这个插件后，它会自动处理你的 CSS 文件，将像素单位转换为视口单位，并根据设备的屏幕宽度进行适配。这意味着无论设备的宽度如何，你的元素都会保持适当的尺寸和位置。
module.exports = {
  plugins: {
    // ...
    "postcss-px-to-viewport": {
      // options
      unitToConvert: "px", // 要转化的单位
      viewportWidth: 1920, // UI设计稿的宽度
      viewportHeight: 1080,
      unitPrecision: 3, // 转换后的精度，即小数点位数
      propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
      selectorBlackList: [], // 指定不转换为视窗单位的类名，
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
      exclude: /(\/|\\)(node_modules)(\/|\\)/, // 设置忽略文件，用正则做目录名匹配
      //   landscape: false, // 是否处理横屏情况
    },
  },
};
