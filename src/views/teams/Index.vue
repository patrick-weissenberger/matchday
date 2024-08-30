<template>
    <HeaderApp />
    <ContainerOut>
        <ContainerIn>
            <section id="matches">
                <h1>Alle Teams</h1>
                <ListAllTeams />
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
import ListAllTeams from "@/components/lists/ListAllTeams.vue"

const storeMatches = useStoreMatches()
await storeMatches.fetchMatches()

</script>