<template>
        <div>
            <Button type="primary" @click="btnClick()">点击打开对话框</Button>
            <Dialog v-model:visible="refVisible" title="这是一个标题">
                生活就像海洋，只有意志坚强的人才能到达彼岸
            </Dialog>
        </div>
</template>

<script>
import { ref } from 'vue';
import Button from '../lib/Button.vue'
import Dialog from '../lib/DiaLog.vue';
export default {
    components: { Button, showCode, Dialog },
    setup() {
        const refVisible = ref(false)
        const btnClick = ()=>{
            refVisible.value = !refVisible.value
        }
        return { refVisible,btnClick }
    }
}
</script>


<style lang="scss"></style>