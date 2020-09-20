<template>
    <main>
        <Nav />

        <section class="hero is-primary rounded">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">Login</h1>
                    <p class="subtitle error-msg">{{ errorMsg }}</p>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="field">
                    <label class="label is-large" for="email">Email:</label>
                    <div class="control">
                        <input type="email" class="input is-large" id="email" v-model="email">
                    </div>
                </div>
                <div class="field">
                    <label class="label is-large" for="password">Password:</label>
                    <div class="control">
                        <input type="password" class="input is-large" id="password" v-model="password">
                    </div>
                </div>

                <div class="control">
                    <a class="button is-large is-primary" @click="authenticate">Login</a>
                </div>

            </div>
        </section>

    </main>
</template>

<script>
import Nav from "./Nav.vue";
export default {
    name: "Login",
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
            `;
        }
    }
};
</script>
