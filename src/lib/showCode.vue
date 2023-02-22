<template>
    <div>

        <div class="showTitle">
            {{ title }}
        </div>
        <div class="showWrapper">
            <slot />
        </div>
        <div class="showCode">
            <Button size="small" class="showCode-small" @click="showClick()">{{ canNotVisible ===
                false ? '查看代码' : "收起代码" }}</Button>
        </div>
        <div class="code" :class="{ cantVisible: canNotVisible === false }">
            <article class="markdown-body">
                <pre v-html="x"></pre>
             </article>>
           
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
        path: { type: String, required: true },
    },
    setup(props, context) {
        const canNotVisible = ref(false)
        const showClick = () => {
            canNotVisible.value = !canNotVisible.value
        }
        let x = ref('');
        const Prism = window.Prism
        console.log(Prism)
        if (props.path) {
            import(props.path).then((a) => { 
                x.value = Prism.highlight(a.default,Prism.languages.html,'html')
                })
        }
        

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
}

.showTitle {
    border: 1px solid $gray;
    // height: 30px;
    font-size: 1.3em;
    padding: 8px 16px;
    display: block;
}

.showCode {
    border: 1px solid $gray;
    border-top: none;
    // height: 30px;
    font-size: 1.3em;
    padding: 8px 16px;
    display: block;

    >.showCode-small {
        // font-size: 1em;
    }
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
</style>