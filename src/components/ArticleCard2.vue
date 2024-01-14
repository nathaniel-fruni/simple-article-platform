<template>
    <div class="custom-block custom-block-topics-listing bg-white shadow-lg mb-5">
        <div class="d-flex">
            <img :src="'/public/images/topics/' + article.image" class="custom-block-image img-fluid" alt="">

            <div class="custom-block-topics-listing-info d-flex">
                <div>
                    <h5 class="mb-2">{{ article.name }}</h5>

                    <p class="mb-0">{{ article.description }}</p>

                    <router-link to="/article" class="btn custom-btn mt-3 mt-lg-4">Learn More</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        article: Object,
    }
}
</script>
