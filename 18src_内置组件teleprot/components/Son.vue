<template>
	<div class="son">
		<h2>son(孙)</h2>
		<Dialog></Dialog>
	</div>
</template>

<script>
import Dialog from "./Dialog.vue";
export default {
	name: "Son",
	components: { Dialog },
};
</script>

<style scoped>
.son {
	background: orange;
	padding: 10px;
}
</style>
