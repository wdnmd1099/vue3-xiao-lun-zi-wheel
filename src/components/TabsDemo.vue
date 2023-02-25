<template>
    <h1 class="intro">导航栏</h1>
    <showCode title="基础用法" :path="tabsDemo1">
        <Tabs v-model:selected="activeName">
            <Tab title="导航1">Tab1 <Button type="primary">按钮1</Button></Tab>
            <Tab title="导航2">Tab2 <Button type="success">按钮2</Button></Tab>
            <Tab title="导航3">Tab3 <Button type="warning">按钮3</Button></Tab>
            <Tab title="导航444">Tab4 <Button type="info">按钮4</Button></Tab>
            <Tab title="导航555555">Tab5 <Button type="danger">按钮5</Button></Tab>
        </Tabs>
    </showCode>
</template>

<script>

import { ref } from 'vue';
import tabsDemo1 from '../markdown/Tabs/TabsDemo1.md';
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import Button from '../lib/Button.vue';
import showCode from '../lib/showCode.vue';
export default {
    components: {
        Tabs,
        Tab,
        Button,
        showCode,
    },
    props: {

    },
    setup(props) {
        const activeName = ref('导航1')

        return { activeName , tabsDemo1}
    }
}
</script>

<style lang="scss">
.intro{
    padding-top: 20px;
    padding-bottom: 4px;
}</style>