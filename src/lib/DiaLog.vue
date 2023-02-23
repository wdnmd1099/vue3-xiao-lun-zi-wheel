<template>
    <Teleport to='body'>
        <div class="overlay"></div>
        <div class="dialogWrapper" >
            <div class="toolWrapper">
                <header class="title">标题</header>
                <main class="msg">
                    生活就像海洋,只有意志坚强的人,才能到达彼岸
                </main>
                <footer class="buttons">
                    <Button type='primary' class="b1 button">OK</Button>
                    <Button class="b2 button">Cancel</Button>
                </footer>
            </div>
        </div>
    </Teleport>
</template>
    
<script lang="ts">
import Button from '../lib/Button.vue';

export default {
    components:{
        Button,
    },
    props:{
        visible:{ type:Boolean } 
        
    },
}
</script>


<style lang="scss">
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
}

.dialogWrapper {
    height: 100vh;
    width: 100vw;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    border: 1px solid red;
    top: 0;
}


.toolWrapper {
    flex-direction: column;
    background: white;
    // border: 1px solid red;
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
    }
    >.msg{
        border-bottom: 1px solid rgb(217, 217, 217);
        padding: 12px 16px;
        // word-wrap: break-word;
    }
    >.buttons{
        padding: 12px 16px;
        display: flex;
        justify-content: end;
        >.button{
            height: 32px;
            font-size: small;
        }
        >.b2{
            margin-left: 14px;
        }
    }
}
</style>