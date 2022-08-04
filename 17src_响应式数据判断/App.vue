<template>
	<!-- vue3的App组件可以不用写div根标签 ，内部会将多个标签包含在一个 Fragment 虚拟元素中-->
	<Demo v-if="isShow"> </Demo>
</template>

<script>
import Demo from "./components/Demo.vue";
import { ref } from "vue";

export default {
	name: "App",
	components: { Demo },
	setup() {
		const isShow = ref(true);
		return { isShow };
	},
};
</script>

<style></style>
