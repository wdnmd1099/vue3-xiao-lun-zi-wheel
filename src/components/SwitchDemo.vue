<template>
    <h1 class="intro">Switch开关</h1>
    <div>
        <showCode title="基础用法" path="../markdown/Switch/SwitchDemo1.md">
            <div>
                <Switch v-model:yesOrNo="y" />
            </div>
        </showCode>
        <showCode title="支持 disabled" path="../markdown/Switch/SwitchDemo2.md">
            <div>
                <Switch v-model:notClick="c" />
            </div>
        </showCode>
    </div>
</template>

<script lang="ts" >
import { ref } from 'vue';
import Switch from '../lib/Switch.vue'
import showCode from '../lib/showCode.vue';
export default {
    components: { Switch, showCode },
    setup() {
        const y = ref(false)
        const c = ref(true)
        return { y, c }
    }
}

</script>


<style lang="scss">
.intro{
    padding-top: 20px;
    padding-bottom: 4px;
}
</style>