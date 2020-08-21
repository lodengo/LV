<template>
  <div>
    <p>文本</p>
    <input value="abc" v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
    <p>多行文本 在文本区域插值并不会生效，应用 v-model 来代替。</p>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ Mmessage }}</p>
    <br />
    <textarea v-model="Mmessage" placeholder="add multiple lines"></textarea>
    <br />
    <p>单个复选框，绑定到布尔值：</p>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <p>多个复选框，绑定到同一个数组：</p>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br />
    <span>Checked names: {{ checkedNames }}</span>
    <p>单项按钮</p>
    <div id="example-4">
      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>
      <br />
      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
      <br />
      <span>Picked: {{ picked }}</span>
    </div>
    <p>选择框 单选</p>
    <div id="example-5">
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
    <p>多选 绑定到数组</p>
    <div id="example-6">
      <select v-model="selecteds" multiple style="width: 50px;">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br />
      <span>Selected: {{ selecteds }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hello",
      Mmessage: `aa
      bb`,
      checked: true,
      checkedNames: [],
      picked: "",
      selected: "A",
      selecteds: ['A','C']
    };
  },
};
</script>
