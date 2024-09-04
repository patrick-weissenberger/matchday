<template>
    <div id="tv">
        <div class="match-infos">
            <div class="match-status" :class="{ blink: isLive }">
                    <p>
                        <span>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
                                    fill="currentColor"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                                    fill="currentColor"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </span>
                        Live
                    </p>
                </div>
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
        gap: 1.6rem 0;
    }

    #tv .match-infos .match-status {
        display: inline-block;
        padding: 0.8rem 1.6rem;
        color: var(--brand-red-primary);
        background-color: var(--brand-red-secondary);
        border-radius: 0.4rem;
    }

    #tv .match-infos .match-status p {
        display: flex;
        align-items: center;
        gap: 0 0.8rem;
        font-size: 2.8rem;
        line-height: 1.3;
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

    /* conditional classes */

    .blink {
        animation: blinker 1.5s linear infinite;
    }

    @keyframes blinker {
        50% {
            opacity: 20%;
        }
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

const isLive = computed((): Boolean => {
    return storeMatches.currentMatch.is_live ? true : false
})

// TIME FORMATTING

const formattedMatchTime = computed((): HMSasString => {
    let formattedMatchTime = formatMatchTimeToHMS(storeMatches.currentMatch.match_duration, storeMatches.currentMatch.elapsed_time)
    return formattedMatchTime
})

</script>