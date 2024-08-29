<template>
    <ul class="list-next-matches">
        <ItemListNextMatches 
        v-for="match in storeMatches.nextMatches" 
        :key="match.id" 
        :match-stage="match.match_stage" 
        :match-begins-in=getDurationByMatchId(match.id) 
        :team-home-name="match.team_home_name" 
        :team-away-name="match.team_away_name" />
    </ul>
</template>





<style>

@media(min-width: 320px) {

    ul.list-next-matches {
        display: flex;
        flex-direction: column;
        gap: 1.6rem 0;
    }

}

@media(min-width: 768px) {
    
}

@media(min-width: 1200px) {
    
}

</style>





<script lang="ts" setup>
import ItemListNextMatches from "@/components/items/ItemListNextMatches.vue"
import useStoreMatches from "@/stores/useStoreMatches"
import { computed } from "vue"
import { calculateBeginsIn } from "@/utils/timeUtils"

const storeMatches = useStoreMatches()

const calculatedBegins = computed((): Map<number, string> => {
    return calculateBeginsIn(storeMatches.nextMatches, storeMatches.currentMatch)
})

function getDurationByMatchId(id: number): string {
    if(calculatedBegins.value.size === 0) {
        return "0"
    } else {
        return calculatedBegins.value.get(id) || "0"
    }
}

</script>