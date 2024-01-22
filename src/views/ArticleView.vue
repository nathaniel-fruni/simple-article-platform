<template>
    <PageHeaderInfo />

    <section class="topics-detail-section section-padding" id="topics-detail">
        <div class="container">
            <div class="row">

                <div class="col-lg-8 col-12 m-auto">
                    <h3 class="mb-4">{{ article.name }}</h3>

                    <p>{{ article.section1 }}</p>

                    <p>{{ article.section2 }}</p>

                    <blockquote>
                        {{ article.quote }}
                    </blockquote>

                    <div class="row my-4">
                        <div class="col-lg-6 col-md-6 col-12">
                            <img :src="'/images/articles/' + article.article_image1" class="topics-detail-block-image img-fluid" alt="student">
                        </div>

                        <div class="col-lg-6 col-md-6 col-12 mt-4 mt-lg-0 mt-md-0">
                            <img :src="'/images/articles/' + article.article_image2" class="topics-detail-block-image img-fluid" alt="office">
                        </div>
                    </div>

                    <p>{{ article.section3 }}</p>
                </div>

            </div>
        </div>
    </section>

    <section class="section-padding section-bg">
        <div class="container">
            <div class="row justify-content-center">

                <div class="col-lg-5 col-12">
                    <img src="/images/newspaper-2542330_1280.jpg" class="newsletter-image img-fluid" alt="">
                </div>

                <div class="col-lg-5 col-12 subscribe-form-wrap d-flex justify-content-center align-items-center">
                    <form class="custom-form subscribe-form" @submit.prevent="submitForm">
                        <h4 class="mb-4 pb-2">Get Newsletter</h4>

                        <input v-model="email" type="email" name="subscribe-email" id="subscribe-email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Email Address" required="">

                        <div class="col-lg-12 col-12">
                            <button type="submit" class="form-control">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios  from "axios";
import PageHeaderInfo from "@/components/PageHeaderInfo.vue";
import dataTopics from "../topics.json";

export default {
    data() {
        return {
            article: null,
            email: '',
        }
    },
    components: {PageHeaderInfo},
    methods: {
        getArticleBySlug(slug) {
            for (const topic of dataTopics.topics) {
                this.article = topic.articles.find(article => article.slug === slug);
                if (this.article) {
                    return this.article;
                }
            }
            return null;
        },
        submitForm() {
            const formData = {
                email: this.email,
            };

            axios.post('https://jsonplaceholder.typicode.com/posts', formData)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });

            this.email = '';
        }
    },
    created() {
        const slug = this.$route.params.slug;
        this.article = this.getArticleBySlug(slug);

        if (!this.article) {
            this.$router.replace({ name: 'not-found' });
        }
    }
}
</script>

<style scoped>

</style>