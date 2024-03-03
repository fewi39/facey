<template>
    <div v-if="isChecked!=null">
        <input type="checkbox" v-model="isChecked" />
        <p v-if="isChecked!=null">{{ label }}</p>
    </div>
    <div v-else>
        <input type="checkbox" disabled />
        <p class="invalid">{{ label }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    "label": string,
    "isChecked": boolean | null,
}>()
const emit = defineEmits<{
    (e: 'update:isChecked', isChecked: boolean): void,
}>()

const isChecked = computed({
    get() { return props.isChecked },
    set(value: boolean) { emit('update:isChecked', value) },
})
</script>

<style scoped>
p, input {
    display: inline-block;
    margin: 0; padding: 0;
    text-align: left;
}
input {
    margin-right: 0.5rem;
    width: 18px; height: 18px;
    vertical-align: middle;
}
p.invalid {
    text-decoration: line-through;
}
</style>
