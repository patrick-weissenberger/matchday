<template>
    <ul class="list-all-teams">
        <ItemListAllTeams 
        v-for="team in storeTeams.teams" 
        :key="team.name" 
        :team-name="team.name" 
        :is-favorite="getFavoriteTeam(team.name)" />
    </ul>
</template>





<style>

@media(min-width: 320px) {

    ul.list-all-teams {
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
import ItemListAllTeams from "@/components/items/ItemListAllTeams.vue"
import useStoreTeams from "@/stores/useStoreTeams"

const storeTeams = useStoreTeams()

function getFavoriteTeam(teamName: string): boolean {
    return teamName.toLowerCase() === storeTeams.favoriteTeam.toLowerCase() ? true : false
}

</script>