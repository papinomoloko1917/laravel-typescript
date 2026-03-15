<script setup lang="ts">
const emit = defineEmits<{ (e: 'test-click', value: boolean): void }>();

function sendEmit() {
    emit('test-click', true);
}
</script>

<template>
    <div>
        <button @click="sendEmit" class="btn btn-primary">
            <slot>
                Передать emmit
            </slot>
        </button>
    </div>
</template>