<template>
    <Demo :diyComponent="D1" title="基础用法" path="../markdown/Dialog/dialogDemo1.md"/>
    <Demo :diyComponent="D2" title="支持自定义内容" path="../markdown/Dialog/dialogDemo2.md"/>
</template>

<script>
import { ref } from 'vue';
import Button from '../lib/Button.vue'
import Demo from '../lib/showCode.vue';
import D1 from './diaD1.vue'
import D2 from './diaD2.vue'
export default {
    components: { Button,  Demo },
    setup() {
        const refVisible = ref(false)
        const btnClick = () => {
            refVisible.value = !refVisible.value
        }
        return { refVisible, btnClick,D1,D2 }
    }
}
</script>


<style lang="scss"></style>