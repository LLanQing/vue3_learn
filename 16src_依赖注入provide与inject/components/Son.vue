<template>
	<div class="son">
		<h2>son(孙)</h2>
		<h3>从app组件获取的数据:{{ car.name }} --- {{ car.price }}</h3>
	</div>
</template>

<script>
import { inject } from "vue";
export default {
	name: "Son",
	setup() {
		/* inject(key[,default])
    第一个参数是注入的 key。Vue 会遍历父组件链，通过匹配 key 来确定所供给的值。
        如果父组件链上多个组件对同一个 key 供给了值，那么离得更近的组件将会“覆盖”链上更远的组件所供给的值。
        如果没有能通过 key 匹配到值，inject() 将返回 undefined，除非提供了一个默认值。
    第二个参数是可选的，即在没有匹配到 key 时使用的默认值。它也可以是一个工厂函数，
        用来返回某些创建起来比较复杂的值。如果默认值本身就是一个函数，那么你必须将 false 作为第三个参数传入，
        表明这个函数就是默认值，而不是一个工厂函数。
     */
		const car = inject("car", { name: "宝马", price: 50 });
		console.log(car); //响应式数据
		return {
			car,
		};
	},
};
</script>

<style scoped>
.son {
	background: orange;
	padding: 10px;
}
</style>
