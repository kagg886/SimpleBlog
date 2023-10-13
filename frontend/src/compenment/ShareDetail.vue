<script setup lang="ts">
import {ShareInfo} from "../util/model.ts";
import {Comment, Star, View} from "@element-plus/icons-vue";
import {defineProps} from 'vue'

defineProps<{
  data: ShareInfo
}>()

const emit = defineEmits<{
  (e: 'click-view'): void
  (e: 'click-like'): void
  (e: 'click-comment'): void
}>()

</script>

<template>
  <div>
    <span @click="emit('click-view')">
      <el-icon>
        <View/>
      </el-icon>
    <span>{{ data.view }}</span>
    </span>

    <span @click="emit('click-like')">
      <el-icon>
        <Star/>
      </el-icon>
    <span>{{ data.like }}</span>
    </span>

    <span @click="emit('click-comment')">
      <el-icon>
        <Comment/>
      </el-icon>
    <span>{{ data.comment }}</span>
    </span>

  </div>
</template>

<style scoped>
div>span:nth-child(n) {
  margin-right: 10px;
}

div>span:nth-child(n+2) {
  margin-left: 20px;
}
div>span>span {
  margin-left: 10px;
}
</style>