<template>
  <div>
    <base-layout>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </base-layout>
    <p>=======================</p>
    <p>
      slot 元素有一个特殊的 attribute：name。这个 attribute
      可以用来定义额外的插槽： 一个不带 name 的 slot
      出口会带有隐含的名字“default”。
      <br />在向具名插槽提供内容的时候，我们可以在一个 template 元素上使用
      v-slot 指令，并以 v-slot 的参数的形式提供其名称： 现在 template
      元素中的所有内容都将会被传入相应的插槽。任何没有被包裹在带有 v-slot 的
      template 中的内容都会被视为默认插槽的内容。
    </p>
  </div>
</template>

<script>
import Vue from "vue";
Vue.component("base-layout", {
  template: `
    <div class="container">
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
    </div>
  `,
});
export default {
  data() {
    return {};
  },
};
</script>
