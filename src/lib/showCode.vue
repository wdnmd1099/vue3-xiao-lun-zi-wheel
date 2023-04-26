<template>
    <div class="test">
        <div class="showTitle">
            {{ title }}
        </div>
        <div class="showWrapper">
           <div :class="{hidden : diyComponent }">   <slot />  </div>
           <div :class="{hidden : !diyComponent }">  <component :is="diyComponent" /> </div>

        </div>
        <div class="showCode">
            <Button size="small" class="showCode-small" @click="showClick()">{{ canNotVisible ===
                false ? '查看代码' : "收起代码" }}</Button>
        </div>
        <div class="code" :class="{ cantVisible: canNotVisible === false }">
            <article class="markdown-body">
                <pre v-html="x"></pre>
             </article>
           
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import Button from '../lib/Button.vue';
import 'prismjs'
import 'prismjs/themes/prism.css'
export default {
    components: {
        Button,
    },
    props: {
        title: { type: String },
        path: { type: String, required: false },
        diyComponent: { type:Object }
    },
    setup(props, context) {
        const canNotVisible = ref(false)
        const showClick = () => {
            canNotVisible.value = !canNotVisible.value
        }
        let x = ref('');
        const Prism = window.Prism

        // if (props.path) {
        //     import(/* @vite-ignore */props.path).then((a) => { 
        //         // import 加入 /* @vite-ignore */ 消除终端警告 https://blog.csdn.net/qq_29733191/article/details/123858460
        //         x.value = Prism.highlight(a.default,Prism.languages.html,'html')
        //         })
        // }

        //放弃动态import ，使用者需要先import md文件，把md文件通过插件转出字符串
        //再传给showCode 组件彩色化
        if(props.path){
            x.value = Prism.highlight(props.path ,Prism.languages.html,'html')
        }
        // console.log(props.path)
        return { canNotVisible, showClick, x }
    }
}
</script>

<style lang="scss" >
$gray: rgb(128, 128, 128, 0.3);

.showWrapper {
    border: 1px solid $gray;
    border-top: none;
    border-bottom: 1px dashed $gray;
    font-size: 1em;
    padding: 16px 16px;
    display: block;
    .hidden{
        display: none;
    }
}

.showTitle {
    border: 1px solid $gray;
    font-size: 1.3em;
    padding: 8px 16px;
    display: block;
}

.showCode {
    border: 1px solid $gray;
    border-top: none;
    font-size: 1.3em;
    padding: 8px 16px;
    display: block;

}

.code {
    border: 1px solid $gray;
    border-top: none;
    font-size: 1em;
    padding: 8px 16px;
    display: block;

    &.cantVisible {
        display: none;
    }
}
.test{
    padding-top: 25px;
}
</style>