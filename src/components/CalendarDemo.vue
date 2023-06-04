<template>
    <div>
        <showCode title="默认日历" :path="calendarMd">
            <div class="ipt">确认后获取日期</div>
            <Calendar v-model:showDate='val' class="left"></Calendar>
        </showCode>
    </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import Calendar from '../lib/Calendar.vue'
import showCode from '../lib/showCode.vue';
import calendarMd from '../markdown/Calendar/calendarDemo.md'
export default {
    components: { Calendar, showCode, calendarMd },
    setup() {
        onMounted(() => {
            const div = document.querySelector('.ipt')
            watch(() => [val.value], () => {
                div.innerHTML = val.value.toString()
            })
        })
        const val = ref('')
        return { val, calendarMd }
    }
}
</script>

<style lang="scss" scoped>
.left {
    position: relative;
    margin-left: 200px;

}

.ipt {
    position: absolute;
    left: 700px;
    font-size: 20px;
    top: 20%;
    border: 2px solid rgb(112, 125, 173);
    border-radius: 8px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
}
</style>