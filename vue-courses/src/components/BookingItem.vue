<script setup lang="ts">
import { computed } from 'vue';
import CardSections from './CardSections.vue';
import RoundedButton from './RoundedButton.vue';
import { Check, LoaderCircle } from 'lucide-vue-next';

const props = defineProps({
    title: String,
    status: String
})

defineEmits(['report']);

const pending = computed(() => props.status === 'pending');
const icon = computed(() => pending.value ? LoaderCircle : Check)

</script>


<template>
    <CardSections>
        <div class="flex items-center justify-between">
            <div>{{ title }}</div>
            <div >
                <component :is="icon" :class="{'animate-spin': pending}"></component>
            </div>
            <RoundedButton @click="$emit('report')" variant="danger">Report</RoundedButton>
        </div>
    </CardSections>
</template>