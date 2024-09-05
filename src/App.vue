<template>
    <Suspense>
        <template #default>
            <RouterView />
        </template>
        <template #fallback>
            Loading...
        </template>
    </Suspense>
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
import useStoreMatches from "@/stores/useStoreMatches"
import { useTitle } from "@vueuse/core"

const storeMatches = useStoreMatches()
await storeMatches.fetchMatches()

const pageTitle = useTitle()
pageTitle.value = "Matchday"

</script>