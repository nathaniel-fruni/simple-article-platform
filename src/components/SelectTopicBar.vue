<template>
    <div class="p-4 rounded-5">
        <h2 class="text-white text-center">Choose your interests</h2>
        <div class="pt-2 text-center">
            <button v-for="topic in topicStore.topics" :key="topic.name"
                    :class="{ 'active-button': isTopicSelected(topic.name) }"
                    class="btn custom-btn mx-2 mx-lg-3" @click="toggleTopic(topic.name)">{{ topic.name }}</button>
        </div>
    </div>
</template>

<script>
import { useSelectedTopicStore } from "@/stores/SelectedTopicsStore";

export default {
    data() {
        const topicStore = useSelectedTopicStore();

        return {
            topicStore
        }
    },
    methods: {
        toggleTopic(topic) {
            if (this.topicStore.isFull() && this.topicStore.firstClick === true) {
                this.topicStore.clearSelectedTopics();
                this.topicStore.addSelectedTopic(topic);
                this.topicStore.firstClick = false;
                this.topicStore.persistState();
            } else {
                if (this.topicStore.selectedTopics.includes(topic)) {
                    this.topicStore.removeSelectedTopic(topic);
                    if (this.topicStore.isEmpty()) {
                        this.topicStore.fillSelectedTopics();
                        this.topicStore.firstClick = true;
                        this.topicStore.persistState();
                    }
                } else {
                    this.topicStore.addSelectedTopic(topic);
                }
            }
        },
        isTopicSelected(topic) {
            return this.topicStore.selectedTopics.includes(topic) && !(this.topicStore.firstClick);

        }
    }
};
</script>


<style scoped>
div{
    background-color: #80d0c7;
}
button{
    background: white;
    color: #717275;
}
.active-button{
    background: #13547a;
    color: white;
}
</style>