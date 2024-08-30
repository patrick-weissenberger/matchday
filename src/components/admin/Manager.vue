<template>
    <section id="admin-manager">
        <div class="scores">
            <div class="manage-score-group">
                <button class="decrease-score" :disabled="scoreTeamHomeIsZero" @click="decreaseHomeTeamScore">-</button>
                <p class="team-name">{{ storeMatches.currentMatch.team_home_name.toUpperCase() }}</p>
                <button class="increase-score" @click="increaseHomeTeamScore">+</button>
            </div>
            <div class="manage-score-group">
                <button class="decrease-score" :disabled="scoreTeamAwayIsZero" @click="decreaseAwayTeamScore">-</button>
                <p class="team-name">{{ storeMatches.currentMatch.team_away_name.toUpperCase() }}</p>
                <button class="increase-score" @click="increaseAwayTeamScore">+</button>
            </div>
        </div>
        <div class="status">
            <button v-if="!matchIsFinished" class="start-match" @click="toggleCountdown">
                <p v-if="matchIsPaused">Spiel fortsetzen</p>
                <p v-else>Spiel pausieren</p>
            </button>
            <button v-if="matchIsFinished" @click="loadNextMatch">Nächstes Spiel laden</button>
        </div>
    </section>
</template>





<style>

@media(min-width: 320px) {

    section h3 {
        margin-bottom: 1.6rem;
        font-weight: 600;
        line-height: 1.3;
        text-transform: uppercase;
    }

    section#admin-manager {
        margin-top: 1.6rem;
        padding: 1.6rem;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.6rem;
        background-color: var(--light-primary);
        border-radius: 0.8rem;
    }

    section#admin-manager .scores {
        display: flex;
        flex-direction: column;
        gap: 1.6rem 0;
    }

    section#admin-manager .scores .manage-score-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    section#admin-manager .scores .manage-score-group button {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 0.4rem;
    }

    section#admin-manager .scores .manage-score-group button.decrease-score {
        color: var(--brand-red-secondary);
        background-color: var(--brand-red-primary);
    }

    section#admin-manager .scores .manage-score-group button.increase-score {
        color: var(--brand-blue-secondary);
        background-color: var(--brand-blue-primary);
    }

    section#admin-manager .scores .manage-score-group button.decrease-score:hover {
        color: var(--brand-red-primary);
        background-color: var(--brand-red-secondary);
    }

    section#admin-manager .scores .manage-score-group button.increase-score:hover {
        color: var(--brand-blue-primary);
        background-color: var(--brand-blue-secondary);
    }

    section#admin-manager .scores .manage-score-group button:disabled {
        cursor: not-allowed;
    }

    /* status */

    section#admin-manager .status {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.6rem;
    }

    section#admin-manager .status button {
        padding: 1.2rem;
        color: var(--brand-blue-secondary);
        background-color: var(--dark-primary);
        border-radius: 0.4rem;
    }

    section#admin-manager .status button:hover {
        background-color: var(--dark-secondary);
    }

}

@media(min-width: 768px) {
    
}

@media(min-width: 1200px) {

    section#admin-manager {
        grid-template-columns: repeat(2, 1fr);
    }
    
}

</style>





<script lang="ts" setup>
import useStoreMatches from "@/stores/useStoreMatches"
import { computed, ref, type Ref } from "vue"
import { useStorage } from "@vueuse/core"
import supabase from "@/databases/supabase/supabase"

const storeMatches = useStoreMatches()

// SCORES

const scoreTeamHomeIsZero = computed((): boolean => {
    return storeMatches.currentMatch.team_home_score === 0 ? true : false
})

const scoreTeamAwayIsZero = computed((): boolean => {
    return storeMatches.currentMatch.team_away_score === 0 ? true : false
})

async function decreaseHomeTeamScore() {
    await supabase.from("matches").update({ team_home_score: (storeMatches.currentMatch.team_home_score - 1) }).eq("id", storeMatches.currentMatch.id)
}

async function decreaseAwayTeamScore() {
    await supabase.from("matches").update({ team_away_score: (storeMatches.currentMatch.team_away_score - 1) }).eq("id", storeMatches.currentMatch.id)
}

async function increaseHomeTeamScore() {
    await supabase.from("matches").update({ team_home_score: (storeMatches.currentMatch.team_home_score + 1) }).eq("id", storeMatches.currentMatch.id)
}

async function increaseAwayTeamScore() {
    await supabase.from("matches").update({ team_away_score: (storeMatches.currentMatch.team_away_score + 1) }).eq("id", storeMatches.currentMatch.id)
}

// STATUS

let halfTimeLength: number = (storeMatches.currentMatch.match_duration / 2)

    // COUNTDOWN
    
    const matchIsPaused = useStorage("matchIsPaused", false)

    const matchIsFinished = computed((): boolean => {
        if(storeMatches.currentMatch.elapsed_time === storeMatches.currentMatch.match_duration) {
            stopCountdown()
            return true
        } else {
            return false
        }
    })

    let countdown: NodeJS.Timeout

    async function updateCountdown() {
        await supabase.from("matches").update({ elapsed_time: (storeMatches.currentMatch.elapsed_time + 1) }).eq("id", storeMatches.currentMatch.id)
    }

    function startCountdown() {
        countdown = setInterval(() => {
            if(!matchIsPaused.value) {
                updateCountdown()
            }
        }, 1000)
    }

    async function stopCountdown() {
        await supabase.from("matches").update({ is_live: false }).eq("id", storeMatches.currentMatch.id)
        matchIsPaused.value = true
        clearInterval(countdown)
    }

    async function toggleCountdown() {
        if(matchIsPaused.value === true) {
            matchIsPaused.value = false
            await supabase.from("matches").update({ is_live: true }).eq("id", storeMatches.currentMatch.id)
            startCountdown()
        } else {
            matchIsPaused.value = true
            await supabase.from("matches").update({ is_live: false }).eq("id", storeMatches.currentMatch.id)
            stopCountdown()
        }
    }

async function loadNextMatch() {
    // setting 'is_live' to false => not necessary, but doesn't hurt :)
    await supabase.from("matches").update({ is_live: false, is_finished: true }).eq("id", storeMatches.currentMatch.id)
}
    





    



</script>