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
import { reactive, ref, watch } from "vue";

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

		/*watch(source,callback,options)
        source是要监控的源数据，只能是一下几种：
          - 一个函数，返回一个值
          - 一个 ref
          - 一个响应式对象
          - ...或是由以上类型的值组成的数组 
    */

		//情况一：监视一个ref定义的响应式数据
		/* watch(count,(newVal,oldVal) => {
      console.log('count改变了--',newVal,oldVal)
    }) */
		// 当监视的ref的value是一个对象时，需要开启deep
		/* watch(
			student,
			(newVal, oldVal) => {
				console.log("count改变了--", newVal, oldVal);
			},
			{ deep: true }
		); */

		//情况二：监视多个数据，以数组的形式传参，回调函数中的参数也是数组的形式一一对应
		/* watch(
			[count, sum, person.job, () => person.name],
			([count, sum, job, name], [precount, presum, prejob, prename]) => {
				console.log("count改变了--", count, precount);
				console.log("sum改变了--", sum, presum);
				console.log("job改变了--", job, prejob);
				console.log("name改变了--", name, prename);
			}
		); */

		/* 情况三：监视Proxy响应式对象(person,person.job都是响应式对象)
        若watch监视的是Proxy响应式对象，则无法正确获得oldValue！！
        若watch监视的是Proxy响应式对象，则强制开启了深度监视 
    */
		/* watch(
			person,
			(newVal, oldVal) => {
				console.log("person改变了--", newVal, oldVal); //newVal === oldVal
			},
			{ immediate: true, deep: false }
		); //当直接侦听一个响应式对象时，侦听器自动处于深层级模式，无法使用deep配置改变
 */
		//情况四：监视一个 getter 函数
		/* watch(
			() => person.name,
			(newVal, oldVal) => {
				console.log("person改变了--", newVal, oldVal);
			}
		);
		//特殊情况，当监视一个getter函数返回值是一个对象时，监视对象的属性的变化需要deep开启深度监视
		watch(
			() => person.job,
			(newVal, oldVal) => {
				console.log("person改变了--", newVal, oldVal);
			},
			{ deep: true }
		);
 */
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
