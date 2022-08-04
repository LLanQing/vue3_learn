<template>
	<h2>count:{{ count }}</h2>
	<button @click="count++">count+1</button>
	<hr />
	<h3>{{ person }}</h3>
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h2>工作：{{ job.career }}</h2>
	<h2>薪资：{{ job.salary }}K</h2>
	<button @click="name += '~'">修改姓名</button><br /><br />
	<button @click="age += 1">修改年龄</button><br /><br />
	<button @click="job.career = '后端工程师'">修改工作</button><br /><br />
	<button @click="job.salary += 1">修改薪资</button><br /><br />
	<hr />
	<h2>学生姓名：{{ student.name }}</h2>
	<h2>学生年龄：{{ student.age }}</h2>
	<button @click="student.age += 1">修改学生年龄</button>
</template>

<script>
import { reactive, ref, toRefs, shallowReactive, shallowRef } from "vue";

export default {
	name: "Demo",
	setup() {
		// - shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。
		const count = shallowRef(0); //处理基本数据类型时和ref没区别
		const student = shallowRef({ name: "李四", age: 16 });
		console.log(student); //value是一个普通的Object对象，没有借助reactive

		// - shallowReactive：只处理对象最外层属性的响应式（浅响应式）。
		const person = shallowReactive({
			name: "张三",
			age: 20,
			job: {
				career: "前端工程师",
				salary: 20,
			},
		});
		console.log(person); //job对象是一个普通的对象，不是Proxy对象
		return {
			person,
			count,
			student,
			...toRefs(person),
		};
	},
};
</script>

<style></style>
