<script setup lang="ts">
import { useNotifications } from '@/composables/useNotifications';
import { useSettings } from '@/composables/useSettings';


const {privacySettings} = useSettings();
const { addNoti} = useNotifications();

const save = () => {
    addNoti("Privacy updated!")
}

</script>

<template>
    <div>
        <h2 class="text-2xl mb-4">Privacy</h2>
        <form @submit.prevent="save" class="space-y-4">
            <div class="flex items-center gap-1">
                <input type="checkbox" v-model="privacySettings.searchEngineIndexing" />
                <label>Search Engine Indexing</label>
            </div>

            <div>
                <label class="mb-1">Visibility</label>
                <select v-model="privacySettings.visibility">
                    <option value="private">Private</option>
                    <option value="public">Public</option>
                </select>
            </div>

            <button type="submit" class="btn-primary" >Save</button>
        </form>
    </div>
</template>