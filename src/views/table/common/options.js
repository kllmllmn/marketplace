export const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    hiddenColumn: "1212",
    hiddenDialogRow: "哈哈哈",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    hiddenColumn: "1212",
    hiddenDialogRow: "哈哈哈",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    hiddenColumn: "1212",
    hiddenDialogRow: "哈哈哈",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    hiddenColumn: "1212",
    hiddenDialogRow: "哈哈哈",
  },
];

export const columns = [
  {
    type: "index",
  },
  {
    type: "selection",
  },
  {
    label: "日期",
    prop: "date",
    sortable: true,
    showOverflowTooltip: false,
    rewritePlaceholder: "日期（YYYY-MM-DD HH:mm:ss）",
  },
  {
    label: "姓名",
    prop: "name",
    required: true,
  },
  {
    label: "地址",
    prop: "address",
    // showOverflowTooltip: false,
  },
  {
    label: "隐藏列",
    prop: "hiddenColumn",
    isShow: false,
    defaultVal: "我是默认值",
  },
  {
    label: "隐藏dialog行",
    prop: "hiddenDialogRow",
    // hidden: true,
  },
  {
    label: "操作",
    prop: "operate",
  },
];
// let columns1 = [];
// columns1.length = 100;
// columns1.fill({});
// let c = columns1.map((item, index) => {
//   return {
//     label: index,
//     prop: index,
//   };
// });
// c.push({
//   label: "操作",
//   prop: "operate",
// });
// // console.log(c);
// export const columns = c;
