<template>
    <section id="admin-manager">

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
        display: flex;
        flex-direction: column;
        gap: 1.6rem 0;
        background-color: var(--light-primary);
        border-radius: 0.8rem;
    }

    section#admin-manager .live-match {
        display: grid;
        grid-template-columns: 1fr;
    }

    section#admin-manager .live-match .score-management {
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
import useStoreMatches from "@/stores/useStoreMatches"

const storeMatches = useStoreMatches()

</script>