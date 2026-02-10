


<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    transactions: {
        type: Array,
        required: true
    }
})

const emit = defineEmits(['deleteTransaction']);

const onDelete = (id) => {
    emit('deleteTransaction', id)
}

// export default {
//     data(){
//         return {
//             transactions: [
//                 { id:1, text: "Flower", amount: -50},
//                 { id:2, text: "Cash", amount: 500},
//                 { id:3, text: "Bill", amount: -200},
//                 { id:4, text: "Rent", amount: -150},
//             ]
//         }
//     }
// }
</script>

<template>
    <h3>History</h3>
    <ul id="list" class="list">
        <li v-for="value in transactions" :key="transactions.id" :class="value.amount < 0 ? 'minus': 'plus'">
            {{ value.text }} <span>${{value.amount}}</span>
            <button class="delete-btn" @click="onDelete(value.id)">x</button>
        </li>
        <!-- <li class="minus">
            Cash <span>-$400</span>
            <button class="delete-btn">x</button>
        </li>
        <li class="plus">
            Cash <span>+$400</span>
            <button class="delete-btn">x</button>
        </li> -->
    </ul>
</template>