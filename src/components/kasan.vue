<template>
   <div>hi i m kasan</div>
   <router-link to="start" >开始</router-link>
</template>
  
<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
      return {
        count: 0
      }
    }
  }
</script>