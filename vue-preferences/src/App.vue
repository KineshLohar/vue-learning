<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Tab, TabKey } from './types';
import TabButton from './components/TabButton.vue';
import General from './components/General.vue';
import Notifications from './components/Notifications.vue';
import Privacy from './components/Privacy.vue';
import FadeTransition from './components/FadeTransition.vue';
import ToastNotifications from './components/ToastNotifications.vue';


const currentTab = ref<TabKey>('General')
const tabs: Tab[] = [
  {
    key: 'General',
    label: 'General',
    component: General
  },
  {
    key: 'Notifications',
    label: 'Notifications',
    component: Notifications
  },
  {
    key: 'Privacy',
    label: 'Privacy',
    component: Privacy
  },
]

const activeComponent = computed(() => tabs.find(tab => tab.key === currentTab.value)?.component);

</script>

<template>
  <div class="max-w-2xl mx-auto p-4">
    <nav class=" font-medium text-center border-b border-gray-200 mb-4 text-gray-500">
      <ul class="flex flex-wrap -mb-px">
        <li v-for="tab in tabs" :key="tab.key">
          <TabButton :tab="tab" :current-tab="currentTab" @click="currentTab = tab.key" />
        </li>
      </ul>
    </nav>
    <FadeTransition>
      <KeepAlive>
        <component :is="activeComponent" />
      </KeepAlive>
    </FadeTransition>
    <ToastNotifications></ToastNotifications>
  </div>
</template>

<style scoped>

</style>
