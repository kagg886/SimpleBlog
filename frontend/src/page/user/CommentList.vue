<script async setup lang="ts">
import {onMounted, ref, Ref} from "vue";
import {ElMessage} from "element-plus";
import Vditor from "vditor";
import {time2date} from "@/util/tool";
import {CommentInfo} from "@/util/model";
import {request} from "@/util/request";

const id: Ref<number> = defineModel('id', {
  default: -1
})

const page: Ref<number> = defineModel('page', {
  default: 1
})

const pageSize: Ref<number> = defineModel('pageSize', {
  default: 10
})

const data: Ref<Array<CommentInfo>> = ref(await request('blog/comment', {
  id: id.value,
  page: page.value,
  pageSize: pageSize.value
}).then((res => res.data)).catch(() => {
  ElMessage.error('拉取博客评论失败')
  return [] as Array<CommentInfo>
}))

onMounted(() => {
  data.value.map((unit) => {
    Vditor.preview(
        <HTMLDivElement>document.getElementById(`blog_${unit.fromBlogId}_${unit.id}`),
        unit.comment
    )
  })
})

</script>

<template>
  <el-card v-for="unit in data">
    <template #header>
      <div class="flex flex-row items-center">
        <el-avatar shape="square" :size="50" :src="unit.user.avatar"/>
        <div class="user">
          <span>{{ unit.user.name }}</span>
          <p class="text-xs text-gray-500">{{ unit.user.email }}</p>
        </div>
      </div>
    </template>

    <p class="triangle absolute right-0 top-0">#{{unit.id}}</p>
    <p class="absolute right-0 bottom-0 time">{{ time2date(unit.date) }}</p>
    <div :id="`blog_${unit.fromBlogId}_${unit.id}`"></div>
  </el-card>
</template>

<style scoped>
.user {
  margin-left: 10px;
}

.el-card {
  margin-bottom: 15px;
  position: relative;
}

.time {
  font-size: 10px;
}

.triangle {
  font-size: 10px;
  width: 40px;
  height: 40px;
  text-align: end;
  background: conic-gradient(from 90deg at 0 0, pink 0, pink 45deg, transparent 45deg);
}
</style>