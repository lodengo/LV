<template>
  <div>
    <h1>{{ title }}</h1>    
    <p>
      vue组件代码分三个部分:
      <br> template模板部分
      <br> 只能有一个顶层节点
      <br> script部分，data选项应该是 函数返回对象，返回对象的属性可以在template部分做插值
      <br> export default? 箭头函数？
      <br> style 部分， 样式， 加scoped属性限制css只应用到当前组件 尝试去掉scoped     
      <br> 试试在console里写$vm0.title = 'abc'
    </p>
  </div>
 
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      title: 'hello world'
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
}
</style>
