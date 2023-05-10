<template>
  <div>
    <el-table :data="tableData" style="width: 100%" stripe border>
      <template v-for="(item, index) in columns" :key="index">
        <el-table-column
          type="index"
          label="序号"
          width="80"
          v-if="item.type == 'index'"
        />
        <el-table-column
          type="selection"
          width="55"
          v-else-if="item.type == 'selection'"
        />
        <!-- ?? 空值合并 -->
        <!-- table中的td，diplay:table-cell,权限高于display:none,导致v-show失效。这里使用v-if-->
        <template v-else>
          <el-table-column
            v-if="item.isShow ?? true"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            :sortable="item.sortable"
            :show-overflow-tooltip="
              item.showOverflowTooltip ?? item.prop != 'operate'
            "
          >
            <template #default="scope">
              <!-- 具名作用域插槽 -->
              <slot :name="item.prop" :row="scope.row" :index="scope.$index">{{
                scope.row[item.prop]
              }}</slot>
            </template>
          </el-table-column>
        </template>
      </template>
    </el-table>
    <SDialog
      ref="sDialogRef"
      :columns="columns"
      @submit="handleDialogSubmit"
    ></SDialog>
  </div>
</template>

<script setup>
import { sTableProps } from "./options";
import { useTable } from "./useTable";
import SDialog from "@/components/SDialog/index.vue";
import { ref } from "vue";

const props = defineProps(sTableProps);
const { tableData } = useTable(props);
const sDialogRef = ref();

const openDialog = ({ type, row, index, title }) => {
  sDialogRef.value.openDialog({ type, row, index, title });
};
const handleDialogSubmit = (val) => {
  console.log("🚀 ~ file: index.vue:57 ~ handleDialogSubmit ~ val:", val);
};
defineExpose({ openDialog });
</script>
