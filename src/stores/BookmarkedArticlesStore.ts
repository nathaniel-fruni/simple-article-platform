import { defineStore } from 'pinia';
import type { Article } from "@/types/Article"

interface BookmarksState {
    bookmarkedArticles: Article[];
}

export const useBookmarkedArticlesStore = defineStore('selectedArticle', {
    state: (): BookmarksState => ({
        bookmarkedArticles: [],
    }),
    actions: {
        persistState() {
            localStorage.setItem('bookmarkedArticlesState', JSON.stringify(this.$state));
        },
        restoreState() {
            const storedState = localStorage.getItem('bookmarkedArticlesState');
            if (storedState) {
                Object.assign(this.$state, JSON.parse(storedState));
            }
        },
        addSelectedTopic(article: Article) {
            this.bookmarkedArticles.push(article);
            this.persistState();
        },
        removeSelectedTopic(article: Article) {
            this.bookmarkedArticles = this.bookmarkedArticles.filter(element => element !== article);
            this.persistState();
        }
    }
})