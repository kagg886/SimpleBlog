<script async setup lang="ts">
import {Ref, ref} from "vue";
import {request} from "@/util/request";
import {BlogList, BlogReturn} from "@/util/model.ts"
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";
import ShareDetail from "@/compenment/ShareDetail.vue";
import {time2date} from "@/util/tool";

const list: Ref<BlogReturn> = ref(
    await request('blog/list')
        .then((v) => v.data)
        .catch(() => {
          ElMessage.error('拉取博客列表失败')
          return {} as BlogReturn
        })
)

const toList = (list: string | string[]) => {
  return typeof list === 'object' ? list : [list]
}

const router = useRouter()
const openBlog = (id: number) => {
  router.push(`/blog/${id}`)
}
</script>

<template>
  <el-timeline>
    <el-timeline-item v-for="unit in list.data" :key="unit.id" :timestamp="time2date(unit.date)" placement="top">
      <el-card shadow="hover" @click="openBlog(unit.id)">
        <template #header>
          <div class="flex flex-row justify-between h200">
            <div class="flex flex-col flex-shrink">
              <h1 class="font-black text-2xl ">{{ unit.title }}</h1>
              <p class="mt-4 indent-7">{{ unit.summary }}</p>
              <div class="mt-auto">ee</div>
            </div>

            <!--            unit.img不为空，且当unit.img为数组时长度不为0-->
            <el-carousel v-if="unit.img !== undefined && toList(unit.img).length != 0"
                         :interval="5000"
                         height="200px"
                         class="blog-list-container flex-shrink-0"
                         arrow="always">
              <el-carousel-item v-for="src in toList(unit.img)">
                <!--                <div style="width: 100px;height: 100px">{{src}}</div>-->

                <el-image
                    :src="src"
                    :zoom-rate="1.2"
                    fit="scale-down"
                />
              </el-carousel-item>
            </el-carousel>
          </div>
        </template>
        <ShareDetail :data="unit.share"/>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<style scoped>
.h200 {
  height: 200px;
}

.blog-list-container {
  width: 400px;
}

p {
  width: 400px;
  height: auto;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
</style>