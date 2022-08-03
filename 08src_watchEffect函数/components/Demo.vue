<template>
	<h2>count:{{ count }}</h2>
	<h2>sum:{{ sum }}</h2>
	<button @click="count++">count+1</button>
	<button @click="sum++">sum+1</button>
	<hr />
	<h2>姓名：{{ person.name }}</h2>
	<h2>年龄：{{ person.age }}</h2>
	<h2>工作：{{ person.job.career }}</h2>
	<h2>薪资：{{ person.job.salary }}</h2>
	<button @click="person.name += '~'">修改姓名</button><br /><br />
	<button @click="person.age += 1">修改年龄</button><br /><br />
	<button @click="person.job.career = '后端工程师'">修改工作</button
	><br /><br />
	<button @click="person.job.salary = '30k'">修改薪资</button><br /><br />
	<hr />
	<h2>学生姓名：{{ student.name }}</h2>
	<h2>学生年龄：{{ student.age }}</h2>
	<button @click="student.age += 1">修改学生年龄</button>
</template>

<script>
import { reactive, ref, watchEffect } from "vue";

export default {
	name: "Demo",
	setup() {
		const count = ref(0);
		const sum = ref(20);
		const student = ref({ name: "李四", age: 16 });
		const person = reactive({
			name: "张三",
			age: 20,
			job: {
				career: "前端工程师",
				salary: "20k",
			},
		});
		//region
		/**watchEffect(callback,options)函数：
		 *  立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。
		 *  watchEffect 有点像 computed：
		 * - 但 computed 注重的计算出来的值（回调函数的返回值），所以必须要写返回值。
		 * - 而 watchEffect 更注重的是过程（回调函数的函数体），所以不用写返回值。
		 */
		//region
		const stop = watchEffect(onCleanUp => {
			// console.log(onCleanUp);
			// onCleanUp();
			console.log("count改变了", count.value);
			console.log("person.name改变了", person.name);
			// 无法监听响应式对象(ref,Proxy)
			// console.log("person改变了", person.job);
			// console.log("person改变了", student);
		});

		// 停止侦听器
		// stop()

		return {
			count,
			sum,
			person,
			student,
		};
	},
};
</script>

<style></style>
