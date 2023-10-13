<script lang="ts" setup>
import {ref} from 'vue'
import {Document, Menu as IconMenu, Reading, Share} from '@element-plus/icons-vue'
import AsyncCompent from "../compenment/AsyncCompent.vue";
import {useRoute, useRouter} from "vue-router";

const route = ref(useRoute().path.substring(9))

const router = useRouter()
const exit = () => {
  document.cookie=""
  router.push('/')
}
</script>


<template>
  <el-container>
    <el-aside
        style="width: 150px">
      <el-menu
          router
          :default-active="route"
          class="el-menu-vertical-demo"
          :collapse="false">

        <el-menu-item class="title-icon" style="opacity: 1;" disabled>
          <span>1up 's 窝</span>
<!--          <template #title>1up 's 窝</template>-->
        </el-menu-item>

        <el-menu-item index="summary">
          <el-icon>
            <icon-menu/>
          </el-icon>
          <template #title>概述</template>
        </el-menu-item>

        <el-menu-item index="blog">
          <el-icon>
            <Document/>
          </el-icon>
          <template #title>博客管理</template>
        </el-menu-item>

        <el-menu-item index="comment">
          <el-icon>
            <Comment/>
          </el-icon>
          <template #title>评论管理</template>
        </el-menu-item>

        <el-menu-item index="board">
          <el-icon>
            <Reading/>
          </el-icon>
          <template #title>留言管理</template>
        </el-menu-item>

        <el-menu-item index="friend">
          <el-icon>
            <Share/>
          </el-icon>
          <template #title>友链管理</template>
        </el-menu-item>


        <el-button @click="exit" class="absolute left-0 bottom-0 m-5" type="danger">退出登录</el-button>
      </el-menu>
    </el-aside>
    <el-main>
      <AsyncCompent>
        <router-view></router-view>
      </AsyncCompent>
    </el-main>
  </el-container>

</template>


<style lang="less">
.el-menu-vertical-demo {
  height: 100vh;
}


.el-menu-item:first-child {
  margin-bottom: 10px;
}

.title-icon {
  font-size: 20px;
  border-bottom: 1px solid gray;
}

//.el-menu-item:nth-child(n+2) {
//  margin-right: 10px;
//}
</style>
