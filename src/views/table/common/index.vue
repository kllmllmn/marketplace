<template>
  <STableList :="sTableProps" ref="sTableRef">
    <template #operate="scope">
      <el-link
        type="primary"
        @click="handleOperate({ type: 'see', row: scope.row, title: '查看' })"
        >查看</el-link
      >
    </template>
  </STableList>
</template>

<script setup>
import STableList from "@/components/STableList/index.vue";
import { tableData, columns } from "./options";
import { reactive, ref } from "vue";
const sTableProps = reactive({
  propsTableData: tableData,
  columns,
});
const sTableRef = ref();
const handleOperate = ({ type, row, index, title }) => {
  sTableRef.value.openDialog({ type, row, index, title });
};
</script>

<style scoped lang="less"></style>
