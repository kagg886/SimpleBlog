<script async setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {ElMessage} from "element-plus";
import {Comment, UploadFilled} from "@element-plus/icons-vue";

import {BlogInfo} from "@/util/model";
import {request} from "@/util/request";
import 'vditor/dist/index.css';
import ShareDetail from "@/compenment/ShareDetail.vue";
import {StarFilled} from "@element-plus/icons-vue";
import AsyncCompent from "@/compenment/AsyncCompent.vue";
import CommentDrawer from "./CommentList.vue";
import MarkDown from "@/compenment/MarkDown.vue";
import {Ref, ref} from "vue";

const id: number = Number(useRoute().params.id)
const router = useRouter()
const data: Ref<BlogInfo> = ref(
    await request('blog/info', {
      id: id
    })
        .then((v) => v.data)
        .catch(() => {
          ElMessage.error('拉取博客详情失败')
          router.push('/error')
          return {} as BlogInfo
        })
)


const showComment: Ref<Boolean> = ref(false)


const input: Ref<String> = ref('')
</script>

<template>
  <div>
    <h1 class="text-5xl text-center">{{ data.title }}</h1>
    <div>
      <ShareDetail @click-comment="showComment = true" class="mt-5" :data="data.share" style="text-align: center"/>
    </div>
    <el-divider>
      <el-icon>
        <star-filled/>
      </el-icon>
    </el-divider>
  </div>

  <MarkDown preview v-model:source="data.source" :options="{
    outline: {
      enable: true,
      position: 'left'
    }
  }"/>

  <el-drawer v-model="showComment" title="良言一句三冬暖，恶语伤人六月寒">
    <AsyncCompent>
      <CommentDrawer></CommentDrawer>
    </AsyncCompent>

    <div class="absolute bottom-0 left-0 w-full">
      <el-input
          show-word-limit
          autosize
          maxlength="300"
          v-model="input"
          size="large"
          placeholder="Please input"
          class="input-with-select">
        <template #prepend>
          <el-icon><Comment/></el-icon>
        </template>
        <template #append>
          <el-button @click="ElMessage.success('施工中')" autofocus :icon="UploadFilled" >发送</el-button>
        </template>
      </el-input>
    </div>
  </el-drawer>
<!--  <ShowComment  v-model:visible="showComment"/>-->
</template>

<style scoped>
.el-drawer__body {
  position: relative;
}
</style>