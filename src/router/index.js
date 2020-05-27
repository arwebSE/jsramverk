import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import About from "@/components/About";
import Reports from "@/components/Reports";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Index
        },
        {
            path: "/about",
            name: "About",
            component: About
        },
        {
            path: "/reports/:kmom",
            name: "Reports",
            component: Reports
        }
    ]
});