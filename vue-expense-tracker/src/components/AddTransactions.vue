<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';
import { toast } from 'vue3-toastify';

const emit = defineEmits(['handleTransactionSubmit'])


const text = ref("");
const amount = ref(0)

const handleSubmit = () => {
    if(!text.value){
       return toast("Text is required!")
    }

    if(!amount.value || amount.value === 0){
       return toast("Amount is required!")
    }
    emit('handleTransactionSubmit', {
        text: text.value,
        amount: parseFloat(amount.value)
    })
    text.value = ''
    amount.value = 0
    console.log(text.value, amount.value);
}
</script>

<template>
    <h3>Add New Transactions</h3>
    <form id="form" @submit.prevent="handleSubmit">
        <div class="form-control">
            <label for="text">Text</label>
            <input type="text" v-model="text" id="text" placeholder="Enter ...." />
        </div>
        <div class="form-control">
            <label for="amount">Amount</label>
            <input type="number" id="amount" v-model="amount" inputmode="decimal" placeholder="Amount..." />
        </div>
        <button class="btn">Add Transaction</button>
    </form>
</template>