<script setup lang="ts">
import {guid} from "@/util/tool";
import {onMounted, onUnmounted} from "vue";
import * as echarts from 'echarts';

const uuid = `e-chart-line_${guid('xxxxxxx')}`

const props = defineProps<{
  data: {
    [key: string]: number
  }
}>()

let watchReSize: (this: Window, ev: UIEvent) => any

onMounted(() => {
  let myChart = echarts.init(document.getElementById(uuid));
  // 绘制图表
  myChart.setOption({
    xAxis: {
      data: Object.keys(props.data)
    },
    yAxis: {},
    series: [
      {
        name: "用户量",
        type: "line",
        data: Object.values(props.data)
      }
    ]
  });

  watchReSize = () => {
    myChart.resize()
  }
  window.addEventListener('resize',watchReSize)
})

onUnmounted(() => {
  window.removeEventListener('resize',watchReSize)
})
</script>

<template>
  <div :id="uuid">

  </div>
</template>

<style scoped>
</style>