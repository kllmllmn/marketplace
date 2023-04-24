1. **v-for循环一个图片组件，其带有hover属性，这样如果鼠标移入一个图片上，其他的图片也会改变为hover后的样式，如何解决**

   ```js
   1、可以使用Vue.js提供的动态绑定class的方式，根据当前图片是否处于hover状态来绑定不同的class。具体实现可以在v-for循环的每个图片组件上添加一个data属性来标记当前是否hover，然后在绑定class时根据这个data属性的值动态修改class。这样可以让每个图片组件都独立处理hover状态，避免其他图片跟随改变。
   
   2、可以在引用的组件上加hover ，而不是子组件内使用hover
   > 详见 @/layout/components/AvatarList.vue line 7
   ```

   