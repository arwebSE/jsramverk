import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import About from "@/components/About";
import Reports from "@/components/Reports";
import Login from "@/components/Login";
import Register from "@/components/Register";

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
            path: "/reports/week/:kmom",
            name: "Reports",
            component: Reports
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/register",
            name: "Register",
            component: Register
        }
    ]
});
