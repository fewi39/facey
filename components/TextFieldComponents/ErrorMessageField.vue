<template>
    <div v-if="message" class="blink">
        <p>{{ message }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    "message": string | null,
}>()

const message = computed({
    get() { return props.message },
})
</script>

<style scoped>
p, input {
    display: block;
    width: 100%; height: 100%;
    margin: 0; padding: 0;
    text-align: center;
    color: lightcoral;
    font-size: 0.8rem;
}
@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
.blink {
  animation: blink 0.75s ease-in-out 2;
}
</style>
