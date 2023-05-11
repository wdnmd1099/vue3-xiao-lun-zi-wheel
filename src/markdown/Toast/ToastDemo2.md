<template>
    <div>
        <Button type="warning" @click=" showLoading = !showLoading ">加载提示</Button>
        <Toast type="loading" :show="showLoading" ></Toast>
    </div>
</template>
        
<script>
import Toast from '../lib/Toast.vue'
import Button from '../lib/Button.vue';
import { ref } from 'vue';
export default {
    components: { Toast, Button },
    setup() {
        const showLoading = ref(false)
        
        return { showLoading }
    },
}

</script>

