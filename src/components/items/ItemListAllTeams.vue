<template>
    <li class="item-list-all-teams" :class="{ 'is-favorite': props.isFavorite }" @click="storeTeams.toggleFavoriteTeam(props.teamName)">
        <div class="item-content">
            <p class="team-name">{{ props.teamName }}</p>
            <button class="team-favorite">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z"
                    />
                </svg>
            </button>
        </div>
    </li>
</template>





<style>

@media(min-width: 320px) {

    li.item-list-all-teams {
        padding: 1.6rem;
        background-color: var(--light-primary);
        border-radius: 0.8rem;
    }

    li.item-list-all-teams:hover {
        cursor: pointer;
    }

    li.item-list-all-teams .item-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    li.item-list-all-teams .item-content p {
        font-family: "Tourney";
        font-weight: 500;
        line-height: 1.3;
        text-transform: uppercase;
    }

    li.item-list-all-teams .item-content button.team-favorite {
        padding: 0.8rem;
        border-radius: 0.4rem;
    }

    li.item-list-all-teams .item-content button.team-favorite svg {
        fill: var(--dark-primary);
    }

    /* conditional styles */

    li.item-list-all-teams.is-favorite {
        color: var(--brand-blue-secondary);
        background-color: var(--brand-blue-primary);
    }

    li.item-list-all-teams.is-favorite svg {
        stroke: var(--brand-blue-secondary);
        stroke-width: 0.2rem;
    }

}

@media(min-width: 768px) {
    
}

@media(min-width: 1200px) {
    
}

</style>





<script lang="ts" setup>
import useStoreTeams from "@/stores/useStoreTeams"

const props = defineProps({
    teamName: {
        type: String,
        required: true
    },
    isFavorite: {
        type: Boolean,
        required: true
    }
})

const storeTeams = useStoreTeams()

</script>