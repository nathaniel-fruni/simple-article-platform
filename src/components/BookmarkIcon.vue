<template>
    <div class="icon-holder pb-3">
        <i @click="bookmarkArticle(article)"
           class="bi-bookmark"
        >{{ slotText }}</i>
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
        slotText: String,
    },
    methods: {
        bookmarkArticle(article) {
            if (this.bookmarkStore.bookmarkedArticles.includes(article)) {
                this.bookmarkStore.removeSelectedTopic(article);
            } else {
                this.bookmarkStore.addSelectedTopic(article);
            }
        },
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
</style>