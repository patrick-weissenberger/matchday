import type { Match } from "@/databases/supabase/types/supabase.single.types"

export interface HMSasString {
    hours: string,
    minutes: string,
    seconds: string
}

export function roundTime(seconds: number): number {
    return Math.floor(seconds)
}

export function calculateHoursToHMS(matchDuration: number, ignoreLeadingZero: Boolean = false): string {
    let hours: string
    let calculatedHours: number = roundTime(matchDuration / 3600)

    if(calculatedHours < 10 && !ignoreLeadingZero) {
        hours = "0" + calculatedHours.toString()
        return hours
    } else {
        hours = calculatedHours.toString()
        return hours
    }
}

export function calculateMinutes(matchDuration: number, ignoreLeadingZero: Boolean = false): string {
    let minutes: string
    let calculatedMinutes: number = roundTime(matchDuration / 60)

    if(calculatedMinutes < 10 && !ignoreLeadingZero) {
        minutes = "0" + calculatedMinutes.toString()
        return minutes
    } else {
        minutes = calculatedMinutes.toString()
        return minutes
    }
}

export function calculateSeconds(matchDuration: number, ignoreLeadingZero: Boolean = false): string {
    let seconds: string
    let calculatedSeconds: number = matchDuration % 60

    if(calculatedSeconds < 10 && !ignoreLeadingZero) {
        seconds = "0" + calculatedSeconds.toString()
        return seconds
    } else {
        seconds = calculatedSeconds.toString()
        return seconds
    }
}

export function formatMatchTimeToHMS(matchDuration: number, elapsedTime: number): HMSasString {
    let timeAsHSM: HMSasString

    // [!] All values are received as seconds

    matchDuration = matchDuration - elapsedTime

    // HOURS
    let hours = calculateHoursToHMS(matchDuration)

    // Remaining seconds
    matchDuration = matchDuration % 3600

    // MINUTES
    let minutes = calculateMinutes(matchDuration)

    // SECONDS
    let seconds = calculateSeconds(matchDuration)

    timeAsHSM = {
        hours,
        minutes,
        seconds
    }

    return timeAsHSM

}

export function calculateBeginsIn(nextMatches: Match[], currentMatch: Match): Map<number, string> {
    const mappedDurations: Map<number, string> = new Map()
    let previousDurationUntilStart = 0

    nextMatches.forEach((match: Match) => {
        // skip current match; substract 'elapsed_time' from 'previousDurationUntilStart'
        if(match.id === currentMatch.id) {
            mappedDurations.set(match.id, "0")
            previousDurationUntilStart = previousDurationUntilStart - match.elapsed_time
        } else {
            const currentDurationUntilStart = previousDurationUntilStart + match.match_duration + match.break_duration
            mappedDurations.set(match.id, calculateMinutes(currentDurationUntilStart, true))
            previousDurationUntilStart = currentDurationUntilStart
        }
    })

    return mappedDurations
}