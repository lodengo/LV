<template>
  <div>
    <h2>文本插值</h2>
    <p>变量:{{ num }}</p>
    <p>表达式:{{ 5 + 10 }}</p>
    <!-- <p>{{ var a = 1 }}</p> -->
    <p>三目运算符:{{ true ? 15 : 10 }}</p>
    <!-- <p>{{ if (true) { return 15 } }}</p> -->
    <p>Math.random: {{ Math.random() }}</p>
    <p>函数:{{ getNum() }}</p>
    <p>匿名函数:{{ (() => 5 + 10)() }}</p>
    <p>对象:{{ { num: 15 } }}</p>
    <p>函数对象:{{ getNum }}</p>
    <p>html代码(表达式):{{'<button>test</button>'}}</p>
    <p>html代码(变量):{{ html }}</p>
    <p v-html="html"></p>
    <p>过滤器:{{ msg | capitalize }}</p>
    <p>表达式2:{{ msg.charAt(0).toUpperCase() + msg.slice(1) }}</p>
    <p>计算属性:{{ capitalizedMsg }}</p>
    <p>方法:{{ capitalizedMsg2() }}</p>
    <p>方法now:{{ now2() }}</p>
    <p>计算属性now:{{ now }}</p>
    <p>==============================</p>
    <p>v-html 输出原始html</p>
    <p>
      你的站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 XSS
      攻击。请只对可信内容使用 HTML 插值，绝不要对用户提供的内容使用插值。
    </p>
    <p>
      js表达式会在所属 Vue 实例的数据作用域下作为 JavaScript
      被解析，有个限制就是，每个绑定都只能包含单个表达式。
    </p>
    <p>
      模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date
      。你不应该在模板表达式中试图访问用户定义的全局变量。
    </p>
    <p>
      过滤器<br />
      Vue.js
      允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：双花括号插值和
      v-bind 表达式 (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript
      表达式的尾部，由“管道”符号指示：<br />
      在创建 Vue
      实例之前全局定义过滤器，当全局过滤器和局部过滤器重名时，会采用局部过滤器。
    </p>
    <br />
    <p>
      计算属性：<br />
      模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。
      所以，对于任何复杂逻辑，你都应当使用计算属性。<br />
      vs方法：计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 15,
      msg: "helloworld",
      html: "<button>test</button>",
    };
  },
  methods: {
    getNum() {
      return this.num;
    },
    capitalizedMsg2() {
      return this.msg.charAt(0).toUpperCase() + this.msg.slice(1);
    },
    now2: function() {
      return Date.now();
    }
  },
  filters: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  computed: {
    capitalizedMsg() {
      return this.msg.charAt(0).toUpperCase() + this.msg.slice(1);
    },
    now: function() {
      return Date.now();
    },
  },
};
</script>
