<template>
  <div>
    <p>可以用 v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码。</p>
    <div id="example-1">
      <button v-on:click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>
    <div id="example-2">
      <!-- `greet` 是在下面定义的方法名 -->
      <button @click="greet(counter, $event)">Greet</button>
    </div>
    <h2>事件修饰符</h2>
    <p>
      Vue.js 为 v-on
      提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。
    </p>
    <ul>
      <li><code>.stop</code></li>
      <li><code>.prevent</code></li>
      <li><code>.capture</code></li>
      <li><code>.self</code></li>
      <li><code>.once</code></li>
      <li><code>.passive</code></li>
    </ul>
    <p>
      使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用
      v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent
      只会阻止对元素自身的点击。
    </p>
    <p>dom事件机制：https://www.cnblogs.com/xiaohuochai/p/5859476.html</p>
    <img
      src="https://images2015.cnblogs.com/blog/740839/201609/740839-20160910153551644-925968915.jpg"
      alt=""
    />
    <div @click="foo">
      <!-- 阻止单击事件继续传播 -->
      <div @click.stop="foo">aaa</div>
      <!-- 提交事件不再重载页面 -->
      <form v-on:submit.prevent="foo">
        <button>submit</button>
      </form>
      <!-- 修饰符可以串联 -->
      <a href="www.baidu.com" v-on:click.stop.prevent="foo">baidu</a>
      <!-- 添加事件监听器时使用事件捕获模式 -->
      <!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
      <div @click.capture="foo">
        <button @click="foo">test</button>
      </div>
    </div>

    <h2>按键修饰符</h2>
    <ul>
      <li><code>.enter</code></li>
      <li><code>.tab</code></li>
      <li><code>.delete</code> (捕获“删除”和“退格”键)</li>
      <li><code>.esc</code></li>
      <li><code>.space</code></li>
      <li><code>.up</code></li>
      <li><code>.down</code></li>
      <li><code>.left</code></li>
      <li><code>.right</code></li>
    </ul>
    <input v-on:keyup.page-down="onkeyup" placeholder="page-down" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    greet(msg, event) {
      alert(msg);
      console.log(event);
    },
    foo(event) {
      let info = {
        冒泡: event.bubbles,
        阶段: ["NONE", "捕获", "抵达", "冒泡"][event.eventPhase],
      };
      console.log(info, event);
    },
    onkeyup(event) {
      console.log(event.key);
    },
  },
};
</script>
