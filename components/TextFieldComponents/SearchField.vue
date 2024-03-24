<template>
    <div>
        <input type="text" v-model="value" placeholder="label" />
        <button v-on:click="func">search</button>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    "label"   : string,
}>()
const emit = defineEmits<{
    (e: 'clickButton', value: string): void
}>()

const value = ref('')
const func = ():void => {
    emit('clickButton', value.value)
}
</script>

<style scoped>
</style>
