<template>
  <div>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <blog-post
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:post="post"
        v-on:enlarge-text="onEnlargeText"
      ></blog-post>
    </div>
    <p>============================</p>
    <p>
      Prop 是你可以在组件上注册的一些自定义 attribute。当一个值传递给一个 prop
      attribute 的时候，它就变成了那个组件实例的一个
      property。为了给博文组件传递一个标题，我们可以用一个
      <code>props</code> 选项将其包含在该组件可接受的 prop 列表中：
    </p>
    <p>
      一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何
      prop。在上述模板中，你会发现我们能够在组件实例中访问这个值，就像访问
      <code>data</code> 中的值一样。
    </p>
    <h3>监听子组件事件</h3>
    <p>使用 $emit 的第二个参数来来抛出一个特定的值，事件处理函数是一个方法时这个值将会作为第一个参数传入这个方法</p>
  </div>
</template>

<script>
import Vue from "vue";
Vue.component("blog-post", {
  props: ["post"],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button @click="$emit('enlarge-text', 0.1)">Enlarge text</button>
      <div v-html="post.content"></div>
    </div>
  `,
});

export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "My journey with Vue",
          content: `<p>当点击这个按钮时，我们需要告诉父级组件放大所有博文的文本。幸好 Vue 实例提供了一个自定义事件的系统来解决这个问题。父级组件可以像处理 native DOM 事件一样通过 <code>v-on</code> 监听子组件实例的任意事件：</p>`,
        },
        {
          id: 2,
          title: "Blogging with Vue",
          content: `<p>有了这个 <code>v-on:enlarge-text="postFontSize += 0.1"</code> 监听器，父级组件就会接收该事件并更新 <code>postFontSize</code> 的值。</p>`,
        },
        {
          id: 3,
          title: "Why Vue is so fun",
          content: `<p>同时子组件可以通过调用内建的 <a href="../api/#vm-emit"><strong><code>$emit</code></strong> 方法</a>并传入事件名称来触发一个事件：</p>`,
        },
      ],
      postFontSize: 1,
    };
  },
  methods:{
      onEnlargeText(enlargeAmount){
          this.postFontSize += enlargeAmount
      }
  }
};
</script>
