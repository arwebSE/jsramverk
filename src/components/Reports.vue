<template>
    <main>
        <Nav />
        <h1>Kmom0{{ $route.params.kmom }}</h1>
        <div class="question" v-for="question in questions" :key="question.key">
            <p>
                <strong>{{ question.question }}</strong>
            </p>
            <p>{{ question.answer }}</p>

        </div>
        <p>hej</p>
    </main>
</template>

<script>
const apiUrl = "http://localhost:1337";
let apiEndPoint = apiUrl + "/reports";

import Nav from "./Nav.vue";
export default {
    name: "Report",
    components: {
        Nav
    },
    data() {
        return {
            questions: [],
            errors: [],
            token: ""
        };
    },
    mounted() {
        this.checkLogin();
        this.getText(this.$route.params.kmom);
        document.addEventListener("mouseup", () => {
            this.getText(this.$route.params.kmom);
        });
    },
    methods: {
        getText(kmom) {
            let that = this;
            that.text = "";

            if (typeof this.$route.params.kmom == "string") {
                console.log("string detected");

                fetch(apiEndPoint + "/week/" + kmom)
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(result) {
                        that.questions = result.data.map((question, index) => {
                            return {
                                key: index,
                                question: question.question,
                                answer: question.answer
                            };
                        });
                    });
            } else {
                console.log("not fetching text");
                return "helo";
            }
        },
        checkLogin() {
            console.log("param", this.$route.params.kmom);
            if (typeof this.$route.params.kmom == "number") {
                console.log("protected route,logging in!");
                this.login();
            } else {
                console.log("skipping login");
            }
        },
        login() {
            console.log("login");

            const storedToken = localStorage.getItem("token");
            fetch(apiEndPoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": storedToken
                }
            })
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    console.log("Recieved data: ", data);
                })
                .catch(e => {
                    this.errors.push(e);
                });
        }
    }
};
</script>
