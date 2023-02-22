<template>
  <div>
    <Switch v-model:notClick="c" />
  </div>
</template>

<script lang="ts" >
import { ref } from 'vue';
import Switch from '../lib/Switch.vue'
export default {
    components: { Switch, showCode },
    setup() {
        const c = ref(true)
        return { c }
    }
}
</script>

<style lang="scss"></style>