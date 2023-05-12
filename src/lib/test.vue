<template>
    <div class="keyboard">
        <div class="row" v-for="row in rows" :key="row">
            <div class="digit" v-for="digit in row" :key="digit" :class="{ selected: selectedNumber === digit }"
                @click="selectNumber(digit)">
                {{ digit }}
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            rows: [
                ['1', '2', '3'],
                ['4', '5', '6'],
                ['7', '8', '9'],
                ['*', '0', '#']
            ],
            selectedNumber: null
        };
    },
    methods: {
        selectNumber(number) {
            this.selectedNumber = number;
        }
    }
};
</script>
  
<style>
.digit {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    font-size: 24px;
    cursor: pointer;
}

.selected {
    background-color: #007bff;
    color: #fff;
}
</style>
  