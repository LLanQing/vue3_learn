<template>
  <h1>个人信息:</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2 v-show="sex">性别：{{sex}}</h2>
  <h2 :v-show="career">职业：{{career}}</h2>
  <slot name="demo"></slot>
</template>

<script>
import { reactive} from 'vue'

export default {
  name:'Demo',
  props:['career','sex'],
  emits:['hello'],
  setup(props,context) {
    const person = reactive({
      name:'张三',
      age:20,
    })
    // console.log(this) //setup()是在beforeCreate之前执行的，this是undefined
    //props：值为Proxy实例对象，包含：组件外部传递过来，且组件内部声明接收了的属性。
    // console.log(props)  //Proxy {career: '前端工程师', sex: '男'}

    // Attribute (非响应式对象，等同于 $attrs，当子组件没有接收父组件传递的参数时，默认由$attrs接收)
    // console.log(context.attrs)

    // 插槽 (非响应式对象，等同于 $slots)
    console.log(context.slots)

    // 触发事件 (方法，等同于 $emit)
    // console.log(context.emit)
    context.emit('hello','Demo组件触发了hello事件')

    // 暴露公共 property (函数)
    // console.log(context.expose)

    return {
      person,
    }
  }
}
</script>

<style>

</style>