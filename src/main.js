import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
    router,
    data: {
        groceryList: [
            { id: 0, text: "Vegetables" },
            { id: 1, text: "Cheese" },
            { id: 2, text: "Whatever else humans are supposed to eat" }
        ]
    },
    render: h => h(App)
}).$mount("#app");

Vue.component("todo-item", {
    props: ["todo"],
    template: "<li>{{ todo.text }}</li>"
});
