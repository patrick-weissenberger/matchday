<template>
    <ul class="list-past-matches">
        <ItemListPastMatches 
        v-for="match in storeMatches.pastMatches" 
        :key="match.id" 
        :match-stage="match.match_stage" 
        :team-home-name="match.team_home_name" 
        :team-away-name="match.team_away_name" 
        :team-home-score="match.team_home_score" 
        :team-away-score="match.team_away_score" />
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
import ItemListPastMatches from "@/components/items/ItemListPastMatches.vue"
import useStoreMatches from "@/stores/useStoreMatches"

const storeMatches = useStoreMatches()

</script>