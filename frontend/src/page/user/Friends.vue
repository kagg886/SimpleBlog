<script async setup lang="ts">
import {ref, Ref} from "vue";
import {ElMessage} from "element-plus";
import {FriendInfo} from "@/util/model";
import {request} from "@/util/request";

const data: Ref<Array<FriendInfo>> = ref(await request('blog/friends').then((res => res.data)).catch(() => {
  ElMessage.error('拉取友链失败')
  return [] as Array<FriendInfo>
}))

const open = (url: string): void => {
  window.open(url, '_blank')
}
</script>

<template>
  <el-space wrap>
    <el-card v-for="i in data" :key="i" class="box-card" style="width: 250px">
      <template #header>
        <div class="card-header">
          <span>{{ i.title }}</span>
          <el-button type="danger" @click="open(i.link)" class="button" text>Go it!</el-button>
        </div>
      </template>
      <span>{{ i.description }}</span>
    </el-card>
  </el-space>

</template>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>