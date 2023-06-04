<template>
    <div class="calculator">
        <div class="calculator-screen">
            {{ result }}
        </div>
        <div class="calculator-keyboard">
            <div class="calculator-keys">
                <div class="calculator-key" @click="addToScreen('7')">7</div>
                <div class="calculator-key" @click="addToScreen('8')">8</div>
                <div class="calculator-key" @click="addToScreen('9')">9</div>
                <div class="calculator-key" @click="changeOperator('+')">+</div>
                <div class="calculator-key" @click="addToScreen('4')">4</div>
                <div class="calculator-key" @click="addToScreen('5')">5</div>
                <div class="calculator-key" @click="addToScreen('6')">6</div>
                <div class="calculator-key" @click="changeOperator('-')">-</div>
                <div class="calculator-key" @click="addToScreen('1')">1</div>
                <div class="calculator-key" @click="addToScreen('2')">2</div>
                <div class="calculator-key" @click="addToScreen('3')">3</div>
                <div class="calculator-key" @click="changeOperator('*')">*</div>
                <div class="calculator-key" @click="addToScreen('0')">0</div>
                <div class="calculator-key" @click="addToScreen('.')">.</div>
                <div class="calculator-key" @click="clearScreen">C</div>
                <div class="calculator-key" @click="changeOperator('/')">/</div>
            </div>
            <div class="calculator-equals">
                <button @click="calculate">=</button>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue';

export default {
    name: 'Calculator',

    setup() {
        const result = ref('0');
        const num1 = ref('');
        const num2 = ref('');
        const operator = ref('');
        const resetScreen = ref(false);

        const addToScreen = (number) => {
            if (resetScreen.value) {
                result.value = '';
                resetScreen.value = false;
            }
            result.value += number;
            if (!operator.value) {
                num1.value = result.value;
            } else {
                num2.value = result.value.substring(num1.value.length + 1);
            }
        };

        const clearScreen = () => {
            result.value = '0';
            num1.value = '';
            num2.value = '';
            operator.value = '';
            resetScreen.value = false;
        };

        const changeOperator = (newOperator) => {
            if (!operator.value) {
                operator.value = newOperator;
                result.value += newOperator;
            } else {
                operator.value = newOperator;
                result.value = num1.value + ' ' + newOperator + ' ';
            }
            resetScreen.value = false;
        };

        const calculate = () => {
            let total = 0;
            switch (operator.value) {
                case '+':
                    total = Number(num1.value) + Number(num2.value);
                    break;
                case '-':
                    total = Number(num1.value) - Number(num2.value);
                    break;
                case '*':
                    total = Number(num1.value) * Number(num2.value);
                    break;
                case '/':
                    total = Number(num1.value) / Number(num2.value);
                    break;
            }
            num1.value = total;
            num2.value = '';
            operator.value = '';
            result.value = total.toString();
            resetScreen.value = true;
        };

        return {
            result,
            addToScreen,
            clearScreen,
            changeOperator,
            calculate,
        };
    },
};
</script>
  
<style>
.calculator {
    width: 320px;
    margin: 0 auto;
    border: 2px solid #ccc;
    border-radius: 4px;
    padding: 10px;
}

.calculator-screen {
    height: 60px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 10px;
    font-size: 24px;
    margin-bottom: 10px;
}

.calculator-keyboard {
    display: flex;
    flex-wrap: wrap;
}

.calculator-keys {
    display: flex;
    flex-wrap: wrap;
    width: 250px;
}

.calculator-key {
    width: 50px;
    height: 50px;
    background: #ccc;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin: 5px;
    cursor: pointer;
    user-select: none;
}

.calculator-key:hover {
    background: #aaa;
}

.calculator-equals {
    margin-left: 10px;
}

button {
    background-color: #008CBA;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 4px;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin-top: 10px;
    cursor: pointer;
}
</style>
  