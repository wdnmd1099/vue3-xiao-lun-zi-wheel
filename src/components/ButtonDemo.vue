<template>
    <h1 class="intro">Button按钮</h1>
    <showCode title="基础用法" path="../markdown/Button/ButtonDemo1.md">
        <div class="Demo-padding-right">
            <Button type="primary">按钮</Button>
            <Button type="success">按钮</Button>
            <Button type="warning">按钮</Button>
            <Button type="info">按钮</Button>
            <Button type="danger">按钮</Button>
        </div>

    </showCode>
    <showCode title="基础用法" path="../markdown/Button/ButtonDemo2.md" class="ButtonDemo">
        <div class="Demo-padding-right">
            <Button size="small">Small</Button>
            <Button size="normal">Normal</Button>
            <Button size="large">Large</Button>
        </div>
    </showCode>
    <!-- <hr> -->
    <showCode title="基础用法" path="../markdown/Button/ButtonDemo3.md" class="ButtonDemo">
        <div class="Demo-padding-right">
            <Button theme="normal">Button233</Button>
            <Button theme="link">Button</Button>
            <Button theme="text">Button</Button>
        </div>
    </showCode>
    <showCode title="基础用法" path="../markdown/Button/ButtonDemo4.md" class="ButtonDemo">
        <div class="Demo-padding-right">
            <Button type="primary" disabled>按钮</Button>
            <Button type="success" disabled>按钮</Button>
            <Button type="warning" disabled>按钮</Button>
            <Button type="info" disabled>按钮</Button>
            <Button type="danger" disabled>按钮</Button>
        </div>
    </showCode>
    <showCode title="基础用法" path="../markdown/Button/ButtonDemo5.md" class="ButtonDemo">
        <div class="Demo-padding-right">
            <Button loading>按钮</Button>
            <Button :loading="false">加载完毕</Button>
        </div>
    </showCode>
</template>


<script>


import Button from '../lib/Button.vue';
import showCode from '../lib/showCode.vue'
export default {
    components: {
        Button,
        showCode,
    }

}

</script>


<style lang="scss">
.ButtonDemo {
    // margin-top: 25px;

}

.Demo-padding-right {
    >Button {
        margin-right: 16px;
    }
}
.intro{
    padding-top: 20px;
    padding-bottom: 4px;
}
</style>