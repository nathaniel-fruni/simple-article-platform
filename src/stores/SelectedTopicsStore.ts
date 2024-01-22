import { defineStore } from 'pinia';
import type { Topic } from "@/types/Topic"

interface TopicState {
    selectedTopics: string[];
    firstClick: boolean;
}

export const useSelectedTopicStore = defineStore('selectedTopic', {
    state: (): TopicState => ({
        selectedTopics: [],
        firstClick: true
    }),
    actions: {
        filteredTopics(topics: Topic[]) {
            return topics.filter(topic => this.$state.selectedTopics.includes(topic.name));
        },
        persistState() {
            localStorage.setItem('selectedTopicState', JSON.stringify(this.$state));
        },
        restoreState() {
            const storedState = localStorage.getItem('selectedTopicState');
            if (storedState) {
                Object.assign(this.$state, JSON.parse(storedState));
            }
        },
        addSelectedTopic(topic: string) {
            this.selectedTopics.push(topic);
            this.persistState();
        },
        removeSelectedTopic(topic: string) {
            this.selectedTopics = this.selectedTopics.filter(element => element !== topic);
            this.persistState();
        },
        clearSelectedTopics() {
            this.selectedTopics = [];
            this.persistState();
        },
        fillSelectedTopics(topics: Topic[]) {
            this.selectedTopics = topics.map(topic => topic.name);
            this.persistState();
        },
        isFull(topics: Topic[]) {
            const topicNames = topics.map(topic => topic.name);
            return this.selectedTopics.length === topicNames.length &&
                this.selectedTopics.every(topic => topicNames.includes(topic));
        },
        isEmpty() {
            return this.selectedTopics.length === 0;
        }
    }
})