<script setup lang="ts">
import { useNotifications } from '@/composables/useNotifications';

const { notifications, removeNoti } = useNotifications();


</script>

<template>
    <Teleport to="body">
        <ol class="noti-list">
            <li v-for="noti in notifications" :key="noti.id" class="noti-item">
                <div class="text-sm font-semibold">
                    {{ noti.message }}
                </div>
                <button @click="removeNoti(noti.id)" class="noti-ack-btn">
                    Ok
                </button>
            </li>
        </ol>
    </Teleport>
</template>