<template>
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

                                                <span class="badge bg-design rounded-pill ms-auto">14</span>
                                            </div>

                                            <img src="/images/topics/undraw_Remote_design_team_re_urdx.png" class="custom-block-image img-fluid" alt="">
                                        </a>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                                    <div class="custom-block bg-white shadow-lg">
                                        <a href="topics-detail.html">
                                            <div class="d-flex">
                                                <div>
                                                    <h5 class="mb-2">Graphic</h5>

                                                    <p class="mb-0">Discover the power of visual storytelling through graphic design</p>
                                                </div>

                                                <span class="badge bg-design rounded-pill ms-auto">75</span>
                                            </div>

                                            <img src="/images/topics/undraw_Redesign_feedback_re_jvm0.png" class="custom-block-image img-fluid" alt="">
                                        </a>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="custom-block bg-white shadow-lg">
                                        <a href="topics-detail.html">
                                            <div class="d-flex">
                                                <div>
                                                    <h5 class="mb-2">Logo Design</h5>

                                                    <p class="mb-0">Explore the world of logo design, where creativity meets brand identity</p>
                                                </div>

                                                <span class="badge bg-design rounded-pill ms-auto">100</span>
                                            </div>

                                            <img src="/images/topics/colleagues-working-cozy-office-medium-shot.png" class="custom-block-image img-fluid" alt="">
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
</template>
<script>
import dataTopics from '../topics.json'
export default {
    data() {
        return {
            topics: dataTopics.topics,
        }
    },
}
</script>