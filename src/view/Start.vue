<template>
    <div>
        <NavBar class="nav" />
        <div class="wrapper">
            <div class="list">
                <div>
                    <h2 class="document">文档</h2>
                    <ol class="addTopPadding">
                        <li><router-link to="/start/introduction">介绍</router-link></li>
                        <li><router-link to="/start/install">安装</router-link></li>
                        <li><router-link to="/start/comming">开始</router-link></li>
                    </ol>
                </div>
                <div>
                    <h2>组件列表</h2>
                    <ol class="addTopPadding">
                        <li><router-link to="/start/switch">switch</router-link></li>
                        <li><router-link to="/start/button">button</router-link></li>
                        <li><router-link to="/start/dialog">dialog</router-link></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <div class="view">
        <main><router-view /></main>
    </div>
   

</template>
   
<script>
import NavBar from '../components/NavBar.vue';
import '../router'
export default {
    name: 'Start',
    components: {
        NavBar
    }
}
</script>


<style lang="scss">
.nav{
    position: fixed;
}

.view{
    // border: 1px solid red;
    position: relative;
    top:80px;
    left: 160px;
    z-index: 1;
    height: calc(100vh - 80px);
    width: calc(100vw - 176px );
    overflow: auto;
}

.list {
    position: fixed;
    // border: 1px solid red;
    padding-left: 16px;
    width: 150px;
    top:70px;
    
    font-size: 0.8em;

    .document {
        padding-top: 8px;
    }

    ol {
        >li {
            padding-top: 8px;
            padding-bottom: 8px;

            >a {
                display: block;
                text-decoration: none;
            }

            .router-link-active {
                background: rgba(0, 0, 0, 0);
            }
        }
    }
}
</style>