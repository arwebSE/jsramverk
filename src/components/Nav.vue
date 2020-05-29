<template>
    <nav id="nav">
        <ul>
            <li><router-link to="/">Hem</router-link></li>
            <li><NavDropdown /></li>
            <li><router-link to="/about">Om</router-link></li>
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
