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
            that.text = `Hej!
            <br /><br />
            Mitt namn är August. Jag är 24 år gammal.
            <br /><br />
            Jag är uppvuxen i Södertälje men har bott i Östergötlands Linköping
            samt Norrköping och är nu den senaste tiden tillbaka i Södertälje
            tillfälligt.
            <br /><br />
            Mina huvudintressen är teknik, samt musik.<br />
            Inom teknik gillar jag främst webbprogrammering och design, gillar
            att gräva mig djupt i nya tekniker och språk som fångar mitt
            inresse.<br />
            Jag gillar att hitta stora lösningar på små problem som jag hittar
            själv, eller ibland som jag får i uppdrag av andra.<br />
            <br /><br />
            Inom musik fungerar jag liknande på det sättet att jag gräver mig
            djupt inom någon artist eller musikstil och intresserar mig oftast
            mer än somliga inom divrse genrer o likn.<br />
            Jag spelar själv en rad instrument, däribland kontrabas, trummor,
            gitarr. Komponerar även egen musik.<br />
            <br /><br />
            Hare bra!<br />
            <br /><br />
            /A
            `;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

<!-- <img alt="ARWeb logo" src="../assets/logo.png" width="200" /> -->
