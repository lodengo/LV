<template>
  <div>
    <p>
      当你把一个普通的 JavaScript 对象传入 Vue 实例作为
      <code>data</code> 选项，Vue 将遍历此对象所有的 property，并使用
      <a
        href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"
        target="_blank"
        rel="noopener"
        ><code>Object.defineProperty</code></a
      >
      把这些 property 全部转为
      <a
        href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#定义_getters_与_setters"
        target="_blank"
        rel="noopener"
        >getter/setter</a
      >。<code>Object.defineProperty</code> 是 ES5 中一个无法 shim
      的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。
    </p>
    <p>
      这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue
      能够追踪依赖，在 property
      被访问和修改时通知变更。这里需要注意的是不同浏览器在控制台打印数据对象时对
      getter/setter 的格式化并不同，所以建议安装
      <a
        href="https://github.com/vuejs/vue-devtools"
        target="_blank"
        rel="noopener"
        >vue-devtools</a
      >
      来获取对检查数据更加友好的用户界面。
    </p>
    <p>
      每个组件实例都对应一个
      <strong>watcher</strong> 实例，它会在组件渲染的过程中把“接触”过的数据
      property 记录为依赖。之后当依赖项的 setter 触发时，会通知
      watcher，从而使它关联的组件重新渲染。
    </p>
    <p><img src="https://cn.vuejs.org/images/data.png" alt="data" /></p>
  </div>
</template>

<style scoped>
.content p,
.content ul,
.content ol {
  line-height: 1.6em;
  margin: 1.2em 0 -1.2em;
  padding-bottom: 1.2em;
  position: relative;
  z-index: 1;
}
p {
  word-spacing: 0.05em;
}
</style>
