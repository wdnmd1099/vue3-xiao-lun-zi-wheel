<template>
    <div>
        <Calendar></Calendar>
        <hr style="margin-top: 20px;">
        <img src="../assets/svg/test.png" alt="">
    </div>
</template>

<script>
import { ref } from 'vue';
import Calendar from '../lib/Calendar.vue'
import showCode from '../lib/showCode.vue';
export default {
    components: { Calendar, showCode},
    setup() {
        
        return {   }
    }
}
</script>