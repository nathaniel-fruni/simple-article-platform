<template>
    <div class="justify-content-center align-items-center text-center mt-5 p-3">
        <h1 class="error-code m-0">404</h1>
        <p class="error-message">Page Not Found</p>
        <router-link to="/" class="btn btn-outline-dark">Back to Home</router-link>
    </div>
</template>

<style scoped>
.error-code {
    font-size: 6em;
    color: #2c3e50;
}
.error-message {
    font-size: 1.5em;
    color: #555;
}
</style>

<script>
import { usePageNotFoundStore } from '@/stores/PageNotFoundStore';

export default {
    data () {
        const pageNotFoundStore = usePageNotFoundStore();

        return {
            pageNotFoundStore
        }
    },
    created() {
        this.pageNotFoundStore.setNotFoundView(true);
    },
    beforeUnmount() {
        this.pageNotFoundStore.setNotFoundView(false);
    }
}
</script>

