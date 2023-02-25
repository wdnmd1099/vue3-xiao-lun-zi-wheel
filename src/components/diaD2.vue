<template>
    <div>
        <div>
            <Button type="primary" @click="btnClick()">点击打开对话框</Button>
            <DiaLog v-model:visible="refVisible" :diyMsg="true">
                <template v-slot:title>
                    <h1>h1标题</h1>
                </template>
                <template v-slot:msg>
                    <strong>加粗的内容文字....</strong>
                </template>
            </DiaLog>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import Button from '../lib/Button.vue'
import showCode from '../lib/showCode.vue';
import DiaLog from '../lib/DiaLog.vue';
export default {
    components: { Button, showCode, DiaLog },
    setup() {
        const refVisible = ref(false)
        const btnClick = () => {
            refVisible.value = !refVisible.value
        }
        return { refVisible, btnClick }
    }
}
</script>