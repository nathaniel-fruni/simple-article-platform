<template>
    <section class="faq-section section-padding" id="section_4">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12">
                    <h2 class="mb-4">Frequently Asked Questions</h2>
                </div>

                <div class="clearfix"></div>

                <div class="col-lg-5 col-12">
                    <img src="/images/faq_graphic.jpg" class="img-fluid" alt="FAQs">
                </div>

                <div class="col-lg-6 col-12 m-auto">
                    <div class="accordion">
                        <div v-for="faq in faqs" :key="faq.id" class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button"
                                    type="button"
                                    :class="{ 'btn-closed': !faq.isOpen }"
                                    @click="toggleAccordion(faq.id)"
                                >
                                    {{ faq.question }}
                                </button>
                            </h2>

                            <div class="accordion-collapse" :style="{ height: faq.isOpen ? 'auto' : '0' }">
                                <div v-if="faq.isOpen" class="accordion-body">
                                    {{ faq.answer }}
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
export default {
    data() {
        return {
            faqs: [
                {
                    id: 1,
                    question: 'What is Topic Listing?',
                    answer: 'Finding a topic on our platform is easy! Simply use the search bar to type in keywords related to your interests. Browse through our curated categories or explore trending topics. With a variety of options at your fingertips, discovering the perfect topic that captivates your curiosity has never been simpler.',
                    isOpen: true
                },
                {
                    id: 2,
                    question: 'How to find a topic?',
                    answer: 'Discovering a topic on our platform is seamless. Explore our organized sections, each housing a collection of related articles. Navigate through these curated topics to find intriguing content that aligns with your interests. Our diverse sections make it easy to uncover captivating articles and explore a variety of subjects',
                    isOpen: false
                },
                {
                    id: 3,
                    question: 'Is it paid?',
                    answer: 'No, accessing and enjoying our platform is entirely free! We believe in making knowledge and exploration accessible to everyone. Dive into a wealth of content without any subscription fees or hidden charges. Happy exploring!',
                    isOpen: false
                }
            ]
        };
    },
    methods: {
        toggleAccordion(id) {
            this.faqs.forEach((faq) => {
                faq.isOpen = faq.id === id ? !faq.isOpen : false;
            });
        }
    }
};
</script>

<style scoped>
.btn-closed {
    background-color: white;
    color: black;
}
</style>