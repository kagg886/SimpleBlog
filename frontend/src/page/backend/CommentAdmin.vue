<script setup lang="ts">
import {ref, Ref} from "vue";
import {CommentInfo} from "@/util/model.ts";
import {request} from "@/util/request.ts";
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";
import MarkDown from "@/compenment/MarkDown.vue";
import {NotNull} from "@/util/tool.ts";

const router = useRouter()

const data: Ref<Array<CommentInfo>> = ref(await request('blog/comment', {
  id: -1,
  page: 1,
  pageSize: 100
}).then((res => res.data)).catch((ex: string) => {
  ElMessage.error(ex);
  router.push('backend/login')
  return [] as CommentInfo[]
}))

/*
export type CommentInfo = {
  id: number
  fromBlogId: number
  title?: string
  comment: string
  date: number
  user: User
}
*/
const dialog = ref(false)
const commentAdmin: Ref<string> = ref('')
const openDialog = (id: number) => {
  data.value.filter((v) => v.id === id).forEach((b) => commentAdmin.value = b.comment)
  dialog.value = true
}

</script>

<template>

  <el-dialog destroy-on-close v-model="dialog" title="查看评论">
    <MarkDown preview v-model:source="commentAdmin"/>
  </el-dialog>


  <el-table :data="data" style="width: 100%">
    <el-table-column prop="id" label="id" width="150"></el-table-column>
    <el-table-column prop="fromBlogId" label="博客id" width="150"></el-table-column>
    <el-table-column prop="title" label="标题" width="150"></el-table-column>
    <el-table-column label="评论" width="150">
      <template #default="{row}">
        {{ row.comment.substring(0, 20) }}
      </template>
    </el-table-column>


    <el-table-column fixed="right" label="Operations">
      <template #default="{row}">
        <el-button link type="primary" size="small" @click="openDialog(row.id)">查看</el-button>
        <el-button link type="danger" size="small" @click="ElMessage.success('删除成功')">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>

</style>