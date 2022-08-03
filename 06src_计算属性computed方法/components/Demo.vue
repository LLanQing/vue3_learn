<template>
  <h1>姓名:</h1>
  <input type="text" v-model="person.firstName"><br>
  <input type="text" v-model="person.lastName"><br>
  <input type="text" v-model="person.fullName"><br>

</template>

<script>
import { reactive,computed} from 'vue'

export default {
  name:'Demo',
  setup() {
    const person = reactive({
      firstName:'张',
      lastName:'三'
    })
    // 简写形式，只读
    // person.fullName = computed(() => {
    //   return `${person.firstName}-${person.lastName}`
    // })

    // 完整写法，读写
    person.fullName = computed({// 读
      get(){
        return `${person.firstName}-${person.lastName}`
      },
      set(value){
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })
    return {
      person
    }
  }
}
</script>

<style>

</style>