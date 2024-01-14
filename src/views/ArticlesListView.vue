<template>
    <header class="site-header d-flex flex-column justify-content-center align-items-center">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-lg-5 col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Homepage</a></li>

                            <li class="breadcrumb-item active" aria-current="page">Articles</li>
                        </ol>
                    </nav>

                    <h2 class="text-white">Articles</h2>
                </div>

            </div>
        </div>
    </header>


    <section class="section-padding">
        <div class="container">
            <div class="row">

                <div class="col-lg-12 col-12 text-center">
                    <h3 class="mb-4">Articles To Read</h3>
                </div>

                <div class="col-lg-8 col-12 mt-3 mx-auto">
                    <div v-for="topic in topics" :key="topic.id">
                        <div v-for="article in topic.articles" :key="article.id">
                            <ArticleCard2 :article="article" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center mb-0">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">Prev</span>
                                </a>
                            </li>

                            <li class="page-item active" aria-current="page">
                                <a class="page-link" href="#">1</a>
                            </li>

                            <li class="page-item">
                                <a class="page-link" href="#">2</a>
                            </li>

                            <li class="page-item">
                                <a class="page-link" href="#">3</a>
                            </li>

                            <li class="page-item">
                                <a class="page-link" href="#">4</a>
                            </li>

                            <li class="page-item">
                                <a class="page-link" href="#">5</a>
                            </li>

                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    </section>
</template>
<script>
import ArticleCard2 from "@/components/ArticleCard2.vue";
import dataTopics from "@/topics.json";

export default {
    components: {ArticleCard2},
    data() {
        return {
            topics: dataTopics.topics,
        }
    }
}
</script>