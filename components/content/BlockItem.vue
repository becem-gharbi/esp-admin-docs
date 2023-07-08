<template>
    <div v-if="color === 'blue'"
        class="bg-blue-400 border-blue-400 dark:bg-blue-800 dark:border-blue-800 dark:bg-opacity-40 bg-opacity-40 text-center p-2 rounded border">
        <slot></slot>
    </div>

    <div v-else-if="color === 'red'"
        class="bg-red-400 border-red-400 dark:bg-red-800 dark:border-red-800 dark:bg-opacity-40 bg-opacity-40 text-center p-2 rounded border">
        <slot></slot>
    </div>

    <div v-else-if="color === 'green'"
        class="bg-green-400 border-green-400 dark:bg-green-800 dark:border-green-800 dark:bg-opacity-40 bg-opacity-40 text-center p-2 rounded border">
        <slot></slot>
    </div>

    <div v-else-if="color === 'amber'"
        class="bg-amber-400 border-amber-400 dark:bg-amber-800 dark:border-amber-800 dark:bg-opacity-40 bg-opacity-40 text-center p-2 rounded border">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

withDefaults(defineProps<{ color?: "blue" | "red" | "green" | "amber" }>(), { color: "blue" })

</script>