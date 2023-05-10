## sTable columns 配置

> columns = [
>
> {
>
> type: "index",
>
> },
>
> {
>
> type: "selection",
>
> },
>
> {
>
> label: "日期",
>
> prop: "date",
>
> sortable: true,
>
> showOverflowTooltip: false,
>
> },
>
> {
>
> label: "姓名",
>
> prop: "name",
>
> },
>
> {
>
> label: "地址",
>
> prop: "address",
>
> },
>
> ];

| 属性名              | 说明                                      | 默认值  |
| ------------------- | ----------------------------------------- | ------- |
| type                | 表格序号与多选列                          |         |
| label               | 表头显示的标题                            |         |
| prop                | 字段名称 对应列内容的字段名               |         |
| sortable            | 排序                                      |         |
| showOverflowTooltip | 当内容过长被隐藏时显示 tooltip            | true    |
| isShow              | 是否在table中隐藏列                       | true    |
| writeType           | dialog中的写入类型(input/select/textarea) | 'input' |
| selectOptions       | writeType为select时的选项配置             |         |
| rewritePlaceholder  | dialog重写提示                            |         |
| defaultVal          | dialog默认写入值                          |         |
| hidden              | 隐藏dialog行                              |         |
| required            | dialog form-item 是否必填                 |         |
| disabled            | dialog 单个form-item disabled             |         |
