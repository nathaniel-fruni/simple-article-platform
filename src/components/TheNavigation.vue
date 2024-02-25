<template>
    <nav v-if="!NotFoundView" id="nav" :class="{ scrolled: isScrolled }">
        <div class="container d-inline-flex justify-content-between align-items-center" style="color:black">
            <router-link to="/" class="navbar-brand">
                <i class="bi-back me-2 fs-10"></i>
                <span class="fs-10">Topic</span>
            </router-link>

            <div>
                <ul v-if="showMenu" class="main-menu d-inline-flex list-unstyled my-auto align-items-center" :class="{ responsive: isResponsive }">
                    <li class="nav-item me-3" @click="toggleMenu">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>

                    <li class="nav-item me-3" @click="toggleMenu">
                        <router-link to="/#section_2" class="nav-link">Browse Topics</router-link>
                    </li>

                    <li class="nav-item me-3" @click="toggleMenu">
                        <router-link to="/#section_3" class="nav-link">How it works</router-link>
                    </li>

                    <li class="nav-item me-3" @click="toggleMenu">
                        <router-link to="/#section_4" class="nav-link">FAQs</router-link>
                    </li>

                    <li class="nav-item me-3" @click="toggleMenu">
                        <router-link to="/#section_5" class="nav-link">Contact</router-link>
                    </li>

                    <li class="me-3" @click="toggleMenu"><router-link to="/articles" class="nav-link">Articles</router-link></li>

                    <li class="me-3" @click="toggleMenu"><router-link to="/contactForm" class="nav-link">Contact Form</router-link></li>

                    <li class="me-3" @click="toggleMenu"><router-link to="/bookmarked-articles" class="nav-link"><i class="bi-bookmark btn btn-light rounded-3"></i></router-link></li>
                </ul>

                <button v-if="showHamburger" class="hamburger btn btn-lg" @click="toggleMenu">
                    <i class="bi bi-list fs-10"></i>
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
import {usePageNotFoundStore} from "@/stores/PageNotFoundStore";

export default {
    data() {
        const pageNotFoundStore = usePageNotFoundStore();

        return {
            pageNotFoundStore,
            isResponsive: false,
            isScrolled: false,
            showHamburger: false,
            showMenu: true,
        };
    },
    computed: {
        NotFoundView() {
            return this.pageNotFoundStore.isNotFoundView;
        },
    },
    methods: {
      toggleMenu() {
        this.isResponsive = !this.isResponsive;
        this.showMenu = window.innerWidth >= 1000;
      },
        handleScroll() {
            this.isScrolled = window.scrollY > 0;
        },
        checkWindowSize() {
            this.showHamburger = window.innerWidth <= 1000;
            this.showMenu = window.innerWidth >= 1000;
        },
    },
    mounted() {
        this.checkWindowSize();
        window.addEventListener("resize", this.checkWindowSize);
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.checkWindowSize);
        window.removeEventListener("scroll", this.handleScroll);
    },
};
</script>

<style scoped>
nav {
    background-color: rgba(0, 0, 0, 0);
}

.scrolled{
    background-color: #80d0c7;
}

.hamburger {
    display: none;
}

.bi-bookmark {
    color:#13547a;
}

.bi-bookmark:hover {
    color: #ecf3f2;
}

@media screen and (max-width: 1000px) {
    nav{
        background-color: #80d0c7;
    }
    .main-menu{
        display: none;
    }
    .hamburger {
        display: inline;
    }
    .main-menu.responsive {
        display: flex;
        flex-direction: column;
        position: absolute;
        width:100%;
        top:60px;
        left: 0;
        padding-top:20px;
        padding-bottom:20px;
        gap: 15px;
        background-color: #80d0c7;
    }
    .main-menu.responsive li{
        display: flex;
        margin-left:0;
        justify-content: center;
    }
}
</style>