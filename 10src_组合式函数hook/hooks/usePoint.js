//函数式组件hooks,可以在此使用组合式api,
// hook本质是一个函数，把 setup 函数中使用的 Composition API 进行了封装。
import { reactive, onMounted, onBeforeUnmount } from "vue";

//暴露hook函数,只能在setup里面使用
export default function () {
	// 实现鼠标打点相关的数据
	const point = reactive({
		x: 0,
		y: 0,
	});

	// 实现鼠标打点相关的方法
	function savePoint(event) {
		console.log(event);
		point.x = event.pageX;
		point.y = event.pageY;
	}

	// 实现鼠标打点相关的生命周期钩子
	onMounted(() => {
		window.addEventListener("click", savePoint);
	});
	onBeforeUnmount(() => {
		window.removeEventListener("click", savePoint);
	});

	//将鼠标打点的结果返回
	return point;
}
