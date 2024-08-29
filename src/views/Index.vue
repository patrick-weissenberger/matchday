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
                <ListPastMatches />
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
import CardLiveMatch from "@/components/cards/CardLiveMatch.vue"
import ListNextMatch from "@/components/lists/ListNextMatch.vue"
import ListPastMatches from "@/components/lists/ListPastMatches.vue"

</script>