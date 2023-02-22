<template>
    <div>

        <div class="showTitle">
            {{ title }}
        </div>
        <div class="showWrapper">
           <slot />
        </div>
        <div  class="showCode" >
            <Button size="small" class="showCode-small" @click="testClick()">查看代码</Button>
        </div>
        <div class="test" :class="{ fuck:x === true }">
            <slot />
            123
        </div>

    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Button from '../lib/Button.vue';


export default {
    components: {
        Button,
    },
    props: {
        title: { type: String },
        visible: { type: Boolean, required: false }, //是否必填
    },
    setup(props, context) {
        const x = ref(false)
        const testClick= () => {
            x.value = !x.value
        }

        return { x,testClick }
    }
}
</script>

<style lang="scss" >
$gray:rgb(128, 128, 128,0.3);
.showWrapper {
    border: 1px solid $gray;
    border-top: none;
    border-bottom: 1px dashed $gray;
    font-size: 1em;
    padding: 8px 16px;
    display: block;
}
.showTitle {
    border: 1px solid $gray;
    // height: 30px;
    font-size: 1.3em;
    padding: 8px 16px;
    display: block;
}
.showCode{
    border: 1px solid $gray;
    border-top: none;
    // height: 30px;
    font-size: 1.3em;
    padding: 8px 16px;
    display: block;
    >.showCode-small{
        // font-size: 1em;
    }
}
.test{
    border: 1px solid $gray;
    border-top: none;
    font-size: 1em;
    padding: 8px 16px;
    display: block;
    &.fuck{
        display: none;
    }
}
</style>