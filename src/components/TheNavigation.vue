<template>

    <nav id="nav" :class="{ scrolled: isScrolled }">
        <div class="container d-inline-flex justify-content-between align-items-center" style="color:black">
            <router-link to="/" class="navbar-brand">
                <i class="bi-back me-2 fs-10"></i>
                <span class="fs-10 me-5">Topic</span>
            </router-link>

            <div>
                <ul v-if="showMenu" class="main-menu d-inline-flex list-unstyled my-auto" :class="{ responsive: isResponsive }">
                    <li class="me-4">
                        <a class="nav-link" href="#section_1">Home</a>
                    </li>

                    <li class="me-4">
                        <a class="nav-link" href="#section_2">Browse Topics</a>
                    </li>

                    <li class="me-4">
                        <a class="nav-link" href="#section_3">How it works</a>
                    </li>

                    <li class="me-4">
                        <a class="nav-link" href="#section_4">FAQs</a>
                    </li>

                    <li class="me-4">
                        <a class="nav-link" href="#section_5">Contact</a>
                    </li>

                    <li class="me-4"><router-link to="/articles" class="nav-link">Articles</router-link></li>

                    <li class="me-4"><router-link to="/contactForm" class="nav-link">Contact Form</router-link></li>
                </ul>

                <button v-if="showHamburger" class="hamburger btn btn-lg" @click="toggleMenu">
                    <i class="bi bi-list fs-10"></i>
                </button>
            </div>
        </div>
    </nav>

</template>

<script>
export default {
    data() {
        return {
            isResponsive: false,
            isScrolled: false,
            showHamburger: false,
            showMenu: true,
        };
    },
    methods: {
        toggleMenu() {
            this.isResponsive = !this.isResponsive;
            this.showMenu = !this.showMenu;
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

<style>
nav {
    background-color: rgba(0, 0, 0, 0);
}
.scrolled{
    background-color: #80d0c7;
}
.hamburger {
    display: none;
}

@media screen and (max-width: 1000px) {
    #nav{
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
        left: 0px;
        padding-top:20px;
        padding-bottom:20px;
        gap: 15px;
        background-color: #80d0c7;
    }
    .main-menu.responsive li{
        display: flex;
        margin-left:0px;
        justify-content: center;
    }
}
</style>