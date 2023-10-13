import {createApp} from 'vue'
import ElementPlus from 'element-plus'

import './style.css'
import 'element-plus/dist/index.css'

import App from "./App.vue";
import {initRouter} from "./route.ts";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Particles from "particles.vue3";

const app = createApp(App)
app.use(ElementPlus)
app.use(Particles)

initRouter(app)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.config.warnHandler = (msg: string) => {
    if (msg === "Unhandled error during execution of scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core") {
        document.body.innerHTML = '<h1 class="text-center text-3xl">发生了严重的错误，准备刷新页面中...</h1>'
        setTimeout(() => {
            location.reload()
        }, 1000)
    }
    return false
}

app.mount('#app')