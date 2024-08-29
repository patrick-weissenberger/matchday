<template>
    <header id="app">
        <ContainerOut>
            <ContainerIn>
                <h1>Hockeyturnier 2024</h1>
                <h3>Klettgau 99ers</h3>
            </ContainerIn>
        </ContainerOut>
    </header>
    <Suspense>
        <template #default>
            <RouterView />
        </template>
        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>





<style>

@media(min-width: 320px) {
    header#app {
        margin-bottom: 3.2rem;
        padding: 3.2rem 0;
        background-color: var(--light-primary);
    }

    header#app h1, header#app h3 {
        text-transform: uppercase;
    }

    header#app h1 {
        font-size: 2.8rem;
        font-weight: 700;
    }

    header#app h3 {
        font-size: 2.0rem;
        font-weight: 600;
        color: var(--dark-secondary);
    }

}

@media(min-width: 768px) {
    
}

@media(min-width: 1200px) {
    
}

</style>





<script lang="ts" setup>

</script>