<template>
    <div>
        <p>{{ label }}</p>
        <input type="email" v-model="email" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    "label": string,
    "email": string,
}>()
const emit = defineEmits<{
    (e: 'update:email', email: string): void,
}>()

const email = computed({
    get() { return props.email },
    set(value: string) { emit('update:email', value) },
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
