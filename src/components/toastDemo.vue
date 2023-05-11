<template>
    <div>
        <showCode title="基础用法" :path="ToastDemo1">
            <div>
                <Button type="primary" @click=" showText = !showText">文字提示</Button>
                <Toast type="text" :show="showText">这是一个轻提示</Toast>
            </div>
        </showCode>
    </div>

    <showCode title="加载提示" :path="ToastDemo2">
        <div>
            <Button type="warning" @click=" showLoading = !showLoading">加载提示</Button>
            <Toast type="loading" :show="showLoading"></Toast>
        </div>
    </showCode>

    <showCode title="成功提示" :path="ToastDemo3">
        <div>
            <Button type="success" @click=" showSuccess = !showSuccess">加载提示</Button>
            <Toast type="success" :show="showSuccess">成功文案</Toast>
        </div>
    </showCode>

    <showCode title="失败提示" :path="ToastDemo4">
        <div>
            <Button type="danger" @click=" showFail = !showFail">加载提示</Button>
            <Toast type="fail" :show="showFail">失败文案</Toast>
        </div>
    </showCode>
</template>

<script>
import showCode from '../lib/showCode.vue';
import Toast from '../lib/Toast.vue'
import Button from '../lib/Button.vue';
import { ref } from 'vue';
import ToastDemo1 from '../markdown/Toast/ToastDemo1.md';
import ToastDemo2 from '../markdown/Toast/ToastDemo2.md';
import ToastDemo3 from '../markdown/Toast/ToastDemo3.md';
import ToastDemo4 from '../markdown/Toast/ToastDemo4.md';


export default {
    components: { showCode, Toast, Button },
    setup() {
        const showText = ref(false)
        const showLoading = ref(false)
        const showSuccess = ref(false)
        const showFail = ref(false)

        return { showText, showLoading, showSuccess, showFail, ToastDemo1, ToastDemo2, ToastDemo3, ToastDemo4}
    },
}

</script>

<style lang="scss"></style>