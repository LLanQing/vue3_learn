<template>
	<div>
		<button @click="isShow = true">点我弹个窗</button>
		<!-- <teleprot>组件将插槽内容渲染到指定的 DOM 位置。
          to:必填项，指定目标容器。可以是选择器或实际元素。
              * 当值为 `true` 时，内容将保留在其原始位置， 而不是移动到目标容器中。
              * 可以动态更改。 -->
		<teleport to="body">
			<div class="mask" v-if="isShow">
				<div class="dialog">
					<h3>我是一个弹窗</h3>
					<h4>一些内容</h4>
					<h4>一些内容</h4>
					<h4>一些内容</h4>
					<h4>一些内容</h4>
					<button @click="isShow = false">关闭弹窗</button>
				</div>
			</div>
		</teleport>
	</div>
</template>

<script>
import { ref } from "vue";
export default {
	name: "Dialog",
	setup() {
		let isShow = ref(false);
		return {
			isShow,
		};
	},
};
</script>

<style scoped>
.mask {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.5);
	text-align: center;
}
.dialog {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 300px;
	height: 300px;
	background: #42b983;
}
</style>
