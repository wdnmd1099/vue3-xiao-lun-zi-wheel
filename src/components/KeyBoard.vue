<template>
    
    <div>
        <KeyBoard></KeyBoard>
    </div>
</template>

<script>
import showCode from '../lib/showCode.vue';
import KeyBoard from '../lib/NumberKeyboard.vue'
export default {
    components: { KeyBoard , showCode},
    setup() {
        // console.log(SwitchD2)
        return {  }
    }
}

</script>