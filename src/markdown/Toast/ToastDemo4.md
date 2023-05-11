<template>
    <div>
        <Button type="danger" @click=" showFail = !showFail ">加载提示</Button>
        <Toast type="fail" :show="showFail" >失败文案</Toast>
    </div>
</template>
        
<script>
import Toast from '../lib/Toast.vue'
import Button from '../lib/Button.vue';
import { ref } from 'vue';
export default {
    components: { Toast, Button },
    setup() {
        const showFail = ref(false)
        
        return { showFail }
    },
}
</script>

