<template>
  <div>
    <p v-bind:class="className" v-bind:title="title">class绑定字符串</p>
    <p :class="{ 'color-red': isRed }">:class绑定对象</p>
    <p class="italic" :class="{ 'color-red': isRed }">
      :class 指令也可以与普通的 class attribute 共存
    </p>
    <p :class="classObj1">:class绑定数据对象</p>
    <p :class="[className, isRed ? 'color-red' : '']">:class绑定数组</p>
    <p :style="{ color: activeColor, fontSize: fontSize + 'px' }">
      绑定内联样式
    </p>
    <p :style="styleObject">
      绑定内联样式
    </p>
    <p>=================================</p>
    <p>
      :style 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript
      对象。CSS property 名可以用驼峰式 (camelCase) 或短横线分隔
      (kebab-case，记得用引号括起来) 来命名
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      className: "italic",
      title: "危险勿碰",
      isRed: true,
      classObj1: {
        italic: true,
        "color-red": true,
        "size-18": true,
      },
      activeColor: "red",
      fontSize: 30,
      styleObject: {
        color: "red",
        fontSize: "13px",
      },
    };
  },
};
</script>

<style scoped>
.italic {
  font-style: italic;
}
.color-red {
  color: red;
}
.size-18 {
  font-size: 18px;
}
</style>
