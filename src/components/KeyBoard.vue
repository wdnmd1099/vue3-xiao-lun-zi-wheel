<template>
    <div>
        <showCode title="数字键盘" class="sc">
            <div class="likeInputWrapper">
                <div class="likeInput"></div>
            </div>
            <div class="wrapper">
                <KeyBoard class="keyBoard"></KeyBoard>
            </div>

        </showCode>
    </div>
</template>

<script>
import showCode from '../lib/showCode.vue';
import KeyBoard from '../lib/NumberKeyboard.vue'
export default {
    components: { KeyBoard, showCode },
    setup() {
        // console.log(SwitchD2)
        return {}
    }
}

</script>

<style lang="scss" scoped>
 .likeInputWrapper {
        
        >.likeInput {
            display: flex;
            justify-content: center;
            align-items: center;

            border: 2px solid rgb(112, 125, 173);
            border-radius: 4px;
            height: 24px;
            width: 300px;
        }
    }
.wrapper{
    height: 100%;
    // border: 1px solid red;
    overflow: hidden;
}
.sc{
    position: relative;
    z-index: 9999;
}
.keyBoard {
    z-index: 0;
}
</style>