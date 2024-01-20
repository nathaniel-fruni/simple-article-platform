<template>
    <header class="site-header d-flex flex-column justify-content-center align-items-center">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-lg-5 col-12">
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><router-link to="/">Homepage</router-link></li>
                            <li v-if="isArticleRoute" class="breadcrumb-item"><router-link to="/articles">Articles</router-link></li>
                            <li class="breadcrumb-item active">{{ currentPage }}</li>
                        </ol>
                    </nav>

                    <h2 class="text-white">{{ currentPage }}</h2>
                </div>

            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            currentPage: ''
        };
    },
    computed: {
        isArticleRoute() {
            return this.$route.path.startsWith('/article/');
        }
    },
    watch: {
        $route(newRoute) {
            // aktualizacia currenPage, ked sa zmeni cesta
            this.updateCurrentPage(newRoute);
        }
    },
    created() {
        // inicializacia currentPage, ked sa vytvori komponent
        this.updateCurrentPage(this.$route);
    },
    methods: {
        updateCurrentPage(route) {
            // mapovanie routes na user-friendly nazvy
            const routeMapping = {
                '/': 'Homepage',
                '/articles': 'Articles',
                '/contactForm': 'Contact Form'
            };

            if (this.isArticleRoute) {
                this.currentPage = 'Article';
            } else {
                this.currentPage = routeMapping[route.path] || 'Unknown';
            }
        }
    }
};
</script>