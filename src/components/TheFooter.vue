<template>
    <footer v-if="!NotFoundView" class="site-footer section-padding">
        <div class="container">
            <div class="row">

                <div class="col-lg-3 col-12 mb-4 pb-2">
                    <router-link to="/" class="navbar-brand mb-2">
                        <i class="bi-back"></i>
                        <span>Topic</span>
                    </router-link>
                </div>

                <div class="col-lg-3 col-md-4 col-6">
                    <h6 class="site-footer-title mb-3">Resources</h6>

                    <ul class="site-footer-links">
                        <li class="site-footer-link-item">
                            <router-link to="/" class="site-footer-link">Home</router-link>
                        </li>

                        <li class="site-footer-link-item">
                            <router-link to="/#section_3" class="site-footer-link">How it works</router-link>
                        </li>

                        <li class="site-footer-link-item">
                            <router-link to="/#section_4" class="site-footer-link">FAQs</router-link>
                        </li>

                        <li class="site-footer-link-item">
                            <router-link to="/#section_5" class="site-footer-link">Contact</router-link>
                        </li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
                    <h6 class="site-footer-title mb-3">Information</h6>

                    <p class="text-white d-flex mb-1">
                        <a href="tel: 305-240-9671" class="site-footer-link">
                            +421 123 456 789
                        </a>
                    </p>

                    <p class="text-white d-flex">
                        <a href="mailto:info@company.com" class="site-footer-link">
                            info@company.com
                        </a>
                    </p>
                </div>

                <div class="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">

                    <p class="copyright-text mt-lg-5 mt-4">Copyright © 2024 Topic Listing Center. All rights reserved.
                        <br><br>Design: <a rel="nofollow" href="https://templatemo.com" target="_blank">TemplateMo</a></p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import {usePageNotFoundStore} from "@/stores/PageNotFoundStore";

export default {
    data() {
        const pageNotFoundStore = usePageNotFoundStore();

        return {
            pageNotFoundStore
        };
    },
    computed: {
        NotFoundView() {
            return this.pageNotFoundStore.isNotFoundView;
        },
    }
}
</script>
