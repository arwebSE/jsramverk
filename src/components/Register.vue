<template>
    <main>
        <Nav />

        <section class="hero is-primary rounded">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">Register</h1>
                    <ul
                        class="subtitle error-msg"
                        v-if="errors && errors.length"
                    >
                        <li v-for="error of errors" :key="error.message">
                            {{ error.message }}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="field">
                    <label class="label is-large" for="username"
                        >Username:</label
                    >
                    <div class="control">
                        <input
                            type="username"
                            class="input is-large"
                            id="username"
                            v-model="username"
                        />
                    </div>
                </div>
                <div class="field">
                    <label class="label is-large" for="password"
                        >Password:</label
                    >
                    <div class="control">
                        <input
                            type="password"
                            class="input is-large"
                            id="password"
                            v-model="password"
                        />
                    </div>
                </div>

                <div class="control">
                    <a class="button is-large is-primary" @click="register"
                        >Register</a
                    >
                </div>

                <br />

                <p>
                    <router-link to="/login">Already registered?</router-link>
                </p>
            </div>
        </section>
    </main>
</template>

<script>
const apiUrl = "http://localhost:1337";
let apiEndPoint = apiUrl + "/register";

import Nav from "./Nav.vue";
/* import axios from 'axios';
 */
export default {
    name: "Login",
    props: {},
    components: {
        Nav
    },
    data() {
        return {
            username: "",
            password: "",
            submitted: false,
            errors: []
        };
    },
    methods: {
        register: function() {
            this.submitted = true;
            console.log("Submitted user:", this.username, "pw:", this.password);

            fetch(apiEndPoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                })
            })
                .then(res => res.json())
                .catch(e => {
                    this.errors.push(e);
                });
        }
    }
};
</script>
