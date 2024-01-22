<template>
    <div class="custom-block custom-block-topics-listing bg-white shadow-lg mb-5">
        <div class="d-flex">
            <img :src="'/images/topics/' + article.image" class="custom-block-image img-fluid" alt="image">

            <div class="custom-block-topics-listing-info d-flex">
                <div>
                    <h5 class="mb-2">{{ article.name }}</h5>
                    <p class="mb-0">{{ article.description }}</p>
                    <router-link :to="{ name:'article', params: { slug: article.slug } }" class="btn custom-btn mt-3 mt-lg-4">Learn More</router-link>
                    <div class="d-flex justify-content-end">
                        <BookmarkIcon :article="article" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BookmarkIcon from "@/components/BookmarkIcon.vue";

export default {
    props: {
        article: Object,
    },
    components: {BookmarkIcon},
}
</script>
