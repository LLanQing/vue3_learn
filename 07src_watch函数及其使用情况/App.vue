<template>
  <!-- vue3的App组件可以不用写div根标签 -->
  <Demo>
  </Demo>
</template>

<script>
// vue3是按需引入，引入reactive 
// import { reactive } from 'vue'
import Demo from './components/Demo.vue'



export default {
  name: 'App',
  components:{Demo},
}
</script>

<style>

</style>
