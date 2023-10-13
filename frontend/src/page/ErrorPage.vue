<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const route = useRoute()
const back = () => {
  if (route.path.startsWith("/backend")) {
    router.push('/backend/summary')
    return
  }
  router.push('/')
}
</script>

<template>
  <el-card class="box-card">
    <el-result
        icon="error"
        title="你来到了内容的荒原"
        sub-title="少女施工中">
      <template #extra>
        <el-button type="primary" @click="back">返回</el-button>
      </template>
    </el-result>
  </el-card>

</template>

<style scoped>
.box-card {
  margin: auto;
  width: 480px;
}
</style>