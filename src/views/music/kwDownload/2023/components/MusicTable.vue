<template>
  <STable :columns="columns" :propsTableData="tableData">
    <template #music="scope">
      <audio controls :src="src">
        <!-- <a href="/media/cc0-audio/t-rex-roar.mp3"> Download audio </a> -->
      </audio>
    </template>
  </STable>
</template>

<script setup>
import STable from "@/components/STableList/index.vue";
import { columns, tableData } from "./options";
import src from "@/assets/music/闻人听書_-虞兮叹.mp3";
</script>

<style scoped lang="less"></style>
