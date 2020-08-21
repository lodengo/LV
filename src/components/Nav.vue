<template>
  <div id="Nav">
    <el-row class="tac">
      <el-col>
        <el-menu router>
          <el-menu-item v-for="(item, i) in routes" :key="i" :index="item.path">
            <span>{{ item.path.replace("/", "") }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { routes } from "../router";
export default {
  name: "Nav",
  data() {
    return {
      routes,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    flatRoutes() {},
  },
};
</script>
