<template>
    <div id="tv">
        <div class="match-infos">
            <div class="time">
                <span class="match-time">{{ formattedMatchTime.minutes }}:{{ formattedMatchTime.seconds }}</span>
            </div>
            <div class="teams">
                <div class="team team-home">
                    <span class="team-name">{{ storeMatches.currentMatch.team_home_name }}</span>
                    <span class="team-score">{{ storeMatches.currentMatch.team_home_score }}</span>
                </div>
                <div class="team team-away">
                    <span class="team-away">{{ storeMatches.currentMatch.team_away_name }}</span>
                    <span class="team-score">{{ storeMatches.currentMatch.team_away_score }}</span>
                </div>
            </div>
        </div>
    </div>
</template>





<style>

@media(min-width: 320px) {

    #tv {
        width: 100%;
        height: 100dvh;
    }

    #tv .match-infos {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3.2rem 0;
    }

    #tv .match-infos .time span.match-time {
        font-family: "Tourney";
        font-size: 32.0rem;
        font-weight: 500;
        text-align: center;
    }

    #tv .match-infos .teams {
        width: 100%;
        padding: 0 1.6rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0 1.6rem;
    }

    #tv .match-infos .teams .team {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: "Tourney";
        font-size: 8.0rem;
        font-weight: 500;
    }

    #tv .match-infos .teams .team-home {
        color: var(--brand-blue-primary);
    }

    #tv .match-infos .teams .team-away {
        text-align: end;
        color: var(--brand-red-primary);
    }

}

@media(min-width: 768px) {
    
}

@media(min-width: 1200px) {
    
}

</style>





<script lang="ts" setup>
import useStoreMatches from "@/stores/useStoreMatches"
import { formatMatchTimeToHMS } from "@/utils/timeUtils"
import type { HMSasString } from "@/utils/timeUtils"
import { computed } from "vue"

const storeMatches = useStoreMatches()
await storeMatches.fetchMatches()

// TIME FORMATTING

const formattedMatchTime = computed((): HMSasString => {
    let formattedMatchTime = formatMatchTimeToHMS(storeMatches.currentMatch.match_duration, storeMatches.currentMatch.elapsed_time)
    return formattedMatchTime
})

</script>