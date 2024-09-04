<template>
    <RouterView />
    <!-- <Suspense>
        <template #default>
            <RouterView />
        </template>
        <template #fallback>
            Loading...
        </template>
    </Suspense> -->
</template>





<style>

@media(min-width: 320px) {

}

@media(min-width: 768px) {
    
}

@media(min-width: 1200px) {
    
}

</style>





<script lang="ts" setup>
import { useTitle } from "@vueuse/core"

const pageTitle = useTitle()
pageTitle.value = "Matchday"

</script>