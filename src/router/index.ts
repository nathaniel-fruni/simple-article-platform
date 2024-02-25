import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ArticlesListView from "@/views/ArticlesListView.vue";
import ContactFormView from "@/views/ContactFormView.vue";
import ArticleView from "@/views/ArticleView.vue";
import BookmarkedArticlesView from "@/views/BookmarkedArticlesView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticlesListView
    },
    {
      path: '/contactForm',
      name: 'contactForm',
      component: ContactFormView
    },
    {
      path: '/article/:slug',
      name: 'article',
      component: ArticleView
    },
    {
      path: '/bookmarked-articles',
      name: 'bookmarked-articles',
      component: BookmarkedArticlesView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0 };
    }
  },
})

export default router
