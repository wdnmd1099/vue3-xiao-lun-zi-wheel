<template>
    <div class="wrapper">
        <div class="toast" v-show="showText">
            <slot />
        </div>

        <div class="toastLoading" v-show="showLoading">
            <div class="loadingWrapper">
                <div class="loading" />
                加载中...
            </div>
        </div>

        <div class="toastSuccess" v-show="showSuccess">
            <div class="successWrapper">
                <div class="success"><img src="../assets/svg/success.svg" alt="成功"></div>
                <slot />
            </div>
        </div>

        <div class="toastFail" v-show="showFail">
            <div class="failWrapper">
                <div class="fail"><img src="../assets/svg/fail.svg" alt="失败"></div>
                <slot />
            </div>
        </div>


    </div>
</template>

<script lang="ts">
import { PropType, ref, watch } from 'vue';
type toastName = "text" | 'loading' | 'success' | 'fail'
export default {
    props: {
        show: { type: Boolean, default: false, required: true },
        type: { type: String as PropType<toastName>, required: true },
    },
    setup(props, context) {
        const showText = ref(false)
        const showLoading = ref(false)
        const showSuccess = ref(false)
        const showFail = ref(false)
        if (props.type === 'text') {
            watch(() => [props.show], () => {
                showText.value = true
                setTimeout(() => {
                    showText.value = false
                }, 740);
            })
        }

        if (props.type === 'loading') {
            watch(() => [props.show], () => {
                showLoading.value = true
                setTimeout(() => {
                    showLoading.value = false
                }, 1400);
            })
        }

        if (props.type === 'success') {
            watch(() => [props.show], () => {
                showSuccess.value = true
                setTimeout(() => {
                    showSuccess.value = false
                }, 1400);
            })
        }

        if (props.type === 'fail') {
            watch(() => [props.show], () => {
                showFail.value = true
                setTimeout(() => {
                    showFail.value = false
                }, 1400);
            })
        }


        return { showText, showLoading, showSuccess, showFail }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}


@keyframes easyInEasyGo {
    0% {
        opacity: 0;
    }

    20% {
        opacity: 1;
    }

    80% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 8px 16px;
    border-radius: 12px;
    z-index: 9999;

    animation: easyInEasyGo 0.75s linear;
}

.toastLoading {
    position: fixed;
    top: 50%;
    left: 50%;
    height: 130px;
    width: 130px;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 8px 16px;
    border-radius: 12px;
    z-index: 9999;
    animation: easyInEasyGo 1.5s linear;

    >.loadingWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        >.loading {
            height: 50px;
            width: 50px;
            margin-top: 15px;
            margin-bottom: 15px;
            border: 4px solid rgba(0, 0, 0, 0);
            border-right: 4px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
    }

}


.toastSuccess {
    position: fixed;
    top: 50%;
    left: 50%;
    height: 130px;
    width: 130px;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 8px 16px;
    border-radius: 12px;
    z-index: 9999;
    animation: easyInEasyGo 1.5s linear;

    >.successWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        >.success {
            height: 50px;
            width: 50px;
            margin-top: 15px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            justify-content: center;

            >img {
                height: 40px;
                width: 40px;
            }
        }
    }
}


.toastFail {
    position: fixed;
    top: 50%;
    left: 50%;
    height: 130px;
    width: 130px;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 8px 16px;
    border-radius: 12px;
    z-index: 9999;
    animation: easyInEasyGo 1.5s linear;

    >.failWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        >.fail {
            height: 50px;
            width: 50px;
            margin-top: 15px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            justify-content: center;

            >img {
                height: 40px;
                width: 40px;
            }
        }
    }
}
</style>