import { defineStore } from 'pinia';
import topicsData from "@/topics.json";
import type { Topic } from "@/types/Topic"

interface TopicState {
    selectedTopics: string[];
    topics: Topic[];
}

export const useSelectedTopicStore = defineStore('selectedTopic', {
    state: (): TopicState => ({
        selectedTopics: [],
        topics: topicsData.topics as Topic[]
    }),
    getters: {
        filteredTopics(state) {
            return state.topics.filter(topic => state.selectedTopics.includes(topic.name));
        }
    },
    actions: {
        addSelectedTopic(topic: string) {
            this.selectedTopics.push(topic);
        },
        removeSelectedTopic(topic: string) {
            this.selectedTopics = this.selectedTopics.filter(l => l !== topic);
        },
        clearSelectedTopics() {
            this.selectedTopics = [];
        }
    }
})