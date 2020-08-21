<template>
  <div>
    <p>
      v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy
      值的时候被渲染。
    </p>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h2 v-else>Oh no 😢</h2>
    <h3 v-show="awesome">Vue is awesome!</h3>
    <p>
      因为 v-if 是一个指令，所以必须将它添加到一个元素上, 可以把一个 template
      元素当做不可见的包裹元素，并在上面使用 v-if
    </p>
    <template v-if="awesome">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <p>
      可以使用 v-else 指令来表示 v-if 的“else 块” v-else/v-else-if
      元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别,
    </p>
    <div v-if="Math.random() > 0.5">
      Math.random() > 0.5
    </div>
    <div v-else-if="Math.random() > 0.3">
      Math.random() > 0.3
    </div>
    <div v-else>
      小于0.3
    </div>
    <p>
      另一个用于根据条件展示元素的选项是 v-show 指令<br />
      不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show
      只是简单地切换元素的 CSS property display<br />
      一般来说，v-if 有更高的切换开销，而 v-show
      有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show
      较好；如果在运行时条件很少改变，则使用 v-if 较好。
    </p>

    <h1>用 key 管理可复用的元素</h1>
    <p>
      Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。
      添加一个具有唯一值的 key attribute
      来表达“这两个元素是完全独立的，不要复用它们”
    </p>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input" />
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" />
    </template>
    <br />
    <button @click="toggleLoginType">toggle login type</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awesome: false,
      loginType: "username",
    };
  },
  methods: {
    toggleLoginType() {
      this.loginType === "username"
        ? (this.loginType = "email")
        : (this.loginType = "username");
    },
  },
};
</script>
