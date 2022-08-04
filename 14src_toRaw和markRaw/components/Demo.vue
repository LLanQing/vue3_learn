<template>
	<h2>count:{{ count }}</h2>
	<button @click="count++">count+1</button>
	<hr />
	<h3>{{ person }}</h3>
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h2>工作：{{ job.career }}</h2>
	<h2>薪资：{{ job.salary }}K</h2>
	<h2>车:{{ person.car }}</h2>
	<button @click="name += '~'">修改姓名</button><br /><br />
	<button @click="age += 1">修改年龄</button><br /><br />
	<button @click="job.career = '后端工程师'">修改工作</button><br /><br />
	<button @click="job.salary++">修改薪资</button><br /><br />
	<button @click="addCar">添加一辆车</button>
	<button @click="changCarPrice">修改车的价格</button><br /><br />
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
	toRaw,
	markRaw,
} from "vue";

export default {
	name: "Demo",
	setup() {
		/* toRaw()将一个由`reactive、shallowReactive、readonly、shallowReadonly`
			生成的响应式对象(Proxy对象)转为普通对象。 
			ref对象无效，返回的还是ref对象 */
		let count = ref(0);
		// count = readonly(count);
		// console.log(toRaw(count)); //ref对象

		let student = ref({ name: "李四", age: 16 });
		// console.log(toRaw(student)); //ref对象

		let person = reactive({
			name: "张三",
			age: 20,
			job: {
				career: "前端工程师",
				salary: 20,
			},
		});
		// console.log(toRaw(person));	//{name: '张三', age: 20, job: {…}}

		/* // - shallowReadonly：让一个对象变为只读的（浅只读）。深层次的对象还是可以修改
		person = readonly(person);
		person = shallowReadonly(person);
		console.log(person);	//Proxy {name: '张三', age: 20, job: {…}} */

		// markRaw()标记一个对象，使其永远不会再成为响应式对象。
		function addCar() {
			const car = { name: "宝马", price: 50 };
			person.car = markRaw(car);
			console.log(person.car);
		}
		function changCarPrice() {
			person.car.price++;
			console.log(person.car.price);
		}

		return {
			person,
			count,
			student,
			...toRefs(person),
			addCar,
			changCarPrice,
		};
	},
};
</script>

<style></style>
