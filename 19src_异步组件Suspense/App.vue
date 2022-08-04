<template>
	<div class="app">
		<h2>app(祖) {{ name }}---{{ price }}</h2>
		<!-- 因为网络或者其他问题导致子组件渲染比较慢，等待异步子组件时渲染一些额外提示内容，
				让应用有更好的用户体验 -->
		<Suspense>
			<!-- 主要内容 -->
			<template v-slot:default>
				<Child />
			</template>
			<!-- 主要内容没有加载出来显示的内容 -->
			<template v-slot:fallback>
				<h3>加载中.....</h3>
			</template>
		</Suspense>
	</div>
</template>

<script>
// import Child from "./components/Child";	//静态引入组件
import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import("./components/Child.vue")); //异步(动态)引入组件

import { reactive, toRefs, provide } from "vue";
export default {
	name: "App",
	components: { Child },
	setup() {
		let car = reactive({
			name: "benz",
			price: 40,
		});
		// provide() 接受两个参数：第一个参数是要注入的 key，可以是一个字符串或者一个 symbol，第二个参数是要注入的值。
		provide("car", car); //给自己的后代组件递数据 后代都可以
		return {
			...toRefs(car),
		};
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
.app {
	background: grey;
	padding: 10px;
}
</style>
