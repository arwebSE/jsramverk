import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import About from "@/components/About";
import Reports from "@/components/Reports";
import Kmom01 from "@/components/Kmom01";

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
            path: "/reports/week/1",
            name: "Kmom01",
            component: Kmom01
        },
        {
            path: "/reports/week/:kmom",
            name: "Reports",
            component: Reports
        }
    ]
});
