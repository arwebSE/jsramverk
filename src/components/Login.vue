<template>
    <main>
        <Nav />

        <section class="hero is-primary rounded">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h3>Login</h3>
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
                    <label class="label is-large" for="username">
                        Username:
                    </label>
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
                    <label class="label is-large" for="password">
                        Password:
                    </label>
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
                    <a class="button is-large is-primary" @click="login">
                        Login
                    </a>
                </div>

                <br />

                <p>
                    <router-link to="/register">Not registered?</router-link>
                </p>
            </div>
        </section>
    </main>
</template>

<script>
const apiUrl = "http://localhost:1337";
let apiEndPoint = apiUrl + "/login";
import Nav from "./Nav.vue";

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
        login: function() {
            this.submitted = true;
            console.log("Submitted User:", this.username, "Pass:", this.password);

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
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    console.log("Recieved token: ", data);
                    localStorage.setItem("token", data);
                })
                .catch(e => {
                    this.errors.push(e);
                });
        }
    }
};
</script>
