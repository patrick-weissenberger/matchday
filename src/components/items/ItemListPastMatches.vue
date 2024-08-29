<template>
    <li class="item-list-past-matches">
        <div class="item-content">
            <div class="item-header">
                <p class="match-stage">{{ props.matchStage }}</p>
            </div>
            <div class="item-body">
                <div class="team team-home">
                    <p class="team-home-name">{{ props.teamHomeName }}</p>
                    <p class="team-home-score">{{ props.teamHomeScore }}</p>
                </div>
                <div class="team team-away">
                    <p class="team-away-name">{{ props.teamAwayName }}</p>
                    <p class="team-away-score">{{ props.teamAwayScore }}</p>
                </div>
            </div>
        </div>
    </li>
</template>





<style>

@media(min-width: 320px) {

    li.item-list-past-matches {
        padding: 1.6rem;
        background-color: var(--light-primary);
        border-radius: 0.8rem;
    }

    li.item-list-past-matches .item-content {
        display: flex;
        flex-direction: column;
        gap: 3.2rem 0;
    }

    li.item-list-past-matches .item-content .item-header p {
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1.3;
    }
    
    li.item-list-past-matches .item-content .item-body {
        display: flex;
        flex-direction: column;
        gap: 0.8rem 0;
    }

    li.item-list-past-matches .item-content .item-body .team {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    li.item-list-past-matches .item-content .item-body .team p {
        font-family: "Tourney";
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.3;
        text-transform: uppercase;
    }

}

@media(min-width: 768px) {
    
}

@media(min-width: 1200px) {
    
}

</style>





<script lang="ts" setup>

const props = defineProps({
    matchStage: {
        type: String,
        required: true
    },
    teamHomeName: {
        type: String,
        required: true
    },
    teamHomeScore: {
        type: Number,
        required: true
    },
    teamAwayName: {
        type: String,
        required: true
    },
    teamAwayScore: {
        type: Number,
        required: true
    }
})

</script>