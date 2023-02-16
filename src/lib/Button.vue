<template>
    <button class="btn" :class="[['Type-' + type], ['Size-' + size], ['Theme-' + theme], ['OnLoading-' + loading]]"
        :disabled="disabled">
        <span v-if="loading" class="loadingSpin"></span>
        <slot />
</button>
</template>

<script lang="ts">


import { PropType, ref } from 'vue';
type buttonName = 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'none'
type buttonSize = 'small' | 'normal' | 'large'
type buttonTheme = 'normal' | 'link' | 'text'
export default {
    props: {
        text: { type: String, required: false },
        type: { type: String as PropType<buttonName>, default: 'none' },
        size: { type: String as PropType<buttonSize>, default: 'normal' },
        theme: { type: String as PropType<buttonTheme> },
        disabled: { type: Boolean, default: false },
        loading: { type: Boolean, default: undefined },
    },
    setup(props, context) {
        console.log(props.size, props.text, props.type)
        // const x =  context.slots?.default?.()[0].children //然后return ｛x｝ 这个x就是button的名字
    }
}
</script>

<style lang="scss" >
$blue: rgb(90, 181, 255);

.btn {
    border: none;
    cursor: pointer;
    padding: 0px 12px;
    border-radius: 4px;
    color: white;
    font-size: 15px;
    font-weight: 600;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    outline: none;


    &.Type-primary {
        background: rgb(64, 158, 255);
    }

    &.Type-success {
        background: rgb(103, 194, 58);
    }

    &.Type-warning {
        background: rgb(230, 162, 60);
    }

    &.Type-info {
        background: rgb(144, 147, 153);
    }

    &.Type-danger {
        background: rgb(245, 108, 108);
    }

    &.Type-none {
        background: white;
        border: 1px solid rgba(144, 147, 153, 0.7);
        color: black;
    }

    &.Size-small {
        font-size: 12px;
        height: 22px;
    }

    &.Size-normal {
        font-size: 16px;
        height: 30px;
    }

    &.Size-large {
        font-size: 24px;
        height: 48px;
    }

    &.Theme-normal {
        background: rgb(240, 240, 240);
        border: none;
    }

    &.Theme-link {
        background: rgba(240, 240, 240, 0);
        border: none;
        text-decoration: underline;
        color: rgb(64, 169, 255);
    }

    &.Theme-text {
        // background: rgba(240, 240, 240,0);
        border: none;
    }

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
    }

    &.OnLoading-true {
        .loadingSpin {
            border: 1px solid red;
            width: 14px;
            height: 14px;
            display: inline-block;
            margin-right: 4px;
            border-radius: 50%;
            border-color: $blue $blue $blue transparent;
            border-style: solid;
            border-width: 2px;
            animation: spin 1s infinite linear;
        }

    }

}

.btn:hover {
    opacity: 0.7;

    &.Theme-normal {
        opacity: 1;
    }

    &.Theme-text {
        background: rgba(242, 242, 242, 1);
    }

    &[disabled] {
        opacity: 0.5;
        // border: 4px solid red;
    }

    &.OnLoading-true {
        opacity: 1;
    }

    &.OnLoading-false {
        opacity: 1;
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}</style>