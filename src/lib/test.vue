<template>
    <div class="container">
        <input type="tel" :value="value" @click="showKeyboard" placeholder="请输入数字">
        <div class="keyboard-container" :class="{ 'show': show }">
            <div class="keyboard-title">{{ keyboardTitle }}</div>
            <div class="keyboard-content">
                <div class="keyboard-row" v-for="row in keyboardRows" :key="row">
                    <div class="keyboard-key" v-for="key in row" :key="key" @click="handleKeyClick(key)">{{ key }}</div>
                </div>
                <div class="keyboard-action">
                    <div class="keyboard-action-item" @click="deleteValue"><i class="iconfont icon-delete"></i></div>
                    <div class="keyboard-action-item" @click="hideKeyboard"><i class="iconfont icon-sure"></i></div>
                </div>
            </div>
        </div>
        <div class="mask" v-show="show" @click="hideKeyboard"></div>
    </div>
</template>
  
<script>
import { ref, computed } from 'vue'

export default {
    setup() {
        const value = ref('')
        const show = ref(false)
        const keyboardTitle = ref('请输入密码')
        const keyboardRows = [
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9'],
            ['.', '0']
        ]

        function handleKeyClick(num) {
            value.value += num
        }

        function deleteValue() {
            value.value = value.value.slice(0, -1)
        }

        function showKeyboard() {
            show.value = true
        }

        function hideKeyboard() {
            show.value = false
        }

        const keyboardTop = computed(() => {
            const container = document.querySelector('.container')
            const keyboardContainer = document.querySelector('.keyboard-container')
            if (container && keyboardContainer) {
                const containerRect = container.getBoundingClientRect()
                const keyboardContainerRect = keyboardContainer.getBoundingClientRect()
                return containerRect.bottom - keyboardContainerRect.height
            }
            return 0
        })

        return {
            value,
            show,
            keyboardTitle,
            keyboardRows,
            handleKeyClick,
            deleteValue,
            showKeyboard,
            hideKeyboard,
            keyboardTop
        }
    }
}
</script>
  
<style>
.iconfont {
    font-family: "iconfont" !important;
    font-size: 1em !important;
    font-style: normal !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-delete:before {
    content: "\e61c";
}

.icon-sure:before {
    content: "\e620";
}

.container {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
}

input[type="tel"] {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
}

.keyboard-container {
    position: fixed;
    bottom: -100%;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: #f5f5f5;
    overflow: hidden;
    transition: all 0.3s ease-out;
}

.keyboard-container.show {
    bottom: 0;
}

.keyboard-title {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
}

.keyboard-content {
    padding: 20px 10px;
}

.keyboard-row {
    display: flex;
    margin-bottom: 10px;
}

.keyboard-key {
    flex: 1;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
}

.keyboard-key:last-child {
    margin-left: 10px;
}

.keyboard-action {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.keyboard-action-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
}

.mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: #000;
    opacity: 0.3;
    transition: all 0.3s ease-out;
}

.mask.hide {
    opacity: 0;
}
</style>
  