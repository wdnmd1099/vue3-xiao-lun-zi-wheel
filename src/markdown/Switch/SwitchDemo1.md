<template>
  <div>
    <Switch v-model:yesOrNo="y" />
  </div>
</template>

<script lang="ts" >
import { ref } from 'vue';
import Switch from '../lib/Switch.vue'
export default {
    components: { Switch, showCode },
    setup() {
        const y = ref(false)
        return { y }
    }
}
</script>

<style lang="scss"></style>