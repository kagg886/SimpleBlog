<script setup lang="ts">

</script>

<template>
  <Suspense>
    <slot/>
    <template #fallback>
      <el-row v-loading="true" style="width: 100%">
      </el-row>
    </template>
  </Suspense>
</template>

<style scoped>

</style>