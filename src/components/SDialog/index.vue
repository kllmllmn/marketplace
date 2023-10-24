<template>
  <div>
    <el-dialog
      v-model="centerDialogVisible"
      :title="dialogTitle"
      width="50%"
      align-center
      center
      draggable
      :before-close="handleClose"
      class="wrap"
    >
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="auto"
        :disabled="disabled"
      >
        <template v-for="k in Object.keys(formSourceData)" :key="k">
          <template v-if="formSourceData[k].writeType == 'input'">
            <el-form-item
              :label="formSourceData[k]['label']"
              :prop="k"
              v-show="!formSourceData[k].hidden"
            >
              <el-input
                v-model="form[k]"
                :placeholder="getPlaceHolder(formSourceData[k])"
              />
            </el-form-item>
          </template>
          <template v-else-if="formSourceData[k].writeType == 'select'">
            <el-form-item
              :label="formSourceData[k]['label']"
              :prop="k"
              v-show="!formSourceData[k].hidden"
            >
              <el-select
                v-model="form[k]"
                :placeholder="getPlaceHolder(formSourceData[k])"
              >
                <el-option
                  v-for="(item, index) in formSourceData[k].selectOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </template>
          <template v-else-if="formSourceData[k].writeType == 'textarea'">
            <el-form-item
              :label="formSourceData[k]['label']"
              :prop="k"
              v-show="!formSourceData[k].hidden"
            >
              <el-input
                v-model="form[k]"
                type="textarea"
                :placeholder="getPlaceHolder(formSourceData[k])"
              />
            </el-form-item>
          </template>
        </template>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClose">取消</el-button>
          <el-button type="primary" @click="submit"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref, computed, watchEffect, reactive } from "vue";
import { ElMessage } from "element-plus";
import _l from "lodash";
const props = defineProps({
  columns: {
    type: Array,
    default: () => [],
  },
});
const formRef = ref();
// 初步过滤序号列、多选列、操作列;添加writeType默认值为'input'
const filterColumns = computed(() => {
  let tmpData = props.columns.filter((item) => {
    return !item.type && item.prop != "operate";
  });
  tmpData = tmpData.map((item) => {
    return {
      ...item,
      writeType: item.writeType ?? "input",
    };
  });
  return tmpData;
});
const formSourceData = computed(() => {
  let obj = {};
  filterColumns.value.forEach((item) => {
    obj[item.prop] = {
      ...item,
    };
  });
  return obj;
});

const getPlaceHolder = (item) => {
  let arr = ["textarea", "input"];
  if (arr.includes(item.writeType)) {
    return "请输入" + (item.rewritePlaceholder ?? item.label);
  }
  if (item.writeType == "select") {
    return "请选择" + (item.rewritePlaceholder ?? item.label);
  }
};

// 数据源
const form = ref({});
let formData = {};
filterColumns.value.forEach((item) => {
  formData[item.prop] = item.defaultVal;
});
form.value = formData;
// watchEffect(() => {
// });

// rules提示
const rules = computed(() => {
  let obj = {};
  filterColumns.value.forEach((item) => {
    obj[item.prop] = [
      {
        required: item.required,
        message: getPlaceHolder(item),
        trigger: ["change", "blur"],
      },
    ];
  });
  console.log(obj);
  return obj;
});

const centerDialogVisible = ref(false);

const handleClose = () => {
  centerDialogVisible.value = false;
  formRef.value.resetFields();
};
const dialogTitle = ref();
const disabled = ref(false);
const openDialog = ({ type, row, index, title }) => {
  dialogTitle.value = title ?? type;
  if (type == "see") {
    disabled.value = true;
  }
  // console.log(row);
  form.value = row;
  centerDialogVisible.value = true;
};
const emit = defineEmits(["submit"]);
const submit = async () => {
  if (!formRef.value) return;
  await formRef.value.validate((valid, fields) => {
    if (valid) {
      console.log("submit!", form.value);
      emit("submit", _l.cloneDeep(form.value));
    } else {
      console.log("error submit!", fields);
      ElMessage.warning(fields[Object.keys(fields)[0]][0]["message"]);
    }
  });
};
defineExpose({ openDialog });
</script>
<style scoped lang="less">
// 使用:deep()改变子组件的样式需要子组件有一个父节点
:deep(.el-dialog__body) {
  max-height: 70vh;
  overflow-y: auto;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
