<template>
    <div>
        <div class="test">

            <div class="likeInputWrapper">
                <div class="likeInput"></div>
            </div>

            <div class="keyBoard">
                <div class="buttons">
                    <button class="button" v-for="(t, index) in button" :key="index" @click="t.onclick">
                        {{ t.text }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts">
import { onMounted } from 'vue';
export default {
    components: {

    },
    props: {

    },
    setup(props, context) {
        onMounted(() => {
            const div = document.querySelector('.buttons')
            const input: any = document.querySelector('.likeInput')
           
            div.addEventListener('mousedown', (e) => {
                const t = e.target
                if(t.className != 'buttons' && t.className === 'button'){
                    t.style.background = 'rgb(235, 237, 240)'
                }
            })
            div.addEventListener('mouseup', (e) => {
                const t = e.target
                t.style.background = ''
                if(input.innerText.length < 6){
                    const x = t.innerText.toString()
                    input.innerText += x
                    console.log(123)
                }
                if(t.innerText === 'del'){
                    // console.log(input.innerText)
                    let x = input.innerText.toString()
                    let str = x.substring(0, x.length - 1);
                    console.log(str)
                    if(Number(str)){
                        input.innerText = Number(str)
                    }
                    
                    if(str === ''){
                        input.innerText = ''
                    }
                }
            })
        })

        const toastText = function (x) {
            // console.log(x)
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
            { text: 'del', onclick: () => { toastText(10086) } },
            { text: 0, onclick: () => { toastText(0) } },
            {
                text: 'del', onclick: () => {
                    
                }
            },
        ]
        let button = allButton.map((item) => { return item })
        return { button }
    }
}
</script>


<style lang="scss" scoped>
.test {
    border: 1px solid rgb(60, 140, 219);
    height: 667px;
    width: 375px;
    position: relative;
    border-radius: 8px;
    margin-left: 200px;

    >.likeInputWrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        >.likeInput {
            border: 1px solid black;
            height: 24px;
            width: 80%;
        }
    }

    >.keyBoard {
        // border: 1px solid blue;
        position: absolute;
        bottom: 0px;
        width: 100%;
        background: rgb(242, 243, 245);
        padding-top: 4px;
        padding-bottom: 24px;

        >.buttons {
            border:1px solid black;
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