<template>
    <ul class="list-all-teams">
        <ItemListAllTeams team-name="Sc Freiburg" is-favorite />
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

</script>