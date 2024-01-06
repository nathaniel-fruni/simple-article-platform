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

                                <span class="badge bg-design rounded-pill ms-auto">14</span>
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

                                <span class="badge bg-finance rounded-pill ms-auto">25</span>
                            </div>

                            <div class="section-overlay"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <BrowseTopicsView />
</template>

<script>
import BrowseTopicsView from "@/views/BrowseTopicsView.vue";

export default {
    components: {BrowseTopicsView}
}
</script>
