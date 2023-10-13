<script setup lang="ts">
import {reactive} from "vue";
import {API, request, Response} from "@/util/request";
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";

const formLabelAlign: API['user/login'] = reactive({
  name: '',
  password: '',
  captcha: ''
})

const route = useRouter()
function login() {
  request('user/login', formLabelAlign).then((res: Response<undefined>) => {
    ElMessage[res.code !== 200 ? 'error' : 'success'](res.msg)

    if (res.code === 200) {
      route.push('/backend/summary')
    }
  })
}
</script>

<template>
  <el-card shadow="always" class="container absolute left-1/2 top-1/2">
    <el-form
        label-position="left"
        label-width="100px"
        :model="formLabelAlign"
        style="max-width: 460px">

      <h1 class="text-3xl text-center mb-20 mt-5">欢迎回来!</h1>
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.name"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input show-password v-model="formLabelAlign.password"/>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="formLabelAlign.captcha">
          <template #append>
            <el-image style="width: 85px; height: 32px" fit="fill" src="http://localhost:5173/a.png"></el-image>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
    <div class="flex justify-around mt-16">
      <el-button type="primary" @click="login">Submit</el-button>
      <el-button @click="">Reset</el-button>
    </div>
  </el-card>
</template>

<style scoped>
.container {
  width: 350px;
  height: 450px;

  transform: translate(-50%, -50%);
}

</style>