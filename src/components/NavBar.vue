<template>
    <div>
        <div class="navBar">
            <div class="homeDiv"> <a href="/">小轮子UI</a> </div>
            <div><router-link to="/start">文档</router-link>
            </div>
        </div>
        <hr class="homeHr">
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

    a {
        text-decoration: none;
    }
}
</style>