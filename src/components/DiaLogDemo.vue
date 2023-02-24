<template>
    <div class="shit">
        <showCode title="支持自定义标题和内容" path="../markdown/Dialog/dialogDemo1.md">
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
        </showCode>
    </div>
    <div class="fuck">
        <showCode title="基础用法" path="../markdown/Dialog/dialogDemo1.md">
            <div>
                <Button type="primary" @click="btnClick()">点击打开对话框</Button>
                <DiaLog v-model:visible="refVisible" title="这是一个标题">
                    生活就像海洋，只有意志坚强的人才能到达彼岸
                </DiaLog>
            </div>
        </showCode>
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


<style lang="scss"></style>