<template>
	<!-- vue3的App组件可以不用写div根标签 -->
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
