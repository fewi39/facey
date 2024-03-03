<template>
    <div>
        <p>{{ label }}</p>
        <input type="password" v-model="password" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    "label": string,
    "password": string,
}>()
const emit = defineEmits<{
    (e: 'update:password', password: string): void,
}>()

const password = computed({
    get() { return props.password },
    set(value: string) { emit('update:password', value) },
})
</script>

<style scoped>
p, input {
    display: block;
    width: 100%; height: 100%;
    margin: 0; padding: 0;
    text-align: left;
}
p {
    margin-bottom: 0.5rem;
}
input {
    box-sizing: border-box;
    padding: 0 1rem;
    background-color: whitesmoke;
    border: 1px solid rgb(220, 220, 220);
    border-radius: 3px;
    height: 3rem;
    font-size: 1.2rem;
    line-height: 1.5rem;
}
</style>
