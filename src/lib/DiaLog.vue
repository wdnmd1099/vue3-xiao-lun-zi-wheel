<template>
    <div>
        <Teleport to='body'>
            <div class="overlay" :class="{ none: okOrNot === false }"></div>
            <div class="dialogWrapper" :class="{ none: okOrNot === false }">
                <div class="toolWrapper">
                    <header class="title" :class="{ hiddenHere: !title }">
                        {{ title }}
                    </header>
                    <header class="title" :class="{ hiddenHere: title }">
                        <slot name="title" />
                    </header>
                    <main class="msg" :class="{ hiddenHere: diyMsg === false }">
                        <slot name="msg" />
                    </main>
                    <main class="msg" :class="{ hiddenHere: diyMsg === true }">
                        <slot />
                    </main>
                    <footer class="buttons">
                        <Button type='primary' class="b1 button" @click="btnClick()">OK</Button>
                        <Button class="b2 button" @click="btnClick()">Cancel</Button>
                    </footer>
                </div>
            </div>
        </Teleport>
    </div>
</template>
    
<script lang="ts">
import { ref, watch } from 'vue';
import Button from './Button.vue';

export default {
    components: {
        Button,
    },
    props: {
        visible: { type: Boolean },
        title: { type: String },
        diyMsg: { type: Boolean, default: false },
    },
    setup(props, context) {
        const okOrNot = ref(false)
        watch(() => [props.visible], () => {
            if (props.visible === true) {
                okOrNot.value = true
                context.emit('update:visible', !okOrNot.value)
            }
        }, {
            flush: 'post' 
        })

        const btnClick = () => {
            okOrNot.value = false
        }
        return { okOrNot, btnClick }
    }
}
</script>


<style lang="scss" scoped>
.overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;

    &.none {
        display: none;
    }
}

.dialogWrapper {
    height: 100vh;
    width: 100vw;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;

    &.none {
        display: none;
    }
}


.toolWrapper {
    flex-direction: column;
    background: white;
    border-radius: 4px;
    min-width: 250px;
    min-height: 150px;
    max-width: 500px;

    >.title {
        border-bottom: 1px solid rgb(217, 217, 217);
        padding: 12px 16px;
        display: block;
        font-size: 20px;
        margin: 0;

        &.hiddenHere {
            display: none;
        }
    }


    >.msg {
        border-bottom: 1px solid rgb(217, 217, 217);
        padding: 12px 16px;

        &.hiddenHere {
            display: none;
        }
    }

    >.buttons {
        padding: 12px 16px;
        display: flex;
        justify-content: end;

        >.button {
            height: 32px;
            font-size: small;
        }

        >.b2 {
            margin-left: 14px;
        }
    }
}
</style>