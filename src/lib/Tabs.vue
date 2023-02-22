<template>
    <div class="tabs">
        <div class="tabs-nav" ref="container">
            <div class="tabs-nav-item" v-for="(t, index) in titles" :key="index"
                :ref="(el) => { if (t === selected) selectedItem = el }" @click="select(t)"
                :class="{ selected: t === selected }" 
                >{{ t }}</div>
                <!-- <div> t 是当前的tag组件实例的 title  </div> -->
            <div class="tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="tabs-content">
            <component :is="current" :key="current.props.title" />
        </div>
        
    </div>
</template>
  
<script lang="ts" setup="props, context">
import Tab from './Tab.vue'
import {
    computed,
    ref,
    watchEffect,
    onMounted,
    useSlots
} from 'vue'

/** References: https://vitejs.dev/guide/features.html#typescript */
import type { Component } from 'vue'

const props = defineProps<{ selected: string }>()
const emit = defineEmits<{
    (e: 'update:selected', title: string): void;
}>()

const selectedItem = ref(null)  //当前选中的导航
const indicator = ref(null)     //导航下面蓝色的指示条
const container = ref(null)     

onMounted(() => {
    watchEffect(() => {
        const {
            width
        } = selectedItem.value.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
        const {  
            left: left1  //析构赋值的重命名方式 否则将写成 container.value.getBoundingClientRect().left
        } = container.value.getBoundingClientRect()
        const {
            left: left2
        } = selectedItem.value.getBoundingClientRect()
        const left = left2 - left1   // 用当前选中导航的left 减去 容器的left  就等于蓝色指示条应该处于的left位置
        indicator.value.style.left = left + 'px'
    }, {
        flush: 'post'
    })
})

const slots = useSlots()
const defaults = slots.default()
defaults.forEach((tag) => {
    if ((tag.type as Component).name !== Tab.name) {
        throw new Error('Tabs 子标签必须是 Tab')
    }
})

const current = computed(() => {
    return defaults.find(tag => tag.props.title === props.selected)
})
const titles = defaults.map((tag) => {
    return tag.props.title
})
const select = (title: string) => {
    //click 把当前tag 的title 传进来，然后emit 回去，那样t === select 就会绑定 class = selected 然后css做动画就行了
    emit('update:selected', title)
}
</script>
  
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;

        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }

            &.selected {
                color: $blue;
            }
        }

        &-indicator {
            position: absolute;
            height: 3px;
            background: $blue;
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all 250ms;
        }
    }

    &-content {
        padding: 8px 0;
    }
}
</style>
  