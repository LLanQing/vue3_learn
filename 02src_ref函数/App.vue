<template>
  <!-- vue3的App组件可以不用写div根标签 -->
  <h1>个人信息:</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>职业：{{person.type}}</h2>
  <h2>薪资：{{person.salay}}</h2>
  <button @click="changeInfo">修改个人信息</button>

</template>

<script>
// 引入ref 
import { ref } from 'vue'


export default {
  name: 'App',

  // vue3新增的配置项setup()，组件中所用到的：数据、方法等等，均要配置在 setup 中
  // setup 中不能访问到Vue2.x 配置（data、methos、computed...）。
  // setup 函数的两种返回值：
  setup() {
    //使用ref()定义响应式数据
    // - 基本类型的数据：响应式依然是靠Object.defineProperty()的get与`set完成的。
    // - 对象类型的数据：内部求助了 Vue3.0 中的一个新函数—— `reactive`函数。
    const name = ref('张三')
    const age = ref(20)
    const person = ref({
      type:'前端工程师',
      salay:'20k'
    })
    // console.log(this) //undefined,setup()中没有this
    //方法
    function changeInfo(){
      // console.log(name,age) //RefImpl对象
      // name.value = '李四'
      // age.value = 18
      console.log(person.value) //Proxy {type: '后端工程师', salay: '30k'}
      person.value.type = '后端工程师'
      person.value.salay = '30k'
    }


    // 1.若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）
    return {
      name,
      age,
      changeInfo,
      person
    }

  }
}
</script>

<style>

</style>
