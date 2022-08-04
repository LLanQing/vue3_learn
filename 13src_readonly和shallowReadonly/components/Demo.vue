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
import { reactive, ref, toRefs, readonly, shallowReadonly } from "vue";

export default {
	name: "Demo",
	setup() {
		/* - readonly: 接受一个对象 (不论是响应式还是一般的) 或是一个 ref，返回一个原值的只读代理。
			只读代理是深层的：对任何嵌套 	property 的访问都将是只读的。
			它的 ref 解包行为与 `reactive()` 相同，但解包得到的值是只读的。 */
		// let count = ref(0);
		// count = readonly(count);
		let count = 0;
		count = readonly(count); //报错，只能传对象，value cannot be made reactive

		let student = ref({ name: "李四", age: 16 });
		student = readonly(student);
		// let student = { name: "李四", age: 16 };
		// student = readonly(student);

		let person = reactive({
			name: "张三",
			age: 20,
			job: {
				career: "前端工程师",
				salary: 20,
			},
		});
		// - shallowReadonly：让一个对象变为只读的（浅只读）。深层次的对象还是可以修改
		// person = readonly(person);
		person = shallowReadonly(person);

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
