<template>
    <div>
        <NavBar />

        <div class="HomeLogo">
            <img class="Logo" src="../svg/lunziLogo.svg" alt="轮子图片">
        </div>

        <div class="title">
            <h1>小轮子UI</h1>
        </div>
        

        <div class="HomeText">
            <h4>木直中绳，輮以为轮，其曲中规</h4>
            <h4>《荀子·劝学》</h4>
        </div>

        <div class="HomeButtons">
            <Button size="large" class="github"><a href="" class="noUnderline">Github</a></Button>
            <Button size="large" class="github"><router-link to="/start">开始</router-link> </Button>
        </div>


        <div class="features">
            <ul>
                <li>
                    <svg>
                        <use xlink:href="#icon-vue"></use>
                    </svg>
                    <h3>基于 Vue 3</h3>
                    <p>骄傲地使用了 Vue 3 Composition API</p>
                </li>
                <li>
                    <svg>
                        <use xlink:href="#icon-ts"></use>
                    </svg>
                    <h3>基于 TypeScript </h3>
                    <p>源代码采用 TypeScript 书写</p>
                </li>
                <li>
                    <svg>
                        <use xlink:href="#icon-light"></use>
                    </svg>
                    <h3>代码易读</h3>
                    <p>每个组件的源代码都极其简洁</p>
                </li>
            </ul>
        </div>


    </div>
</template>
  
<script>
import NavBar from '../components/NavBar.vue';
import Button from '../lib/Button.vue';

export default {
    components:{
        NavBar,
        Button,
    },
}
</script>


<style lang="scss" scoped>
.github{
    margin-right: 20px;
    .noUnderline{
    text-decoration: none;
}
}

.HomeLogo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;

    .Logo {
        height: 300px;
        width: 300px;
    }
}
.title{
    margin-top: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.HomeText {
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 35px;
    font-size: 1.2em;
    // font-weight: 400;
}

.HomeButtons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
}

.features {
    margin: 64px auto;
    padding: 0 16px;

    @media (min-width: 800px) {
        width: 800px;

        >ul {
            >li {
                width: 50%;
            }
        }
    }

    @media (min-width: 1200px) {
        width: 1200px;

        >ul {
            >li {
                width: 33.3333%;
            }
        }
    }

    >ul {
        display: flex;
        flex-wrap: wrap;

        >li {
            margin: 16px 0;
            display: grid;
            justify-content: start;
            align-content: space-between;
            grid-template-areas:
                "icon title"
                "icon text";
            grid-template-columns: 80px auto;
            grid-template-rows: 1fr auto;

            >svg {
                grid-area: icon;
                width: 64px;
                height: 64px;
            }

            >h3 {
                grid-area: title;
                font-size: 28px;
            }

            >p {
                grid-area: text
            }
        }
    }
}
</style>