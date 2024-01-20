<template>
    <PageHeaderInfo />
    <section class="section-padding">
        <div class="container">
            <div class="mb-5">
                <SelectedTopicBar />
            </div>

            <div class="row">

                <div class="col-lg-12 col-12 text-center">
                    <h2 class="mb-4">Articles To Read</h2>
                </div>

                <div class="col-lg-8 col-12 mt-3 mx-auto">
                    <div v-for="topic in filteredTopics" :key="topic.id">
                        <div v-for="article in topic.articles" :key="article.id">
                            <ArticleCard :article="article" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12">
                    <nav>
                        <ul class="pagination justify-content-center mb-0">
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    <span>Prev</span>
                                </a>
                            </li>

                            <li class="page-item">
                                <a class="page-link" href="#">
                                    <span>Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    </section>
    <ContactInfo />
</template>
<script>
import {useSelectedTopicStore} from "@/stores/SelectedTopicsStore";
import SelectedTopicBar from "@/components/SelectTopicBar.vue";
import PageHeaderInfo from "@/components/PageHeaderInfo.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import ContactInfo from "@/components/ContactInfo.vue";

export default {
    data () {
        const topicStore = useSelectedTopicStore();

        return {
            topicStore
        }
    },
    components: {PageHeaderInfo, SelectedTopicBar, ContactInfo, ArticleCard},
    computed: {
        filteredTopics() {
            this.topicStore.restoreState();
            return this.topicStore.filteredTopics;
        }
    }
}
</script>