<template>
  <!-- vue3的App组件可以不用写div根标签 -->
  <h1>个人信息:</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>性别：{{sex}}</h2>
  <button @click="sayVue3">Vue3中的方法</button>
  <br><br>
  <button @click="sayVue2">Vue2中的方法</button>
  <br><br>
  <!--无法访问 -->
   <button @click="test1">Vue3中的方法--访问Vue2配置中的数据和方法</button>  
  <br><br>
  <!--可以访问 -->
  <button @click="test2">Vue2中的方法--访问Vue3的setup中的数据和方法</button> 
</template>

<script>
// 引入渲染函数
import {h} from 'vue'

// 尽量不要与 Vue2.x 配置混用
export default {
  name: 'App',
  // 使用vue2配置数据和方法
  data() {
    return {
      sex:'男'
    }
  },
  methods: {
    sayVue2(){
      alert('Vue2中的方法',this.sex)
    },
    test2(){
      //访问vue3 setup中的数据和方法
      console.log(this.name,this.age)
      this.sayVue3()
    }
  },

  // vue3新增的配置项setup()，组件中所用到的：数据、方法等等，均要配置在 setup 中
  // setup 中不能访问到Vue2.x 配置（data、methos、computed...）。
  // setup 函数的两种返回值：
  setup() {
    //创建数据
    let name = '张三'
    let age = 20
    console.log(this) //undefined,setup()中没有this
    //方法
    function sayVue3(){
      alert('Vue3中的方法',name,age)
    }
    function test1(){
      console.log(this.sex)
      this.sayVue2()
    }

    // 1.若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）
    // return {
    //   name,
    //   age,
    //   sayVue3,
    //   test1
    // }

    // 若返回一个渲染函数：则可以自定义渲染内容。（了解）
    return () => h('h1','测试setup()返回一个渲染函数')
  }
}
</script>

<style>

</style>
