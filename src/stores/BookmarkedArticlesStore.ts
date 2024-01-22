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
        addSelectedArticle(article: Article) {
            const exists = this.bookmarkedArticles.some((a) => a.id === article.id);
            if (!exists) {
                this.bookmarkedArticles.push(article);
                this.persistState();
            } else {
                this.removeSelectedArticle(article);
            }
        },
        removeSelectedArticle(article: Article) {
            this.bookmarkedArticles = this.bookmarkedArticles.filter((a) => a.id !== article.id);
            this.persistState();
        }

    }
})