/* eslint-env node */
module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  //  "off" or 0 - 关闭规则
  // "warn" or 1 - 将规则视为一个警告（不会影响退出码）
  // "error" or 2 - 将规则视为一个错误 (退出码为1)
  rules: {
    "vue/no-unused-vars": "off",
    "no-unused-vars": "off",
    "vue/multi-word-component-names": "off",
  },
};
