<script setup lang="ts">
import {onMounted, onUnmounted, Ref, watch, WatchStopHandle} from "vue";
import {guid, NotNull} from "@/util/tool";
import Vditor from "vditor";

let context: Vditor

const source: Ref<string> = defineModel<string>('source', {
  default: ''
})

const props = withDefaults(defineProps<{
  options?: IOptions
  preview?: boolean
}>(), {
  preview: false,
})

let stopListenMDEditEvent: WatchStopHandle;

const option_build: IOptions = {
  value: source.value,
  mode: 'wysiwyg',

  after() {
    if (props.preview) {
      context.disabled()
      //去除编辑器的灰色遮罩和指针
      let widget = NotNull(document.getElementById(uuid)).querySelector(`.vditor-${this.mode} pre.vditor-reset`) as Element;
      widget.setAttribute('style', widget.getAttribute('style') + 'opacity: 1; cursor: auto; pointer-events: none')

      //去除工具栏
      widget = NotNull(document.getElementById(uuid)).querySelector('.vditor-toolbar') as Element
      widget.setAttribute('style', widget.getAttribute('style') + 'display:none')
    }

    stopListenMDEditEvent = watch(source, (newVal: string) => {
      if (newVal !== context.getValue()) {
        context.setValue(newVal)
      }
    });

  },


  input(md: string) {
    //同步修改source
    source.value = md
  },
  ...props.options
}

const uuid = `md-editor_${guid('xxxxxxx')}`


onMounted(() => {
  context = new Vditor(uuid, option_build)
})

//做人要有始有终
onUnmounted(() => {
  context.destroy()
  stopListenMDEditEvent()
})

</script>

<template>
  <div :id="uuid"></div>
</template>

<style scoped>
</style>