import { ref } from "vue";

export const useTable = (props) => {
  const tableData = ref([]);
  if (props.propsTableData?.length) {
    tableData.value = props.propsTableData;
  }

  return { tableData };
};
