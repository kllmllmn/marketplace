import { nanoid } from "nanoid";

export const menuList = [
  {
    id: nanoid(),
    name: "home",
    path: "home",
    text: "首页",
    children: [],
  },
  {
    id: nanoid(),
    name: "echarts",
    path: "echarts",
    text: "图表",
    children: [],
  },
  {
    id: nanoid(),
    name: "videos",
    path: "videos",
    text: "影视",
    children: [
      {
        id: nanoid(),
        name: "animation",
        path: "videos/animation",
        text: "动画",
        children: [],
      },
    ],
  },
  {
    id: nanoid(),
    name: "gallery",
    path: "gallery",
    text: "画廊",
    children: [
      {
        id: nanoid(),
        name: "gallery/preview",
        path: "gallery/preview",
        text: "预览",
        children: [],
      },
    ],
  },
  {
    id: nanoid(),
    name: "editor",
    path: "editor",
    text: "编辑器",
    children: [],
  },
  {
    id: nanoid(),
    name: "music",
    path: "music",
    text: "音乐",
    children: [
      {
        id: nanoid(),
        name: "music/kwDownload",
        path: "music/kwDownload",
        text: "kwDownload",
        children: [
          {
            id: nanoid(),
            name: "music/kwDownload/2023",
            path: "music/kwDownload/2023",
            text: "2023",
            children: [],
          },
          {
            id: nanoid(),
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
    id: nanoid(),
    name: "tools",
    path: "tools",
    text: "工具集",
    children: [
      {
        id: nanoid(),
        name: "tools/e-signature",
        path: "tools/e-signature",
        text: "电子签名",
        children: [],
      },
    ],
  },
  {
    id: nanoid(),
    name: "table",
    path: "table",
    text: "表格",
    children: [
      {
        id: nanoid(),
        name: "table/common",
        path: "table/common",
        text: "普通表格",
        children: [],
      },
    ],
  },
];
