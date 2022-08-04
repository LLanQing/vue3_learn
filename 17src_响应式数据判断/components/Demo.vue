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
import {
	reactive,
	ref,
	toRefs,
	readonly,
	shallowReadonly,
	isRef,
	isReactive,
	isReadonly,
	isProxy,
} from "vue";

export default {
	name: "Demo",
	setup() {
		let count = ref(0);

		let student = ref({ name: "李四", age: 16 });
		student = readonly(student);

		let person = reactive({
			name: "张三",
			age: 20,
			job: {
				career: "前端工程师",
				salary: 20,
			},
		});

		// - isRef: 检查一个值是否为一个 ref 对象
		console.log(isRef(count)); //true
		// - isReactive: 检查一个对象是否是由 `reactive` 、shallowReactive创建的响应式代理
		console.log(isReactive(person)); //true
		// - isReadonly: 检查一个对象是否是由 `readonly`、shallowReadonly创建的只读代理
		console.log(isReadonly(student)); //true
		// - isProxy: 检查一个对象是否是由 `reactive` 、shallowReactive、 或者 `readonly`、shallowReadonly方法创建的代理
		console.log(isProxy(count)); //false
		console.log(isProxy(person)); //true
		console.log(isProxy(student)); //false

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
