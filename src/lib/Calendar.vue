<template>
    <div>
        <div class="wrapper">
            <div class="topMenu">
                <div class="datePickText">日期选择</div>
                <div class="pickDate">{{ years }}年{{ months + 1 }}月{{ days }}日</div>
                <div class="daysText">
                    <table class="daysTextTable">
                        <tr class="daysTextTr">
                            <th>日</th>
                            <th>一</th>
                            <th>二</th>
                            <th>三</th>
                            <th>四</th>
                            <th>五</th>
                            <th>六</th>
                        </tr>
                    </table>
                </div>
                <div class="shadowLine"></div>
            </div>

            <div class="allPicker">
                <div class="datePickerWrapper" v-for="(month, index) in  12  " :key="index">
                    <div class="dateTextWrapper">
                        <div class="dateText">{{ years + '年' + month + '月' }}</div>
                    </div>
                    <div :class="{ datePicker: true, }">
                        <div :class="{ days: true, selected: refYear === years && refMonth === month && refDay === t, }"
                            @click="clickDays(years, month, t)" v-for="(t, index) in getDays(years, month)" :key="index">
                            <div :class="{ day: true }">{{ t }}</div>
                        </div>
                    </div>
                </div> 

            </div>


            <div class="footer">
                <Button type="danger" class="btn">确认</Button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { onMounted, PropType, ref } from 'vue';
import Button from '../lib/Button.vue';
export default {
    components: {
        Button,
    },
    props: {
        showDate: { type: String }
    },
    setup(props, context) {
        onMounted(() => {
            const allPicker: any = document.querySelector('.allPicker')
            const pickDate: any = document.querySelector('.pickDate')
            const trueMonth = nowDate.getMonth() //真实月份，date默认比真实月份小1
            const trueDay = nowDate.getDate() //真实日
            const useLessDivNumber = allPicker.children[trueMonth].children[1].children.length - 1  - Number(allPicker.children[trueMonth].children[1].children[allPicker.children[trueMonth].children[1].children.length - 1].innerText) 
            // useLessDivNumber 是把日历开始前的空白格子div的数量，要把他们去除才能得到真正的日子
            const currentEl = allPicker.children[trueMonth].children[1].children[trueDay + useLessDivNumber] //真实今天的日子的那个元素
            allPicker.scrollTop = `${currentEl.offsetTop - 130}` // 滚动条定位到真实今天的那个元素的位置
            const trueMonthEl = allPicker.children[trueMonth].children[1].children //真实月份的具体元素

            for (let i = 0; i < trueDay + useLessDivNumber; i++) { //为当前真实月份已过去的日子设置为不可选取
                trueMonthEl[i].classList.add('notSelect')
            }

            const btn: any = document.querySelector('.btn')
            btn.addEventListener('click', () => {
                console.log(refYear.value,refMonth.value,refDay.value)
                if (refYear.value && refMonth.value && refDay.value) {
                    if (trueMonth + 1 > refMonth.value) { return }
                    if (trueMonth + 1 <= refMonth.value) {
                        context.emit('update:showDate', `${refYear.value + '年' + refMonth.value + '月' + refDay.value + '日'}`)
                    }
                }
            })

            let x = true
            allPicker.addEventListener('click', (e) => {
                // console.log(refYear.value, refMonth.value, refDay.value, trueMonth)
                if (refYear.value && refMonth.value && refDay.value) {
                    if (trueMonth + 1 > refMonth.value) { return }
                    if (trueMonth + 1 <= refMonth.value) {
                        pickDate.innerText = `${refYear.value + '年' + refMonth.value + '月' + refDay.value + '日'}`
                    }
                }
                if (x === false) { return }
                x = false
            })

            allPicker.addEventListener('scroll', (e) => {
                if (allPicker.scrollTop <= currentEl.offsetTop - 130) {
                    // 如果滚动到顶部，就将滚动距离设置为 0
                    allPicker.scrollTop = currentEl.offsetTop - 130;
                }
            })


        })
        const nowDate = new Date()
        const years = nowDate.getFullYear()
        const months = nowDate.getMonth()
        const days = nowDate.getDate()

        const refYear:any = ref(years)
        const refMonth:any = ref(months+1)
        const refDay:any = ref(days)

        const clickDays = function (y: Number, m: Number, t: Number) {
            if (t === null) return
            if (m <= months + 1 && t < days) return
            refYear.value = y
            refMonth.value = m
            refDay.value = t
            // console.log(y, m, t)

        }

        const getDays = function (year, month) {
            let arr = []
            const date = new Date(year, month, 0).getDate(); //某月的天数
            // console.log(date)
            const weeksDay = new Date(2023, month - 1, 1).getDay() // 星期几
            // console.log(weeksDay)
            for (let i = 0; i < weeksDay; i++) {
                arr.push(null)
            }
            for (let i = 0; i < date; i++) {
                arr.push(i + 1)
            }
            return arr;
        }



        return { refYear, refMonth, refDay, clickDays, getDays, years, nowDate, months, days, }
    }
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    //隐藏滚动条，仅chrome内核的浏览器可用
    display: none;
}

.wrapper {
    height: 557px;
    width: 400px;
    border: 1px solid rgb(214, 214, 214);
    background: rgb(255, 255, 255);
    border-radius: 16px;
    z-index: 9999;
    position: relative;

    >.allPicker {
        height: 360px;
        overflow: auto;

        >.datePickerWrapper {
            >.dateTextWrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                font-weight: 600;
                color: #323233;
            }

            >.datePicker {
                width: 100%;
                display: grid;
                grid-template-areas:
                    "n1 n2 n3 n4 n5 n6 n7"
                    "n8 n9 n10 n11 n12 n13 n14"
                    "n15 n16 n17 n18 n19 n20 n21"
                    "n22 n23 n24 n25 n26 n27 n28"
                    "n29 n30 n31 n32 n33 n34 n35";
                grid-auto-rows: 55px;

                >.days {
                    background: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 4px;

                    &.selected {
                        background: rgb(238, 10, 36);
                        color: white;
                    }

                    &.notSelect {
                        color: rgb(203, 201, 204);
                        background: white;
                    }

                    >.day {
                        pointer-events: none;
                        font-size: 16px;
                        font-family: Verdana, Geneva, Tahoma, sans-serif, sans-serif;
                    }
                }



            }
        }
    }

    >.footer {
        display: flex;
        justify-content: center;
        align-items: center;

        >.btn {
            position: absolute;
            bottom: 12px;
            width: 80%;
            border-radius: 32px;
            background: rgb(238, 10, 36);
        }

        .btn:hover {
            opacity: 1;
        }
    }
}


.topMenu {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 12px;
    background: rgb(255, 255, 255);
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    position: relative;
    z-index: 1;

    >.datePickText {
        padding-bottom: 18px;
        font-size: 1.2em;
    }

    >.pickDate {
        padding-bottom: 12px;
        font-size: 0.9em;
    }


}

.daysText {
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 11;
    background: white;

    >.daysTextTable {
        width: 100%;
    }

    >.daysTextTr {
        width: calc(100% / 7);
    }
}

.shadowLine {
    width: calc(100% - 4px);
    height: 10px;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.06);
    z-index: 1;
    position: absolute;
    bottom: 0;
}
</style>