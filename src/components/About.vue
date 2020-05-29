<template>
    <main>
        <Nav />
        <h1>Om</h1>
        <p>{{ text }}</p>
    </main>
</template>

<script>
import Nav from "./Nav.vue";
export default {
    name: "About",
    props: {},
    components: {
        Nav
    },
    data() {
        return {
            text: `This webpage is a part of the course
            <a href="https://jsramverk.se">jsramverk</a> provided by Blekinge
            Tekniska Högskola.`
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

<!-- <img alt="ARWeb logo" src="../assets/logo.png" width="200" /> -->
