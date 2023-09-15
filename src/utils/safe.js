export const filterHtml = function (input) {
  if (typeof input !== "string") return "";
  if (!input) return "";
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
};
/**
 *@description 正常的高亮
 *@param {String} content 替换高亮的内容
 *@param {String} replaceStr 高亮的文本
 *@return {String} html string
 */
export const replaceHtml = (content, replaceStr) => {
  let safeContent = filterHtml(content);
  let safeReplaceStr = filterHtml(replaceStr);
  console.log(
    "🚀 ~ file: safe.js:17 ~ replaceHtml ~ safeContent:",
    safeContent,
    safeReplaceStr
  );
  return safeContent.replace(safeReplaceStr, (v) => {
    return `<span style='color:skyblue'>${v}</span>`;
  });
};
