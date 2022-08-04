<template>
	<h2>count:{{ count }}</h2>
	<button @click="count++">count+1</button>
</template>

<script>
import {
	ref,
	onBeforeMount,
	onMounted,
	onBeforeUpdate,
	onUpdated,
	onBeforeUnmount,
	onUnmounted,
} from "vue";

export default {
	name: "Demo",
	setup() {
		console.log("---setup---");
		const count = ref(0);

		/* 使用组合式api生命周期,
		组合式api生命周期中没有beforeCreate和created钩子,
		setup函数被当做beforeCreate和created钩子,
		其他的钩子就是在生命周期配置项名称前加上`on` 
		组合式api生命周期执行顺序优先级高于配置项生命周期*/
		onBeforeMount(() => {
			console.log("---onBeforeMount---");
		});
		onMounted(() => {
			console.log("---onMounted---");
		});
		onBeforeUpdate(() => {
			console.log("---onBeforeUpdate---");
		});
		onUpdated(() => {
			console.log("---onUpdated---");
		});
		onBeforeUnmount(() => {
			console.log("---onBeforeUnmount---");
		});
		onUnmounted(() => {
			console.log("---onUnmounted---");
		});

		return {
			count,
		};
	},
	//使用生命周期配置项
	//#region
	/* beforeCreate() {
		console.log("----beforeCreate---");
	},
	created() {
		console.log("----created---");
	},
	beforeMount() {
		console.log("----beforeMount---");
	},
	mounted() {
		console.log("----mounted---");
	},
	beforeUpdate() {
		console.log("----beforeUpdate---");
	},
	updated() {
		console.log("----updated---");
	},
	beforeUnmount() {
		console.log("----beforeUnmount---");
	},
	unmounted() {
		console.log("----unmounted---");
	}, */
	//#endregion
};
</script>

<style></style>
