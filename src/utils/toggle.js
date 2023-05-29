export const set16ToRgb = (str) => {
  // 十六进制颜色代码的正则表达式
  let reg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  // test() 检测str是否匹配十六进制颜色的模式
  if (!reg.test(str)) {
    return;
  }
  // 把字符串中的英文字母都变为小写字母，并将#替换为空（去掉#）
  let newStr = str.toLowerCase().replace(/#/g, "");
  let len = newStr.length;
  if (len == 3) {
    let t = "";
    for (let i = 0; i < len; i++) {
      // slice(start, end) 方法可提取字符串从start（包含） 到 end（不包含）的内容，并以新的字符串返回被提取的部分
      // concat() 方法用于连接两个或多个字符串
      // 将16进制的颜色代码为3位的补齐为6位
      t += newStr.slice(i, i + 1).concat(newStr.slice(i, i + 1));
    }
    newStr = t;
  }
  let arr = [];
  //将字符串分隔，两个两个的分隔
  for (let i = 0; i < 6; i = i + 2) {
    let s = newStr.slice(i, i + 2);
    // parseInt() 函数可解析一个字符串，并返回一个整数
    // 如果 string 以 "0x" 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数。
    arr.push(parseInt("0x" + s));
  }
  // 字符串拼接为rgb格式的颜色代码
  return "rgb(" + arr.join(",") + ")";
};
export const setRgbTo16 = (str) => {
  let reg = /^(rgb|RGB)/;
  if (!reg.test(str)) {
    return;
  }
  // 将str中的数字提取出来放进数组中
  var arr = str.slice(4, str.length - 1).split(",");
  let c = "#";
  for (var i = 0; i < arr.length; i++) {
    // Number() 函数把对象的值转换为数字
    // toString(16) 将数字转换为十六进制的字符表示
    var t = Number(arr[i]).toString(16);
    //如果小于16，需要补0操作,否则只有5位数
    if (Number(arr[i]) < 16) {
      t = "0" + t;
    }
    c += t;
  }
  return c;
};
