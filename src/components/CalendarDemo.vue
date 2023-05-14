<template>
    <div>
        <input type="text" class="ipt" :value="val">
        <Calendar v-model:showDate='val'></Calendar>

    </div>
</template>

<script>
import { ref } from 'vue';
import Calendar from '../lib/Calendar.vue'
import showCode from '../lib/showCode.vue';
export default {
    components: { Calendar, showCode },
    setup() {
        const val = ref('shit')
        return { val }
    }
}
</script>