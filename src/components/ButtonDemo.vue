<template>
    <div>
        <Button type="primary">按钮</Button>
        <Button type="success">按钮</Button>
        <Button type="warning">按钮</Button>
        <Button type="info">按钮</Button>
        <Button type="danger">按钮</Button>
    </div>
    <div>
        <Button size="small">Small</Button>
        <Button size="normal">Normal</Button>
        <Button size="large">Large</Button>
    </div>
    <hr>
    <div>
        <Button theme="normal">Button233</Button>
        <Button theme="link">Button</Button>
        <Button theme="text">Button</Button>
    </div>

    <div>
        <Button type="primary" disabled>按钮</Button>
        <Button type="success" disabled>按钮</Button>
        <Button type="warning" disabled>按钮</Button>
        <Button type="info" disabled>按钮</Button>
        <Button type="danger" disabled>按钮</Button>
    </div>


    <div>
        <Button loading>按钮</Button>
        <Button loading="false">加载完毕</Button>
    </div>
</template>


<script>


import Button from '../lib/Button.vue';
export default {
    components: {
        Button,
    }

}

</script>