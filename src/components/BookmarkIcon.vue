<template>
    <div class="icon-holder pb-3">
        <i @click="bookmarkArticle(article)"
           class="bi-bookmark"
           :class="{ bookmarked: isBookmarked(article) }"
        ></i>
    </div>
</template>

<script>
import {useBookmarkedArticlesStore} from "@/stores/BookmarkedArticlesStore";

export default {
    data() {
        const bookmarkStore = useBookmarkedArticlesStore();

        return {
            bookmarkStore
        }
    },
    props: {
        article: Object,
    },
    mounted() {
        this.bookmarkStore.restoreState();
    },
    methods: {
        bookmarkArticle(article) {
            this.bookmarkStore.addSelectedArticle(article);
        },
        isBookmarked(article) {
            return this.bookmarkStore.bookmarkedArticles.some((a) => a.id === article.id);
        }
    }
}
</script>

<style scoped>
.bi-bookmark {
    font-size: 1.5rem;
    color:#00BFA6;
    cursor: pointer
}

.bi-bookmark:hover {
    color: #13547a;
}

.bookmarked {
    color: yellow;
}
</style>