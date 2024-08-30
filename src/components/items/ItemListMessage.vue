<template>
    <div class="item-list-message">
        <p class="item-content">{{ props.message }}</p>
    </div>
</template>





<style>

@media(min-width: 320px) {

    .item-list-message {
        padding: 1.6rem;
        background-color: var(--light-primary);
        border-radius: 0.8rem;
    }

    .item-list-message p.item-content {
        text-align: center;
    }
}

@media(min-width: 768px) {
    
}

@media(min-width: 1200px) {
    
}

</style>





<script lang="ts" setup>

const props = defineProps({
    message: {
        type: String,
        required: true
    }
})

</script>