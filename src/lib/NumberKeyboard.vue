<template>
    <div>
        <div class="test">
            <div class="likeInputWrapper">
                <div class="likeInput"></div>
            </div>


            <div :class="{ keyBoard: true, down: keyboardDown, up:keyboardUp }">
                <div class="buttons">
                    <button class="button" v-for="(t, index) in button" :key="index" @click="t.onclick">
                        <span v-if="t.text != 'svg'" class="button-label">{{ t.text }}</span>
                        <div v-if="t.text === 'svg'" class="buttonsSvg"><img :src=t.path alt=""></div>
                    </button>
                </div>
            </div>

            <div :class="{ upLine: true, }" v-show="showLine" @click="lineClick">
                <img src="../assets/svg/upline.svg" alt="">
            </div>
            <div :class="{ test1: true }"></div>

        </div>
    </div>
</template>
    
<script lang="ts">
import { onMounted, ref } from 'vue';
export default {
    setup(props, context) {
        onMounted(() => {
            const div = document.querySelector('.buttons')
            const input: any = document.querySelector('.likeInput')

            div.addEventListener('mousedown', (e: any) => {
                const t = e.target
                if (t.className != 'buttons' && t.className === 'button') {
                    t.style.background = 'rgb(235, 237, 240)'
                }
                setTimeout(() => {
                    t.style.background = ''
                }, 250);
            })
            div.addEventListener('mouseup', (e: any) => {
                const t = e.target
                let reg = RegExp(/../)
                t.style.background = ''
                if (t.innerText != 'svg' && input.innerText.length < 6 && t.className === 'button') {
                    if (input.innerText.length === 0 && t.innerText === '.') {
                        return
                    }
                    if (input.innerText.length > 0 && reg.test(input.innerText) === true && t.innerText === '.') {
                        console.log(123)
                        return
                    }
                    input.innerText += t.innerText
                }
                console.log(e)
            })
        })

        const toastText = function (x) { }
        const keyboardDown = ref(false)
        const keyboardUp = ref(false)
        const showLine = ref(false)


        const lineClick = function () {
            showLine.value = false
            keyboardDown.value = false
            keyboardUp.value = true
        }

        let allButton = [
            { text: 1, onclick: () => { toastText(1) } },
            { text: 2, onclick: () => { toastText(2) } },
            { text: 3, onclick: () => { toastText(3) } },
            { text: 4, onclick: () => { toastText(4) } },
            { text: 5, onclick: () => { toastText(5) } },
            { text: 6, onclick: () => { toastText(6) } },
            { text: 7, onclick: () => { toastText(7) } },
            { text: 8, onclick: () => { toastText(8) } },
            { text: 9, onclick: () => { toastText(9) } },
            {
                text: 'svg', onclick: () => {
                    keyboardDown.value = true
                    keyboardUp.value = false
                    setTimeout(() => {
                        showLine.value = true
                        const keyBoard:any = document.querySelector('.keyBoard')
                        keyBoard.style.bottom = '0px'
                    }, 200);
                }, path: 'src/assets/svg/KeyboardHidden.svg',
            },
            { text: 0, onclick: () => { toastText(0) } },
            {
                text: 'svg', onclick: () => {
                    const input: any = document.querySelector('.likeInput')
                    let x = input.innerText.toString()
                    let str = x.substring(0, x.length - 1);
                    input.innerText = str
                }, path: 'src/assets/svg/KeyboardDel.svg'
            },
        ]
        let button = allButton.map((item) => { return item })
        return { button, keyboardDown, keyboardUp, showLine, lineClick }
    }
}
</script>


<style lang="scss" scoped>
.upLine {
    width: 100%;
    height: 24px;
    background: rgba(242, 243, 245, 1);
    position: absolute;
    bottom: 0px;
    animation: up-line 0.1s ease;
    display: flex;
    justify-content: center;
    align-items: center;

    &.upLineMoveDown {
        animation: move-down 0.1s ease;
    }

    >img {
        height: 22px;
    }

}

.buttonsSvg {
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;

    >img {
        height: 22px;
        width: auto;
    }
}



.test {
    border: 2px solid rgb(242, 243, 245);
    height: 667px;
    width: 375px;
    position: relative;
    border-radius: 8px;
    margin-left: 200px;

    >.test1 {
        width: 100%;
        height: 240px;
        background: rgb(255, 255, 255, 1);
        z-index: 100;
        position: absolute;
        bottom: -243px;
    }

    >.likeInputWrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        >.likeInput {
            display: flex;
            justify-content: center;
            align-items: center;

            border: 2px solid rgb(112, 125, 173);
            border-radius: 4px;
            height: 24px;
            width: 80%;
        }
    }

    @keyframes keyBoardDown {
        0% {
            transform: translateY(0%);
            opacity: 1;
        }

        100% {
            transform: translateY(100%);
            opacity: 0;
        }
    }

    @keyframes keyBoardUp {
        0% {
            transform: translateY(100%);
            opacity: 0;
        }

        100% {
            transform: translateY(0%);
            opacity: 1;
        }
    }

    >.keyBoard {
        position: absolute;
        bottom: 0px;
        width: 100%;
        background: rgb(242, 243, 245);
        padding-top: 4px;
        padding-bottom: 24px;
        &.down {
            animation: keyBoardDown 0.25s linear 1 alternate forwards;
        }

        &.up {
            animation: keyBoardUp 0.25s linear 1 alternate forwards;
        }

        >.buttons {
            display: grid;
            grid-template-areas:
                "n1 n2 n3"
                "n4 n5 n6"
                "n7 n8 n9"
                "ns n0 nd";
            grid-auto-rows: 48px;
            grid-auto-columns: 1fr;
            gap: 1px;

            flex-wrap: wrap;

            >.button {
                border: none;
                background: white;
                margin: 2px;
                border-radius: 8px;
                font-size: 1em;
                display: flex;
                justify-content: center;
                align-items: center;

                // &.moveDown {
                //     display: none;
                // }


                >.button-label {

                    pointer-events: none;
                }

                &:nth-child(1) {
                    grid-area: n1;
                }

                &:nth-child(2) {
                    grid-area: n2;
                }

                &:nth-child(3) {
                    grid-area: n3;
                }

                &:nth-child(4) {
                    grid-area: n4;
                }

                &:nth-child(5) {
                    grid-area: n5;
                }

                &:nth-child(6) {
                    grid-area: n6;
                }

                &:nth-child(7) {
                    grid-area: n7;
                }

                &:nth-child(8) {
                    grid-area: n8;
                }

                &:nth-child(9) {
                    grid-area: n9;
                }

                &:nth-child(10) {
                    grid-area: ns;
                }

                &:nth-child(11) {
                    grid-area: n0;
                }

                &:nth-child(12) {
                    grid-area: nd;
                }
            }
        }

    }
}
</style>