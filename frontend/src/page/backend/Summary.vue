<script async setup lang="ts">
import {SummaryInfo} from "@/util/model.ts";
import {computed, ref, Ref} from "vue";
import {request, Response} from "@/util/request";
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";
import {ChatLineSquare, View} from '@element-plus/icons-vue'
import LineChart from "@/compenment/LineChart.vue";
import {time2date} from "@/util/tool";

const router = useRouter()

const data: Ref<SummaryInfo> = ref(
    await request('admin/summary').then((res: Response<SummaryInfo>) => {
      if (res.code !== 200) {
        throw new Error(res.msg)
      }
      return res.data
    }).catch((ex: string) => {
      ElMessage.error(ex);
      router.push('backend/login')
      return {} as SummaryInfo
    })
)

const spawnKV = computed(() => {
  return (data: number[]) => {
    let data0: { [key: string]: number } = {}

    let time: number = Date.now();
    for (let unit in data) {
      Reflect.defineProperty(data0, time2date(time -= 86400000, false), {
        value: unit,
        enumerable: true,
      })
    }
    return data0
  }
})
</script>

<template>
  <el-row justify="space-around" :gutter="20">
    <el-col :span="6">
      <el-card>
        <template #header>
          <el-icon :size="20">
            <View/>
          </el-icon>
          今日浏览量
        </template>
        {{ data.site.view }}
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card>
        <template #header>
          <el-icon :size="20">
            <ChatLineSquare/>
          </el-icon>
          今日评论数
        </template>
        {{ data.site.comment }}
      </el-card>
    </el-col>
  </el-row>

  <div class="flex items-center justify-between">
    <LineChart class="flex-1" style="width: 450px; height: 300px" :data="spawnKV(data.viewHistory)"/>
    <LineChart class="flex-1" style="width: 450px; height: 300px" :data="spawnKV(data.commentHistory)"/>
  </div>
</template>

<style scoped>

</style>