<template>
    <img v-if="$colorMode.value === 'light'" src="~/assets/logo/light.svg" alt="logo">
    <img v-else src="~/assets/logo/dark.svg" alt="logo">
</template>