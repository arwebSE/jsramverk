<template>
    <main>
        <Nav />
        <h1>Home</h1>
        <p>{{ text }}</p>
    </main>
</template>

<script>
import Nav from "./Nav.vue";
export default {
    name: "Home",
    props: {},
    components: {
        Nav
    },
    data() {
        return {
            text: ""
        };
    },
    mounted() {
        this.getMe();
    },
    methods: {
        getMe() {
            let that = this;
            /* fetch("https://me-api.jsramverk.se")
                .then(function(response) {
                    return response.json();
                })
                .then(function(result) {
                    that.text = result.description;
                }); */
            that.text = `This webpage is a part of the course
            <a href="https://jsramverk.se">jsramverk</a> provided by Blekinge
            Tekniska Högskola.`;
            that.image = `<img alt="ARWeb logo" src="../assets/logo.png" width="300" />`;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

<!-- <img alt="ARWeb logo" src="../assets/logo.png" width="200" /> -->
