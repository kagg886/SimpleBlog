<script async setup lang="ts">
import {reactive, ref, Ref, toRefs} from "vue";
import {BlogInfo, BlogList} from "@/util/model";
import {request} from "@/util/request";
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";
import MarkDown from "@/compenment/MarkDown.vue";

const router = useRouter()

const list: Ref<BlogList[]> = ref(
    await request('blog/list')
        .then((v) => v.data)
        .catch((ex: string) => {
          ElMessage.error(ex);
          router.push('backend/login')
          return [] as BlogList[]
        })
)

const dialogTableVisible: Ref<Boolean> = ref(false)

type MDInfo = {
  id: number
  title: string
  source: string
  time: number
  edit: boolean
}

const {id, title, source, time, edit} = toRefs<MDInfo>(reactive({
  id: -1,
  title: '',
  source: '',
  time: Date.now(),
  edit: false
}))

const openDialog = async (id0: number, edit0: boolean = true) => {
  console.log('openDialog')
  id.value = id0
  edit.value = edit0
  source.value = ''
  title.value = ''
  time.value = Date.now()

  if (id0 !== -1) {
    const md: BlogInfo = await request('blog/info', {
      id: id0
    }).then((res) => res.data);

    title.value = md.title
    source.value = md.source
    time.value = md.time
  }
  dialogTableVisible.value = true
}

const submit = () => {
  ElMessage.success('提交成功')
  console.log('源:', source.value, "; 标题:", title.value, ";修改时间:", time.value)
}
</script>


<template>

  <!--    学艺不精，只能强制刷新组件-->
  <el-dialog width="90vw" destroy-on-close v-model="dialogTableVisible">
    <template #header>

      <div class="flex justify-between">
        <span class="text-2xl font-bold">
            {{ (id === -1 ? '新建' : (edit ? '编辑' : '预览')) + 'Blog' }}
          </span>
        <div v-if="edit">
          <el-button size="large" @click="submit">提交</el-button>
        </div>
      </div>
    </template>

    <div class="w-1/3 " v-if="edit">
      <el-input v-model="title">
        <template #prepend>标题</template>
      </el-input>
      <el-input v-model="time">
        <template #prepend>发布时间</template>
      </el-input>
    </div>
    <MarkDown :options="{
      toolbarConfig: {
        pin: true
      }
    }" v-model:source="source" :preview="!edit"/>
  </el-dialog>


  <el-button type="primary" class="float-right" @click="openDialog(-1,true)">+New</el-button>
  <el-table :data="list" style="width: 100%">
    <el-table-column prop="id" label="id" width="150"></el-table-column>
    <el-table-column prop="title" label="标题" width="150"></el-table-column>
    <el-table-column label="浏览" width="150">
      <template #default="{row}">
        {{ row.share.view }}
      </template>
    </el-table-column>
    <el-table-column label="点赞" width="150">
      <template #default="{row}">
        {{ row.share.like }}
      </template>
    </el-table-column>
    <el-table-column label="评论" width="150">
      <template #default="{row}">
        {{ row.share.comment }}
      </template>
    </el-table-column>

    <el-table-column fixed="right" label="Operations">
      <template #default="{row}">
        <el-button link type="primary" size="small" @click="openDialog(row.id,false)">预览</el-button>
        <el-button link type="primary" size="small" @click="openDialog(row.id,true)">编辑</el-button>
        <el-button link type="danger" size="small" @click="ElMessage.success('删除成功')">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>

</style>