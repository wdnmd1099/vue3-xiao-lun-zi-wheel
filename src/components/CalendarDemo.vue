<template>
    <div>
        <showCode title="默认日历" :path="calendarMd">
            <input type="text" class="ipt" :value="val">
            <Calendar v-model:showDate='val' class="left"></Calendar>
        </showCode>
    </div>
</template>

<script>
import { ref } from 'vue';
import Calendar from '../lib/Calendar.vue'
import showCode from '../lib/showCode.vue';
import calendarMd from '../markdown/Calendar/calendarDemo.md'
export default {
    components: { Calendar, showCode,calendarMd },
    setup() {
        const val = ref('')
        return { val,calendarMd }
    }
}
</script>

<style lang="scss" scoped>
.left{
    position: relative;
    margin-left: 200px;
}
.ipt{
    position: absolute;
    left: 700px;
    height: 100px;
    font-size: 20px;
    top: 20%;
}
</style>