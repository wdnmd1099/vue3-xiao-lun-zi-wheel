<template>
    <h1 class="intro">Switch开关</h1>
    <div>
        <showCode title="基础用法" :path="SwitchD1">
            <div>
                <Switch v-model:yesOrNo="y" />
            </div>
        </showCode>
        <showCode title="支持 disabled" :path="SwitchD2">
            <div>
                <Switch v-model:notClick="c" />
            </div>
        </showCode>
    </div>
</template>

<script>
import { ref } from 'vue';
import Switch from '../lib/Switch.vue'
import showCode from '../lib/showCode.vue';
import SwitchD1 from '../markdown/Switch/SwitchDemo1.md'
import SwitchD2 from '../markdown/Switch/SwitchDemo2.md'
export default {
    components: { Switch, showCode },
    setup() {
        const y = ref(false)
        const c = ref(true)
        console.log(SwitchD2)
        return { y, c, SwitchD1,SwitchD2 }
    }
}

</script>


<style lang="scss">
.intro{
    padding-top: 20px;
    padding-bottom: 4px;
}
</style>