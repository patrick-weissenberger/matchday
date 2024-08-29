<template>
    <TabsRoot class="tabs-root" default-value="next-matches">
        <TabsList class="tabs-list">
            <TabsTrigger class="tabs-trigger" value="next-matches">
                <p>Nächste Spiele</p>
            </TabsTrigger>
            <TabsTrigger class="tabs-trigger" value="past-matches">
                <p>Vergangene Spiele</p>
            </TabsTrigger>
        </TabsList>
        <TabsContent class="tabs-content" value="next-matches">
            <ListNextMatches />
        </TabsContent>
        <TabsContent class="tabs-content" value="past-matches">
            <ListPastMatches />
        </TabsContent>
    </TabsRoot>
</template>





<style>

@media(min-width: 320px) {

    .tabs-root {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .tabs-root .tabs-list {
        position: relative;
        flex-shrink: 0;
        display: flex;
        margin-bottom: 1.6rem;
    }
    
    .tabs-root .tabs-list .tabs-trigger {
        padding: 0.8rem 0;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--brand-blue-primary);
        background-color: var(--brand-blue-secondary);
    }

    .tabs-root .tabs-list .tabs-trigger:first-of-type {
        border-radius: 0.4rem 0 0 0.4rem;
    }

    .tabs-root .tabs-list .tabs-trigger:last-of-type {
        border-radius: 0 0.4rem 0.4rem 0;
    }

    .tabs-root .tabs-list .tabs-trigger[data-state="active"] {
        color: var(--brand-blue-secondary);
        background-color: var(--brand-blue-primary);
    }

    .tabs-root .tabs-list .tabs-trigger p {
        font-size: 1.2rem;
    }

}

@media(min-width: 768px) {
    
}

@media(min-width: 1200px) {
    
}

</style>





<script lang="ts" setup>
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "radix-vue"
import ListNextMatches from "@/components/lists/ListNextMatches.vue"
import ListPastMatches from "@/components/lists/ListPastMatches.vue"

</script>