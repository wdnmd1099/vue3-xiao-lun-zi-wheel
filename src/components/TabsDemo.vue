<template>
    <div>
        <Tabs v-model:selected="activeName">
            <Tab title="导航1">Tab1 <Button type="primary">按钮1</Button></Tab>
            <Tab title="导航2">Tab2 <Button type="primary">按钮2</Button></Tab>
            <Tab title="导航3">Tab3 <Button type="primary">按钮3</Button></Tab>
            <Tab title="导航4">Tab4 <Button type="primary">按钮4</Button></Tab>
            <Tab title="导航5">Tab5 <Button type="primary">按钮5</Button></Tab>
        </Tabs>
        
    </div>
</template>

<script>

import { ref } from 'vue';
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import Button from '../lib/Button.vue';
export default {
    components:{
        Tabs,
        Tab,
        Button,
    },
    props:{

    },
    setup(props) {
        const activeName = ref('导航1')

        return {activeName}
    }
}
</script>

<style lang="scss"></style>