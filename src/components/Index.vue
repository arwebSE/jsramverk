<template>
    <main>
        <Nav />
        <h1>Hem</h1>
        <p style="white-space: pre;">{{ text }}</p>
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
            that.text = `
Hej!

Mitt namn är August. Jag är 24 år gammal.

Jag är uppvuxen i Södertälje men har bott i Östergötlands Linköping
samt Norrköping och är nu den senaste tiden tillbaka i Södertälje
tillfälligt.

Mina huvudintressen är teknik, samt musik.
Inom teknik gillar jag främst webbprogrammering och design, gillar
att gräva mig djupt i nya tekniker och språk som fångar mitt
inresse.
Jag gillar att hitta stora lösningar på små problem som jag hittar
själv, eller ibland som jag får i uppdrag av andra.

Inom musik fungerar jag liknande på det sättet att jag gräver mig
djupt inom någon artist eller musikstil och intresserar mig oftast
mer än somliga inom divrse genrer o likn.
Jag spelar själv en rad instrument, däribland kontrabas, trummor,
gitarr. Komponerar även egen musik.

Hare bra!

/A
            `;
        }
    }
};
</script>

<!-- <img alt="ARWeb logo" src="../assets/logo.png" width="200" /> -->
