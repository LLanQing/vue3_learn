<template>
	<!--vue3的组件模版结构可以没有根标签-->
	<input v-model="keyWord" />
	<h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from "vue";

export default {
	name: "App",
	setup() {
		// const keyWord = ref("hello");
		// 使用customRef实现自定义ref功能
		/* customRef()创建一个自定义的 ref，显式声明对其依赖追踪和更新触发的控制方式。
		customRef() 预期接收一个工厂函数作为参数，这个工厂函数接受 track 和 trigger 两个函数作为参数，
			并返回一个带有 get 和 set 方法的对象。
		一般来说，track() 应该在 get() 方法中调用，而 trigger() 应该在 set() 中调用。然而事实上，
			你对何时调用、是否应该调用他们有完全的控制权。 */
		function myRef(value, delay = 500) {
			// 防抖 ref，即只在最近一次 set 调用后的一段固定间隔后再调用
			let timer;
			return customRef((track, trigger) => {
				return {
					get() {
						console.log(`从myRef这个容器读取数据,data:${value}`);
						track(); //通知追踪value的变化(跟getter商量一下让它明确你这个value是有用的),不调用track无法追踪keyWord的value变化
						return value;
					},
					set(newValue) {
						console.log(`myRef容器中的数据被修改,data改为${newValue}`);
						// 防抖 ref，即只在最近一次 set 调用后的一段固定间隔后再调用
						clearTimeout(timer);
						//用户输入后过一段时间再更新模板数据
						timer = setTimeout(() => {
							value = newValue;
							trigger(); //trigger通知vue重新解析模版
						}, delay);
					},
				};
			});
		}

		const keyWord = myRef("hello", 500);
		return { keyWord };
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
</style>
