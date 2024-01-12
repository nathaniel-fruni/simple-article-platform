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
                        <a href="topics-detail.html">
                            <div class="d-flex">
                                <div>
                                    <h5 class="mb-2">Web Design</h5>

                                    <p class="mb-0">Explore the art and science of web design, where every pixel has a purpose and every color tells a story.</p>
                                </div>
                            </div>

                            <img src="/public/images/topics/undraw_Remote_design_team_re_urdx.png" class="custom-block-image img-fluid" alt="">
                        </a>
                    </div>
                </div>

                <div class="col-lg-6 col-12">
                    <div class="custom-block custom-block-overlay">
                        <div class="d-flex flex-column h-100">
                            <img src="/public/images/coding_feature.jpg" class="custom-block-image img-fluid" alt="">

                            <div class="custom-block-overlay-text d-flex">
                                <div>
                                    <h5 class="text-white mb-2">Code</h5>

                                    <p class="text-white">Enter the realm where logic and language converge to build the backbone of the digital world. Explore the syntax and semantics that shape our digital landscape. From programming paradigms to the latest coding languages, this is the space where ideas are translated into functional reality, and the possibilities are as vast as lines of code themselves.</p>

                                    <div class="text-center">
                                        <a href="topics-detail.html" class="btn custom-btn mt-2 mt-lg-3">Learn More</a>
                                    </div>
                                </div>
                            </div>

                            <div class="section-overlay"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="explore-section section-padding" id="section_2">
        <div class="container">
            <div class="row">

                <div class="col-12 text-center">
                    <h2 class="mb-4">Browse Topics</h2>
                </div>

            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li v-for="topic in topics" :key="topic.id" class="nav-item" role="presentation">
                        <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#design-tab-pane" type="button" role="tab" aria-controls="design-tab-pane" aria-selected="true">{{ topic.name }}</button>
                    </li>
                </ul>
            </div>
        </div>

        <div class="container">
            <div class="row">

                <div class="col-12">
                    <div class="tab-content" id="myTabContent">

                        <div class="tab-pane fade show active" id="design-tab-pane" role="tabpanel" aria-labelledby="design-tab" tabindex="0">
                            <div class="row pb-2">
                                <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                                    <div class="custom-block bg-white shadow-lg">
                                        <a href="topics-detail.html">
                                            <div class="d-flex">
                                                <div>
                                                    <h5 class="mb-2">Web Design</h5>

                                                    <p class="mb-0">Immerse yourself in the art and science of web design</p>
                                                </div>
                                            </div>
                                            <img src="/images/topics/undraw_Remote_design_team_re_urdx.png" class="custom-block-image img-fluid" alt="">
                                        </a>
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
                                <h4 class="text-white mb-3">Search your favourite topic</h4>

                                <p class="text-white">Begin your journey by searching for your favorite topics. Enter the realm of endless possibilities as you explore and discover the content that sparks your curiosity.</p>

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
    <FaQ />
    <ContactInfo/>
    <TheFooter />
</template>

<script>
import TheFooter from "@/components/TheFooter.vue";
import dataTopics from "@/topics.json";
import ContactInfo from "@/components/ContactInfo.vue";
import FaQ from "@/components/FaQ.vue";

export default {
    data() {
        return {
            topics: dataTopics.topics,
        }
    },
    components: {FaQ, ContactInfo, TheFooter}
}
</script>