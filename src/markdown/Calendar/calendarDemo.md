<template>
    <div>
        <input type="text" class="ipt" :value="val">
        <Calendar v-model:showDate='val'></Calendar>
    </div>
</template>

<script>
import { ref } from 'vue';
import Calendar from '../lib/Calendar.vue'
export default {
    components: { Calendar },
    setup() {
        const val = ref('')
        return { val }
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
</style>