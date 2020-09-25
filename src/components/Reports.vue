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
            questions: []
        };
    },
    mounted() {
        this.getText(this.$route.params.kmom);
    },
    methods: {
        getText(kmom) {
            let that = this;
            that.text = "";
            fetch("http://localhost:1337/reports/week/" + kmom)
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
        }
    }
};
</script>
