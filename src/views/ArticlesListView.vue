<template>
    <div>
        <PageHeaderInfo />
        <section class="section-padding">
            <div class="container">
                <div class="mb-5">
                    <SelectedTopicBar />
                </div>

                <div class="row">
                    <div class="col-lg-12 col-12 text-center">
                        <h2 class="mb-4">Articles To Read</h2>
                    </div>

                    <div class="col-lg-8 col-12 mt-3 mx-auto">
                        <div v-for="article in paginatedArticles" :key="article.id">
                            <ArticleCard :article="article" />
                        </div>
                    </div>

                    <div class="col-lg-12 col-12">
                        <nav>
                            <ul class="pagination justify-content-center mb-0">
                                <li class="page-item" :class="{ disabled: currentPage === 1 }" style="cursor:pointer">
                                    <a class="page-link" @click="goToPage(currentPage - 1)">
                                        <span>Prev</span>
                                    </a>
                                </li>

                                <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: page === currentPage }" style="cursor:pointer">
                                    <a class="page-link" @click="goToPage(page)">{{ page }}</a>
                                </li>

                                <li class="page-item" :class="{ disabled: currentPage === totalPages }" style="cursor:pointer">
                                    <a class="page-link" @click="goToPage(currentPage + 1)">
                                        <span>Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <ContactInfo />
    </div>
</template>

<script>
import topicsData from "@/topics.json";
import { useSelectedTopicStore } from "@/stores/SelectedTopicsStore";
import SelectedTopicBar from "@/components/SelectTopicBar.vue";
import PageHeaderInfo from "@/components/PageHeaderInfo.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import ContactInfo from "@/components/ContactInfo.vue";

export default {
    data() {
        const topicStore = useSelectedTopicStore();
        return {
            topicStore,
            topics: topicsData.topics,
            currentPage: 1,
            itemsPerPage: 4
        };
    },
    components: { PageHeaderInfo, SelectedTopicBar, ContactInfo, ArticleCard },
    computed: {
        filteredArticles() {
            this.topicStore.restoreState();
            return this.topicStore.filteredTopics(this.topics).flatMap(topic => topic.articles);
        },
        totalPages() {
            return Math.ceil(this.filteredArticles.length / this.itemsPerPage);
        },
        paginatedArticles() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.filteredArticles.slice(startIndex, endIndex);
        },
    },
    watch: {
        filteredArticles: 'adjustCurrentPage',
    },
    created() {
        this.topicStore.restoreState();
        if (this.topicStore.firstClick === true) {
            this.topicStore.fillSelectedTopics(this.topics);
        }
    },
    methods: {
        goToPage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
        adjustCurrentPage() {
            const totalPages = Math.ceil(this.filteredArticles.length / this.itemsPerPage);

            if (this.currentPage > totalPages) {
                this.currentPage = totalPages || 1;
            }
        },
    },
};
</script>
