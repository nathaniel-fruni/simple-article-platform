<template>
    <PageHeaderInfo />

    <section class="section-padding section-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-12">
                    <h3 class="mb-4 pb-2">We'd love to hear from you</h3>
                </div>

                <div class="col-lg-6 col-12">
                    <form @submit.prevent="submitForm" class="custom-form contact-form" role="form">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="form-floating">
                                    <input v-model="name" type="text" name="name" id="name" class="form-control" placeholder="Name" required="" autocomplete="on">

                                    <label for="name">Name</label>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="form-floating">
                                    <input v-model="email" type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Email address" required="" autocomplete="on">

                                    <label for="email">Email address</label>
                                </div>
                            </div>

                            <div class="col-lg-12 col-12">
                                <div class="form-floating">
                                    <input v-model="subject" type="text" name="subject" id="subject" class="form-control" placeholder="Subject" required="">

                                    <label for="subject">Subject</label>
                                </div>

                                <div class="form-floating">
                                    <textarea v-model="message" class="form-control" id="message" name="message" placeholder="Tell me about the project"></textarea>

                                    <label for="message">Tell me about the project</label>
                                </div>
                            </div>

                            <div class="col-lg-4 col-12 ms-auto">
                                <button type="submit" class="form-control">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="col-lg-5 col-12 mx-auto mt-5 mt-lg-0">
                    <iframe class="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.7127402203405!2d18.088866076606042!3d48.308375971262784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3ee43b2f6763%3A0x75a567f979f5bed3!2sUniverzita%20Kon%C5%A1tant%C3%ADna%20Filozofa!5e0!3m2!1ssk!2ssk!4v1704300632890!5m2!1ssk!2ssk" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    <h5 class="mt-4 mb-2">Head office</h5>

                    <p>Trieda Anreja Hlinku 1, 949 74, Nitra</p>
                </div>
            </div>
        </div>
    </section>

    <FaQ />
</template>

<script>
import axios from "axios";
import FaQ from "@/components/FaQ.vue";
import PageHeaderInfo from '@/components/PageHeaderInfo.vue'

export default {
    data() {
        return {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    },
    components: {PageHeaderInfo,FaQ},
    methods: {
        submitForm() {
            const formData = {
                name: this.name,
                email: this.email,
                subject: this.subject,
                message: this.message
            };

            axios.post('https://jsonplaceholder.typicode.com/posts', formData)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });

            this.name = '';
            this.email = '';
            this.subject = '';
            this.message = '';
        }
    }
}
</script>
