<template>
    <nav id="nav">
        <ul class="nav-center">
            <li><router-link to="/">Hem</router-link></li>
            <li><NavDropdown /></li>
            <li><router-link to="/about">Om</router-link></li>
        </ul>
        <ul class="nav-right">
            <li><router-link to="/login">Login</router-link></li>
            <li><router-link to="/register">Register</router-link></li>
        </ul>
    </nav>
</template>

<script>
import NavDropdown from "./NavDropdown.vue";
export default {
    name: "Nav",
    props: {},
    components: {
        NavDropdown
    }
};
</script>
