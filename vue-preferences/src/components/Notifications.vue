<script setup lang="ts">
import { useNotifications } from '@/composables/useNotifications';
import { useSettings } from '@/composables/useSettings';

const { notifications } = useSettings();
const { addNoti} = useNotifications();

const save = () => {
    addNoti("Notificationss updated!")
}


</script>

<template>
    <div>
        <h2 class="text-2xl mb-4">Notifications</h2>
        <form @submit.prevent="save" class="space-y-4 mx-auto" >
            <div class="flex items-center gap-1">
                <input type="checkbox" v-model="notifications.email" />
                <label>Email Notifications</label>
            </div>
            <div class="flex items-center gap-1">
                <input type="checkbox" v-model="notifications.sms" />
                <label>SMS Notifications</label>
            </div>
            <button type="submit" class="btn-primary">Save</button>
        </form>
    </div>
</template>