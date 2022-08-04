<template>
	<h3>{{ person }}</h3>
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h2>工作：{{ job.career }}</h2>
	<h2>薪资：{{ job.salary }}K</h2>
	<button @click="name += '~'">修改姓名</button><br /><br />
	<button @click="age += 1">修改年龄</button><br /><br />
	<button @click="job.career = '后端工程师'">修改工作</button><br /><br />
	<button @click="job.salary += 1">修改薪资</button><br /><br />
</template>

<script>
import { reactive, toRef, toRefs } from "vue";

export default {
	name: "Demo",
	setup() {
		const person = reactive({
			name: "张三",
			age: 20,
			job: {
				career: "前端工程师",
				salary: 20,
			},
		});
		/* - 作用：可用于为响应式对象上的 property 创建 ref。
				这样创建的 ref 与其源 property 保持同步：改变源 property 将更新 ref，反之亦然。
			- 语法：`const name = toRef(person,'name')` */
		// const name = toRef(person, "name");
		// const age = toRef(person, "age");

		/* `toRefs` 与`toRef`功能一致，但可以批量创建多个 ref 对象，语法：`toRefs(person)`,
				将person中的基本数据类型转换成ref队形，job对象转换成Proxy对象 */
		// const person1 = toRefs(person);
		// console.log(person1); //{name: ObjectRefImpl, age: ObjectRefImpl, job: ObjectRefImpl}

		/* const name = ref(person.name)
		特别注意： name 不会和 person.name 保持同步，因为这个 ref() 接收到的是一个纯数值。 */

		// 返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。
		return {
			person,
			// name,
			// age,
			// salary: toRef(person.job, "salary"),
			// job: toRef(person, "job"),
			...toRefs(person),
		};
	},
};
</script>

<style></style>
