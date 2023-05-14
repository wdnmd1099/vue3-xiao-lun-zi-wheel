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
.ipt{
    position: absolute;
    left: 27%;
    height: 100px;
    font-size: 20px;
    top: 20%;
}
.left{
    position: relative;
    margin-left: 200px;
}
</style>