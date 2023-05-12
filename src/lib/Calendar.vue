<template>
    <div>
        <div class="wrapper">
            <div class="topMenu">
                <div class="datePickText">日期选择</div>
                <div class="pickDate">2023年5月</div>
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

            <div class="datePicker">
                <div :class="{ days: true, selected: refSelected === t }" @click="clickDays(t)" 
                v-for="(t, index) in day" 
                    :key="index">
                    <div :class="{ day: true }">{{ t }}</div>
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

    },
    setup(props, context) {
        const refSelected = ref(undefined)
        const clickDays = function (t) {
            if(t===null)return
            refSelected.value = t
            console.log(t)
        }


        const arr = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
            24, 25, 26, 27, 28, 29, 30, 31]
        const day = arr.map(item => { return item })

        return { day, refSelected, clickDays }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    margin-left: 200px;
    height: 557px;
    width: 400px;
    border: 1px solid rgb(214, 214, 214);
    background: rgb(255, 255, 255);
    border-radius: 16px;
    z-index: 9999;
    position: relative;

    >.datePicker {
        height: 360px;
        width: 100%;

        display: grid;
        grid-template-areas:
            "n1 n2 n3 n4 n5 n6 n7"
            "n8 n9 n10 n11 n12 n13 n14"
            "n15 n16 n17 n18 n19 n20 n21"
            "n22 n23 n24 n25 n26 n27 n28"
            "n29 n30 n31 n32 n33 n34 n35";
        grid-auto-rows: calc(100% / 5);
        grid-auto-columns: 1fr;
        flex-wrap: wrap;

        >.days {
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;

            // border: 1px solid rgb(201, 201, 201);
            &.selected {
                // border: 1px solid blue;
                background: rgb(238, 10, 36);
            }

            >.day {
                pointer-events: none;
                font-size: 16px;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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