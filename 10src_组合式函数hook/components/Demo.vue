<template>
	<h2>count:{{ count }}</h2>
	<button @click="count++">count+1</button>
	<hr />
	<h2>鼠标点击时的坐标: x={{ point.x }},y={{ point.y }}</h2>
</template>

<script>
import { ref } from "vue";
//引入hooks组件函数
import usePoint from "@/hooks/usePoint";

export default {
	name: "Demo",
	setup() {
		console.log("---setup---");
		const count = ref(0);
		const point = usePoint();

		// 返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。
		return {
			count,
			point,
		};
	},
};
</script>

<style></style>
