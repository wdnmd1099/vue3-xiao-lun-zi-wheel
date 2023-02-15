<template>
    <button class="switch" @click="toggle" :class="[{checked:yesOrNo},{canNotClick}]">
        <span></span>
    </button>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
    props: {
        yesOrNo: { type: Boolean },
        notClick: { type: Boolean, required: false }, //是否必填
    },
    setup(props, context) {
        const checked = ref(false)
        const canNotClick = ref(false)
        const toggle = () => {
            context.emit('update:yesOrNo', !props.yesOrNo)
            if(props.notClick === true){
                canNotClick.value = true
                setTimeout(() => {
                    canNotClick.value = false
                }, 100);
            }
        }
        return { checked, toggle, canNotClick}
    }
}
</script>

<style lang="scss" >
@keyframes walk {
    0% {
        left: 0;
    }

    50% {
        left: 2px;
    }

    100% {
        left: 0;
    }
}

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

    &.checked {
        background: rgb(24, 144, 255);

        >span {
            left: 22px;
        }
    }

    &.canNotClick {
        >span {
            animation: walk 0.1s linear 1 alternate both;
        }

    }
}
</style>