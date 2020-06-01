<template>
    <main>
        <Nav />
        <h1>Kmom01</h1>
        <h3>Github Readme</h3>
        <pre>{{ data }}</pre>
    </main>
</template>

<script>
import Nav from "./Nav.vue";
export default {
    name: "Report",
    components: {
        Nav
    },
    data() {
        return {
            data: null
        };
    },
    mounted() {

            fetch(
                "https://raw.githubusercontent.com/arwebSE/jsramverk/master/README.md"
            )
            .then(response => response.text())
            .then(response => (this.data = response));
    }
};
</script>
