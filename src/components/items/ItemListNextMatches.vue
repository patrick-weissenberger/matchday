<template>
    <li class="item-list-next-matches">
        <div class="item-content">
            <div class="item-header">
                <p class="match-stage">{{ props.matchStage }}</p>
                <p class="match-countdown">beginnt in {{ props.matchBeginsIn }} Minuten</p>
            </div>
            <div class="item-body">
                <p class="team-home-name">{{ props.teamHomeName }}</p>
                <p class="team-away-name">{{ props.teamAwayName }}</p>
            </div>
        </div>
    </li>
</template>





<style>

@media(min-width: 320px) {

    li.item-list-next-matches {
        padding: 1.6rem;
        background-color: var(--light-primary);
        border-radius: 0.8rem;
    }

    li.item-list-next-matches .item-content {
        display: flex;
        flex-direction: column;
        gap: 3.2rem 0;
    }

    li.item-list-next-matches .item-content .item-header, 
    li.item-list-next-matches .item-content .item-body {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    li.item-list-next-matches .item-content .item-header p.match-stage {
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1.3;
    }

    li.item-list-next-matches .item-content .item-header p.match-countdown {
        font-size: 1.2rem;
        line-height: 1.3;
    }

    li.item-list-next-matches .item-content .item-body p {
        font-family: "Tourney";
        font-weight: 500;
        line-height: 1.3;
        text-transform: uppercase;
    }

    li.item-list-next-matches .item-content .item-body p.team-away-name {
        text-align: end;
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
    matchBeginsIn: {
        type: String,
        required: true
    },
    teamHomeName: {
        type: String,
        required: true
    },
    teamAwayName: {
        type: String,
        required: true
    }
})

</script>