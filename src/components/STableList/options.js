export const sTableProps = {
  // 父组件传来的tableData
  propsTableData: {
    type: Array,
    default: () => [],
  },
  columns: {
    type: Array,
    default: () => [],
  },
};
