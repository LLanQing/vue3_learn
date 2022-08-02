<template>
  <!-- vue3的App组件可以不用写div根标签 -->
  <h1>个人信息:</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>职业：{{person.type}}</h2>
  <h2>薪资：{{person.salay}}</h2>
  <h2>同事：</h2>
  <ul><li v-for="(colleague,index) in person.colleagues" :key="index">{{colleague}}</li></ul>
  <h2>测试深层次响应式数据c:{{person.a.b.c}}</h2>
  <button @click="changeInfo">修改个人信息</button>


</template>

<script>
// vue3是按需引入，引入reactive 
import { reactive } from 'vue'



export default {
  name: 'App',
  setup() {
    /* - 作用: 定义一个对象类型的响应式数据（基本类型不要用它，要用`ref`函数）
    - 语法：`const 代理对象= reactive(源对象)`接收一个对象（或数组），返回一个代理对象（Proxy 的实例对象，简称 proxy 对象）
    - reactive 定义的响应式数据是“深层次的”。
    - 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。 */
    /* const name = ref('张三')
    const age = ref(20)
    const person = reactive({
      type:'前端工程师',
      salay:'20k'
    })
    const deepObj = reactive({
      a:{
        b:{
          c:'深层次的数据'
        }
      }
    })
    const arr = reactive(['马冬梅','夏洛特']) */

    const person = reactive({
      name:'张三',
      age:20,
      type:'前端工程师',
      salay:'20k',
      a:{
        b:{
          c:'深层次的数据'
        }
      },
      colleagues:['马冬梅','夏洛特']

    })
    // console.log(this) //undefined,setup()中没有this
    //方法
    function changeInfo(){
      person.name = '李四'
      person.age = 18
      person.type = '后端工程师'
      person.salay = '30k'
      person.a.b.c = '响应式数据'
      person.colleagues[0] = '马丽'
      console.log(person) //Proxy {name: '李四', age: 18, type: '后端工程师', salay: '30k', a: {…}, …}
    }
    return {
      person,
      changeInfo,
    }
  }
}
</script>

<style>

</style>
