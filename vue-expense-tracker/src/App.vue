<script setup>
import 'vue3-toastify/dist/index.css';

import { computed, onMounted, ref } from 'vue';
import AddTransactions from './components/AddTransactions.vue';
import Balance from './components/Balance.vue';
import Header from './components/Header.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
import TransactionsList from './components/TransactionsList.vue';
import { toast } from 'vue3-toastify';

// const transactions = ref([
//                 { id:1, text: "Flower", amount: -50},
//                 { id:2, text: "Cash", amount: 500},
//                 { id:3, text: "Bill", amount: -200},
//                 { id:4, text: "Rent", amount: -150},
//             ])


const transactions = ref([]);
onMounted(() => {
  const savedTrans = JSON.parse(localStorage.getItem("transactions"));
  if(savedTrans){
    transactions.value = savedTrans;
  }
})


            const total = computed(() => transactions.value.reduce((acc, transaction) => acc + transaction.amount, 0))

            const income = computed(() => transactions.value.filter(item => item.amount > 0).reduce((acc, trans) =>  acc + trans.amount,0))

            const expenses = computed(() => transactions.value.filter(item => item.amount < 0).reduce((acc, trans) => {
              return acc - trans.amount
            },0));

            console.log(localStorage.getItem('transactions'));
            

            const handleTransactionSubmit = (data) => {
              console.log("DATA", data);
              transactions.value.unshift({
                id: transactions.value.length,
                ...data
              })

              saveToLocalStorage();
              
              toast("Transaction Successful!")
            }

            const deleteTransaction = (id) => {
              // const index = transactions.value.findIndex(trans => trans.id === id);
              // transactions.value.splice(index, 1)

              transactions.value = transactions.value.filter(tran => tran.id !== id)

              saveToLocalStorage();
              toast.success("Transaction Deleted!")
            }

            const saveToLocalStorage = () => {
              localStorage.setItem('transactions', JSON.stringify(transactions.value))
            }

</script>

<template>
<Header />
<div class="container">
  <Balance :total="total"/>
  <IncomeExpenses :income="income" :expenses="expenses"/>
  <TransactionsList :transactions="transactions" @deleteTransaction="deleteTransaction" />
</div>
<AddTransactions @handleTransactionSubmit="handleTransactionSubmit" />
</template>

<style scoped>
</style>