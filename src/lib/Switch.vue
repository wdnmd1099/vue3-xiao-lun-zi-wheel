<template>
    <!-- <span class="switch">123</span> -->
    <button class="switch" @click="toggle" :class="{checked}">
        <span></span></button>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
    setup(props) {
        const checked = ref(false)
        const toggle = ()=>{
            checked.value = !checked.value
        }
        return {checked, toggle}
    }
}

</script>

<style lang="scss" >
.switch {
    height: 22px;
    width: 44px;
    border-radius: 32px;
    border: 1px solid rgba(0, 0, 0, 0);
    background: rgb(24, 144, 255);
    background: grey;
    position: relative;
    >span {
        position: absolute;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        top: 0;
        left: 0;
        background: white;
        transition: all 0.25s;
    }

    &.checked{
        background: rgb(24, 144, 255);
        >span{
            left: 22px;
            transition: all 0.25s;
        }
        transition: all 0.25s;
    }
}
</style>