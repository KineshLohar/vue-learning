<script setup lang="ts">
import { useNotifications } from '@/composables/useNotifications';
import { useSettings } from '@/composables/useSettings';

const {general} = useSettings();
const { addNoti} = useNotifications();

const save = () => {
    addNoti("General updated!")
}

</script>

<template>
    <div>
        <h2 class="text-2xl mb-4">General</h2>
        <form @submit.prevent="save" class="space-y-4">
            <div>
                <label for="username">Username</label>
                <input type="text" v-model="general.username" >
            </div>
            <div>
                <label for="email">Email</label>
                <input type="text" v-model="general.email">
            </div>
            <div>
                <label>About Me</label>
                <textarea v-model="general.about" />
            </div>
            <div>
                <label>Gender</label>
                <label >
                    <input type="radio" value="male" v-model="general.gender">
                    <span>Male</span>
                </label>
                <label >
                    <input type="radio" value="female" v-model="general.gender">
                    <span>Female</span>
                </label>
                <label >
                    <input type="radio" value="other" v-model="general.gender">
                    <span>Other</span>
                </label>
            </div>
            <div>
                <label for="">Country</label>
                <select v-model="general.country">
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="uk">UK</option>
                </select>
            </div>
            <button class="btn-primary" type="submit">Save</button>
        </form>
    </div>
</template>