<template>
    <div>
        <PageHeaderInfo />

        <section class="section-padding">
            <div class="container">

                <div class="row">
                    <div class="col-lg-12 col-12 text-center">
                        <h2 class="mb-4">Your Bookmarked Articles</h2>
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
import { useBookmarkedArticlesStore } from "@/stores/BookmarkedArticlesStore";
import PageHeaderInfo from "@/components/PageHeaderInfo.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import ContactInfo from "@/components/ContactInfo.vue";

export default {
    data() {
        const bookmarkStore = useBookmarkedArticlesStore();
        return {
            bookmarkStore,
            currentPage: 1,
            itemsPerPage: 4
        };
    },
    components: { PageHeaderInfo, ContactInfo, ArticleCard },
    computed: {
        filteredArticles() {
            this.bookmarkStore.restoreState();
            return this.bookmarkStore.bookmarkedArticles;
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
    methods: {
        goToPage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
        adjustCurrentPage() {
            if (this.currentPage > this.totalPages) {
                this.currentPage = this.totalPages || 1;
            }
        },
    },
};
</script>