import { nanoid } from "nanoid";
// 使用nanoid会导致热更新失效
export const menuList = [
  {
    id: "0",
    name: "home",
    path: "home",
    text: "首页",
    children: [],
  },
  {
    id: "1",
    name: "echarts",
    path: "echarts",
    text: "图表",
    children: [],
  },
  {
    id: "2",
    name: "videos",
    path: "videos",
    text: "影视",
    children: [
      {
        id: "2-0",
        name: "animation",
        path: "videos/animation",
        text: "动画",
        children: [],
      },
    ],
  },
  {
    id: "3",
    name: "gallery",
    path: "gallery",
    text: "画廊",
    children: [
      {
        id: "3-0",
        name: "gallery/preview",
        path: "gallery/preview",
        text: "预览",
        children: [],
      },
    ],
  },
  {
    id: "4",
    name: "editor",
    path: "editor",
    text: "编辑器",
    children: [],
  },
  {
    id: "5",
    name: "music",
    path: "music",
    text: "音乐",
    children: [
      {
        id: "5-0",
        name: "music/kwDownload",
        path: "music/kwDownload",
        text: "kwDownload",
        children: [
          {
            id: "5-0-0",
            name: "music/kwDownload/2023",
            path: "music/kwDownload/2023",
            text: "2023",
            children: [],
          },
          {
            id: "5-0-1",
            name: "music/kwDownload/test01",
            path: "music/kwDownload/test01",
            text: "test01",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "6",
    name: "tools",
    path: "tools",
    text: "工具集",
    children: [
      {
        id: "6-0",
        name: "tools/e-signature",
        path: "tools/e-signature",
        text: "电子签名",
        children: [],
      },
    ],
  },
  {
    id: "7",
    name: "table",
    path: "table",
    text: "表格",
    children: [
      {
        id: "7-0",
        name: "table/common",
        path: "table/common",
        text: "普通表格",
        children: [],
      },
    ],
  },
  {
    id: "8",
    name: "css",
    path: "css",
    text: "css",
    children: [
      {
        id: " 8-0",
        name: "css/1",
        path: "css/1",
        text: "css1",
        children: [],
      },
    ],
  },
];
