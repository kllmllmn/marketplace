import { ref, computed } from "vue";

export const useTable = (props) => {
  // const tableData = ref([]);
  const pageSizes = [10, 20, 30, 40];
  const currentPage = ref(1);
  const pageSize = ref(pageSizes[0]);
  const total = ref(0);

  if (props.propsTableData?.length) {
    total.value = props.propsTableData.length;
  }
  const tableData = computed(() => {
    // 前端分页
    return props.propsTableData.slice(
      (currentPage.value - 1) * pageSize.value,
      currentPage.value * pageSize.value
    );
  });

  const handleSizeChange = (val) => {
    pageSize.value = val;
  };
  const handleCurrentChange = (val) => {
    currentPage.value = val;
  };
  return {
    tableData,
    currentPage,
    pageSize,
    total,
    pageSizes,
    handleSizeChange,
    handleCurrentChange,
  };
};
