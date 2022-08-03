<template>
  <!-- vue3的App组件可以不用写div根标签 -->
  <Demo career="前端工程师" sex="男" @hello="sayHello">
    <template v-slot:demo >  
      <h2>插槽</h2>
    </template>
  </Demo>
</template>

<script>
// vue3是按需引入，引入reactive 
// import { reactive } from 'vue'
import Demo from './components/Demo.vue'



export default {
  name: 'App',
  components:{Demo},
  methods:{
    sayHello(value){
      console.log('Hello--',value)
    }
  }
}
</script>

<style>

</style>
