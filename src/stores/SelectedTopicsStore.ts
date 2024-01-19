import { defineStore } from 'pinia';
import topicsData from "@/topics.json";
import type { Topic } from "@/types/Topic"

interface TopicState {
    selectedTopics: string[];
    topics: Topic[];
    firstClick: boolean;
}

export const useSelectedTopicStore = defineStore('selectedTopic', {
    state: (): TopicState => ({
        selectedTopics: topicsData.topics.map(topic => topic.name),
        topics: topicsData.topics as Topic[],
        firstClick: true
    }),
    getters: {
        filteredTopics(state) {
            return state.topics.filter(topic => state.selectedTopics.includes(topic.name));
        }
    },
    actions: {
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
        fillSelectedTopics() {
            this.selectedTopics = topicsData.topics.map(topic => topic.name);
            this.persistState();
        },
        isFull() {
            const topicNames = topicsData.topics.map(topic => topic.name);
            return this.selectedTopics.length === topicNames.length &&
                this.selectedTopics.every(topic => topicNames.includes(topic));
        },
        isEmpty() {
            return this.selectedTopics.length === 0;
        }
    }
})