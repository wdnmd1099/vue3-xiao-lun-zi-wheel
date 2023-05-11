<template>
    <div>
        <Button type="success" @click=" showSuccess = !showSuccess ">加载提示</Button>
        <Toast type="success" :show="showSuccess" >成功文案</Toast>
    </div>
</template>
        
<script>
import Toast from '../lib/Toast.vue'
import Button from '../lib/Button.vue';
import { ref } from 'vue';
export default {
    components: { Toast, Button },
    setup() {
        const showSuccess = ref(false)
        
        return { showSuccess }
    },
}

</script>

