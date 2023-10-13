<script setup lang="ts">
import {onErrorCaptured, ref} from "vue";
import {ElMessage} from "element-plus";
import AsyncCompent from "../compenment/AsyncCompent.vue";
import {useRoute} from "vue-router";

onErrorCaptured((err: string = "未知错误") => {
  ElMessage.error(err)
  return false
})
const route = ref(useRoute().path)
</script>

<template>
  <el-container>
    <el-header>
      <el-menu
          router
          :default-active="route"
          class="el-menu-demo"
          mode="horizontal">
        <el-menu-item class="title-icon" disabled>
          <span>1up 's 窝</span>
        </el-menu-item>

        <el-menu-item index="/">
          博客
        </el-menu-item>
        <el-menu-item index="/comment">
          评论
        </el-menu-item>
        <el-menu-item index="/board">
          留言
        </el-menu-item>
        <el-menu-item index="/friends">
          友链
        </el-menu-item>

        <div class="flex-grow"/>

        <el-menu-item index="/backend/login">后台登录</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <AsyncCompent>
        <router-view></router-view>
      </AsyncCompent>
    </el-main>
  </el-container>
  <el-backtop :right="50" :bottom="50"/>
</template>

<style scoped>

.title-icon {
  font-size: 20px;
  opacity: 1;
}

.el-menu-item:first-child {
  margin-right: 50px;
}

.el-menu-item:nth-child(n+2) {
  margin-right: 10px;
}
</style>