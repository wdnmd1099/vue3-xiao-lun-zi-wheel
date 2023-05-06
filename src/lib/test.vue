<template>
    <div class="square" :style="{ transform: `translateX(${position}px)` }"></div>
    <button @click="moveSquare">Move Right</button>
</template>
  
<script>
import { ref } from 'vue'

export default {
    setup() {
        const position = ref(0)

        const moveSquare = () => {
            position.value += 100
        }

        return { position, moveSquare }
    }
}
</script>
  
<style>
.square {
    width: 100px;
    height: 100px;
    background-color: red;
}
</style>
  