<template>
    <div>
        <div>
            <div class="navBar">
                <div class="homeDiv"> 小轮子UI </div>
                <div> 文档 </div>
            </div>
            <hr class="homeHr">
        </div>

        <div class="HomeLogo">
            <img class="Logo" src="../svg/轮组.svg" alt="轮子图片">
        </div>


        <div class="HomeText">
            <div>木直中绳，輮以为轮，其曲中规</div>
            <div>《荀子·劝学》</div>
        </div>


        <div class="features">
            <div class="inFeatures">
                <img class="vue3Logo" src="../svg/vue3.png" alt="vue3">
                <div>
                    <h3>基于 Vue 3</h3>
                    <p>骄傲地使用了 Vue 3 Composition API</p>
                </div>
            </div>
            <div class="inFeatures">
                <img class="vue3Logo" src="../svg/vue3.png" alt="vue3">
                <div>
                    <h3>基于 Vue 3</h3>
                    <p>骄傲地使用了 Vue 3 Composition API</p>
                </div>
            </div>
            <div class="inFeatures">
                <img class="vue3Logo" src="../svg/vue3.png" alt="vue3">
                <div>
                    <h3>基于 Vue 3</h3>
                    <p>骄傲地使用了 Vue 3 Composition API</p>
                </div>
            </div>


        </div>
    </div>
</template>
  
<script>
export default {

}
</script>


<style lang="scss" scoped>
.navBar {
    display: flex;
    justify-content: space-between;
    // border: 1px solid red;
    margin: 20px;
    font-weight: 600;
    font-size: 1.2em;

    .homeHr {
        opacity: 0.5;
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

.HomeText {
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 64px;
    font-size: 1.2em;
    // font-weight: 400;
}



.features {
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;

    >.inFeatures {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .vue3Logo {
        height: 50px;
        width: 50px;
    }
}
</style>