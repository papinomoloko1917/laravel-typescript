<script setup lang="ts">
import { ref } from 'vue';
import TestButton from '../Components/TestButton.vue';

const data = ref(false);

function handleTestClick(value: boolean) {
    data.value = value ? 'Кнопка нажата' : 'Кропка не нажата';
}
</script>

<template>
    <div>
        <h1>Test Page</h1>
        <p>{{ data }}</p>
        <TestButton @test-click="handleTestClick" />
    </div>
</template>