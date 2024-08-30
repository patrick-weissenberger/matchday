<template>
    <ContainerOut>
        <ContainerIn>
            <section id="live-match">
                <CardLiveMatch />
                <Manager />
            </section>
        </ContainerIn>
    </ContainerOut>
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
import CardLiveMatch from "@/components/cards/CardLiveMatch.vue"
import Manager from "@/components/admin/Manager.vue"

const storeMatches = useStoreMatches()
await storeMatches.fetchMatches()

</script>