// 引入的不再是Vue构造函数，而是引入一个createApp工厂函数
import { createApp } from "vue";
import App from "./App.vue";
//vue3不支持vue2引入vue构造函数
// import Vue from 'vue' //undefined

// createApp(App).mount("#app");
const app = createApp(App);
app.mount("#app");

// console.log(app); //Object对象，里面包含了一些vue的方法和属性，可以看做轻量版的vm
