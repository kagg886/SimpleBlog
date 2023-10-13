<script async setup lang="ts">
import {reactive, ref, Ref, toRefs} from "vue";
import {FriendInfo} from "@/util/model.ts";
import {request} from "@/util/request.ts";
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";

const router = useRouter()
const data: Ref<Array<FriendInfo>> = ref(await request('blog/friends').then((res => res.data))
    .catch((ex: string) => {
      ElMessage.error(ex);
      router.push('backend/login')
      return [] as FriendInfo[]
    }))

/*id: number
title: string
link: string
description: string*/

const {id, title, link, description} = toRefs<FriendInfo>(reactive({
  id: -1,
  title: '',
  link: '',
  description: ''
}))

const dialog:Ref<Boolean> = ref(false)
const openDialog = (id0: number) => {
  //只能有一个
  let data0 = data.value.filter((v) => v.id === id0)

  if (data0.length === 0){
    id.value = -1
    title.value = ''
    link.value = ''
    description.value = ''
  } else {
    data0.forEach((v: FriendInfo) => {
      id.value = v.id
      title.value = v.title
      link.value = v.link
      description.value = v.description
    })
  }

  dialog.value = true
}

const submit = () => {
  ElMessage.success('提交成功')
  dialog.value = false
}
</script>

<template>
  <el-dialog destroy-on-close v-model="dialog" :title="(id === -1 ? '新建' : '编辑') + '友链'">
    <el-form>
      <el-form-item label="标题">
        <el-input v-model="title" autocomplete="off" />
      </el-form-item>

      <el-form-item label="链接">
        <el-input v-model="link" autocomplete="off" />
      </el-form-item>

      <el-form-item label="描述">
        <el-input v-model="description" autocomplete="off" />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialog = false">取消</el-button>
        <el-button type="primary" @click="submit">
          提交
        </el-button>
      </span>
    </template>
  </el-dialog>

  <el-button type="primary" class="float-right" @click="openDialog(-1)">+New</el-button>
  <el-table :data="data" style="width: 100%">
    <el-table-column prop="id" label="id" width="150"></el-table-column>
    <el-table-column prop="title" label="标题" width="150"></el-table-column>
    <el-table-column prop="link" label="链接" width="150"></el-table-column>
    <el-table-column prop="description" label="标题" width="150"></el-table-column>


    <el-table-column fixed="right" label="Operations">
      <template #default="{row}">
        <el-button link type="primary" size="small" @click="openDialog(row.id)">编辑</el-button>
        <el-button link type="danger" size="small" @click="ElMessage.success('删除成功')">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>

</style>