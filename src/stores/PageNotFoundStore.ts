import { defineStore } from 'pinia';

export const usePageNotFoundStore = defineStore({
    id: 'pageNotFound',
    state: () => ({
        isNotFoundView: false,
    }),
    actions: {
        setNotFoundView(value: boolean) {
            this.isNotFoundView = value;
        }
    }
});