<template>
    <Demo :diyComponent="D1" title="基础用法" :path="dialogDemo1" />
    <Demo :diyComponent="D2" title="支持自定义内容" :path="dialogDemo2" />
</template>

<script>
import dialogDemo1 from '../markdown/Dialog/dialogDemo1.md';
import dialogDemo2 from '../markdown/Dialog/dialogDemo2.md';
import { ref } from 'vue';
import Button from '../lib/Button.vue'
import Demo from '../lib/showCode.vue';
import D1 from './diaD1.vue'
import D2 from './diaD2.vue'
export default {
    components: { Button, Demo },
    setup() {
        const refVisible = ref(false)
        const btnClick = () => {
            refVisible.value = !refVisible.value
        }
        return { refVisible, btnClick, D1, D2, dialogDemo1, dialogDemo2 }
    }
}
</script>


<style lang="scss"></style>