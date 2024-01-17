import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ArticlesListView from "@/views/ArticlesListView.vue";
import ContactFormView from "@/views/ContactFormView.vue";
import ArticleView from "@/views/ArticleView.vue";

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
      path: '/article',
      name: 'article',
      component: ArticleView
    }
  ]
})

export default router
