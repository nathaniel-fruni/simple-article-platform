<template>
    <section class="hero-section d-flex justify-content-center align-items-center" id="section_1">
        <div class="container">
            <div class="row">

                <div class="col-lg-8 col-12 mx-auto">
                    <h1 class="text-white text-center">Discover. Learn. Enjoy.</h1>

                    <h6 class="text-center">platform for creatives around the world</h6>
                </div>

            </div>
        </div>
    </section>

    <section class="featured-section">
        <div class="container">
            <div class="row justify-content-center">

                <div class="col-lg-4 col-12 mb-4 mb-lg-0">
                    <div class="custom-block bg-white shadow-lg">
                        <a href="#section_2">
                            <div class="d-flex">
                                <div>
                                    <h5 class="mb-2">Find a topic for you</h5>

                                    <p class="mb-0">Explore the collection of articles about various topics. Simply choose the ones that interests you the most.</p>
                                </div>
                            </div>

                            <img src="/public/images/topics/undraw_Remote_design_team_re_urdx.png" class="custom-block-image img-fluid" alt="">
                        </a>
                    </div>
                </div>

                <div class="col-lg-6 col-12">
                    <div class="custom-block custom-block-overlay">
                        <div class="d-flex flex-column h-100">
                            <img src="/public/images/newspaper-2542330_1280.jpg" class="custom-block-image img-fluid" alt="">

                            <div class="custom-block-overlay-text d-flex">
                                <div>
                                    <h5 class="text-white mb-2">A space where diverse topics converge</h5>

                                    <p class="text-white">Explore a range of insightful articles spanning design, marketing, finance, music, coding, and more. Our carefully crafted content offers a journey into the realms of creativity, innovation, and knowledge. Choose your preferred topic, dive into captivating articles, and embark on a discovery of ideas that inspire and inform. Join us on this intellectual voyage, where every click opens a gateway to new insights and perspectives.</p>

                                    <div class="text-center">
                                        <a href="#section_3" class="btn custom-btn mt-2 mt-lg-3">Learn More</a>
                                    </div>
                                </div>
                            </div>

                            <div class="section-overlay"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-3">
                <SelectTopicBar />
            </div>
        </div>
    </section>

    <section class="explore-section section-padding" id="section_2">
        <div class="container">
            <div class="row">

                <div class="col-12 text-center">
                    <h2 class="mb-4">Featured Articles</h2>
                </div>

            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li v-for="topic in filteredTopics" :key="topic.id" class="nav-item" role="presentation">
                        <button
                            :class="{ 'active': selectedTopic === topic }"
                            class="nav-link"
                            type="button"
                            @click="selectTopic(topic)"
                        >{{ topic.name }}</button>
                    </li>
                </ul>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="tab-content" id="myTabContent">
                        <div v-for="topic in filteredTopics" :key="topic.id" :class="{ 'show active': selectedTopic === topic }" class="tab-pane fade" role="tabpanel" :aria-labelledby="`${topic.slug}-tab`" tabindex="0">
                            <div class="row pb-2">
                                <div v-for="article in topic.articles.slice(0, 2)" :key="article.id" class="col-lg-6 col-md-6 col-12 mb-4 mb-lg-0">
                                    <div class="custom-block bg-white shadow-lg">
                                        <router-link :to="'/article/' + article.slug">
                                            <div class="d-flex">
                                                <div>
                                                    <h5 class="mb-2">{{ article.name }}</h5>
                                                    <p class="mb-0">{{ article.description }}</p>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <img :src="'/public/images/topics/' + article.image" class="custom-image img-fluid">
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="timeline-section section-padding" id="section_3">
        <div class="section-overlay"></div>

        <div class="container">
            <div class="row">

                <div class="col-12 text-center">
                    <h2 class="text-white mb-4">How does it work?</h2>
                </div>

                <div class="col-lg-10 col-12 mx-auto">
                    <div class="timeline-container">
                        <ul class="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
                            <div class="list-progress">
                                <div class="inner"></div>
                            </div>

                            <li>
                                <h4 class="text-white mb-3">Pick your favourite topic</h4>

                                <p class="text-white">Begin your journey by picking your favorite topics. Enter the realm of endless possibilities as you explore and discover the content that sparks your curiosity.</p>

                                <div class="icon-holder">
                                    <i class="bi-search"></i>
                                </div>
                            </li>

                            <li>
                                <h4 class="text-white mb-3">Find an article</h4>

                                <p class="text-white">Navigate through a curated collection and find the perfect article that resonates with your interests. From informative insights to captivating stories, there's something for every curious mind.</p>

                                <div class="icon-holder">
                                    <i class="bi-bookmark"></i>
                                </div>
                            </li>

                            <li>
                                <h4 class="text-white mb-3">Read &amp; Enjoy</h4>

                                <p class="text-white">Dive into the world of knowledge and enjoyment. Whether you're seeking information or pure entertainment, reading has never been more delightful. Sit back, relax, and let the adventure unfold.</p>

                                <div class="icon-holder">
                                    <i class="bi-book"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="section_4">
        <FaQ />
    </section>

    <section id="section_5">
        <ContactInfo/>
    </section>
</template>

<script>
import {useSelectedTopicStore} from "@/stores/SelectedTopicsStore";
import SelectTopicBar from "@/components/SelectTopicBar.vue";
import ContactInfo from "@/components/ContactInfo.vue";
import FaQ from "@/components/FaQ.vue";

export default {
    data () {
        const topicStore = useSelectedTopicStore();

        return {
            topicStore,
            selectedTopic: null,
        }
    },
    components: {FaQ, ContactInfo, SelectTopicBar},
    computed: {
        filteredTopics() {
            this.topicStore.restoreState();
            return this.topicStore.filteredTopics;
        },
        defaultTopic() {
            return this.filteredTopics[0];
        },
    },
    watch: {
        filteredTopics: {
            handler(newTopics) {
                this.selectedTopic = newTopics[0];
            },
            immediate: true, // This ensures the handler is called immediately on component creation
        },
    },
    methods: {
        selectTopic(topic) {
            this.selectedTopic = topic;
        }
    }
}
</script>

<style scoped>
.tab-pane {
    display: none;
}

.nav-link.active{
    border-bottom-color: var(--primary-color);
    color: var(--primary-color);
}

.tab-pane.show {
    display: block;
}
.custom-image {
    object-fit: cover;
    max-height: 200px;
}
</style>