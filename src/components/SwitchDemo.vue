<template>
    <div>
        <div>
            <p>正常开关</p> 
            <Switch v-model:yesOrNo="y"/>
        </div>
        <div>
            <p>支持不能点击</p> 
            <Switch v-model:notClick="c"/>
        </div>
    </div>
</template>

<script lang="ts" >
import { ref } from 'vue';
import Switch from '../lib/Switch.vue'
export default {
    components:{Switch},
    setup(){
        const y = ref(false)
        const c = ref(true)
        return {y,c}
    }
}

</script>


<style >

</style>