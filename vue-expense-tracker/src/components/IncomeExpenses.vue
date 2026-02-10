<script setup>
import { defineProps } from 'vue';

const {income} = defineProps({
    income : {
        type: Number,
        required: true
    },
    expenses : {
        type: Number,
        required: true
    }
})
</script>

<template>
    <div class="inc-exp-container">
        <div>
            <h3>Income</h3>
            <p id="money-plus" class="money plus">+${{income}}</p>
        </div>
        <div>
            <h3>Expense</h3>
            <p id="money-minus" class="money minus">-${{ expenses }}</p>
        </div>
    </div>
</template>