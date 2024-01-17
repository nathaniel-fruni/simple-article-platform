<template>

    <TheNavigation />
    <RouterView :key="$route.fullPath"/>
    <TheFooter />

</template>

<script>
import TheNavigation from './components/TheNavigation.vue'
import TheFooter from "@/components/TheFooter.vue";

export default {
    components: {TheFooter, TheNavigation}
}
</script>