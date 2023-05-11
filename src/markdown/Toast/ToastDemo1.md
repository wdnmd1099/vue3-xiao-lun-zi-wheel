<template>
    <div>
        <Button type="primary" @click=" showText = !showText ">文字提示</Button>
        <Toast type="text" :show="showText">这是一个轻提示</Toast>
    </div>
</template>
        
<script>
import Toast from '../lib/Toast.vue'
import Button from '../lib/Button.vue';
import { ref } from 'vue';
export default {
    components: { Toast, Button },
    setup() {
        const showText = ref(false)
        
        return { showText }
    },
}
</script>

<style lang="scss"></style>