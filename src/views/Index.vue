<template>
    <ContainerOut>
        <ContainerIn>
            <section id="live-match">
                <CardLiveMatch />
            </section>
            <section id="next-match">
                <h1>Nächstes Spiel</h1>
                <ListNextMatch />
            </section>
            <section id="my-next-match">
                <h1>Mein nächstes Spiel</h1>
                <ListMyNextMatch />
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
import ListNextMatch from "@/components/lists/ListNextMatch.vue"
import ListMyNextMatch from "@/components/lists/ListMyNextMatch.vue"

const storeMatches = useStoreMatches()
await storeMatches.fetchMatches()

</script>