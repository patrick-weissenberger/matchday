<template>
    <div class="card-live-match">
        <div class="card-content">
            <div class="card-header">
                <div class="match-status">
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
                <p class="match-stage">{{ storeMatches.currentMatch.match_stage }}</p>
                <p class="match-time">{{ formattedMatchTime.minutes }}:{{ formattedMatchTime.seconds }}</p>
            </div>
            <div class="card-body">
                <div class="team-home">
                    <p class="team-name">{{ storeMatches.currentMatch.team_home_name }}</p>
                    <p class="team-score">{{ storeMatches.currentMatch.team_home_score }}</p>
                </div>
                <div class="team-away">
                    <p class="team-name">{{ storeMatches.currentMatch.team_away_name }}</p>
                    <p class="team-score">{{ storeMatches.currentMatch.team_away_score }}</p>
                </div>
            </div>
            <div class="card-footer">
                <ProgressRoot class="progress-root progress-bar-one" v-model="progressFirstHalf" :max="halfTimeLength">
                    <ProgressIndicator class="progress-indicator" :style="`transform: translateX(-${100 - progressFirstHalf}%)`" />
                </ProgressRoot>
                <ProgressRoot class="progress-root progress-bar-two" v-model="progressSecondHalf" :max="storeMatches.currentMatch.match_duration">
                    <ProgressIndicator class="progress-indicator" :style="`transform: translateX(-${100 - progressSecondHalf}%)`" />
                </ProgressRoot>
            </div>
        </div>
    </div>
</template>





<style>

@media(min-width: 320px) {

    .card-live-match {
        padding: 1.6rem;
        background-color: var(--light-primary);
        border-radius: 0.8rem;
    }

    .card-live-match .card-content {
        display: flex;
        flex-direction: column;
        gap: 3.2rem 0;
    }

    .card-live-match .card-content .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card-live-match .card-content .card-header p.match-stage {
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.3;
        text-align: center;
        text-transform: uppercase;
    }

    .card-live-match .card-content .card-header p.match-time {
        font-family: "Tourney";
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.3;
    }

    .card-live-match .card-content .card-header .match-status {
        display: inline-block;
        padding: 0.4rem 0.8rem;
        color: var(--brand-red-primary);
        background-color: var(--brand-red-secondary);
        border-radius: 0.4rem;
    }

    .card-live-match .card-content .card-header .match-status p {
        display: flex;
        align-items: center;
        gap: 0 0.4rem;
        line-height: 1.3;
    }

    .card-live-match .card-content .card-body {
        display: flex;
        flex-direction: column;
        gap: 0.8rem 0;
    }

    .card-live-match .card-content .card-body .team-home, 
    .card-live-match .card-content .card-body .team-away {
        display: flex;
        justify-content: space-between;
    }

    .card-live-match .card-content .card-body .team-home p, 
    .card-live-match .card-content .card-body .team-away p {
        font-family: "Tourney";
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.3;
        text-transform: uppercase;
    }

    .card-live-match .card-content .card-footer {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0 1.6rem;
    }

    .card-live-match .card-content .card-footer .progress-root {
        position: relative;
        overflow: hidden;
        height: 1.6rem;
        background-color: var(--brand-blue-secondary);
        /* Fix overflow clipping in Safari */
        /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
        transform: translateZ(0);
    }

    .card-live-match .card-content .card-footer .progress-root.progress-bar-one {
        border-radius: 0.4rem 0 0 0.4rem;
    }

    .card-live-match .card-content .card-footer .progress-root.progress-bar-two {
        border-radius: 0 0.4rem 0.4rem 0;
    }

    .card-live-match .card-content .card-footer .progress-root .progress-indicator {
        background-color: var(--brand-blue-primary);
        width: 100%;
        height: 100%;
        transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
    }

}

@media(min-width: 768px) {
    
}

@media(min-width: 1200px) {
    
}

</style>





<script lang="ts" setup>
import { ProgressRoot, ProgressIndicator } from "radix-vue"
import { computed, ref, watch, type Ref } from "vue"
import useStoreMatches from "@/stores/useStoreMatches"
import { formatMatchTimeToHMS } from "@/utils/timeUtils"
import type { HMSasString } from "@/utils/timeUtils"

const storeMatches = useStoreMatches()

// PROGRESS: PER HALFTIME

const halfTimeLength: number = storeMatches.currentMatch.match_duration / 2

// %-progress per '1 second'
const stepSize: number = (100 / halfTimeLength)

const progressFirstHalf = computed((): number => {
    const elapsedTime: number = storeMatches.currentMatch.elapsed_time
    // returns %-progress
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
    const progress: number = Math.min(stepSize * elapsedTime, 100)
    return progress
})

const progressSecondHalf = computed((): number => {
    const elapsedTime: number = storeMatches.currentMatch.elapsed_time - halfTimeLength
    // returns %-progress
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
    const progress: number = Math.max(0, stepSize * elapsedTime)
    return progress
})

// TIME FORMATTING

const formattedMatchTime = computed((): HMSasString => {
    let formattedMatchTime = formatMatchTimeToHMS(storeMatches.currentMatch.match_duration, storeMatches.currentMatch.elapsed_time)
    return formattedMatchTime
})

</script>