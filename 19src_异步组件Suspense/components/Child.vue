<template>
	<div class="child">
		<h2>child(子)</h2>
		<Son />
	</div>
</template>

<script>
import Son from "./Son";
import { inject } from "vue";

export default {
	name: "Child",
	components: { Son },
	setup() {
		console.log("@@@@ Car ", inject("car", { name: "宝马", price: 50 }));
	},
};
</script>

<style scoped>
.child {
	background: skyblue;
	padding: 10px;
}
</style>
