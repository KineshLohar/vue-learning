import { ref, watch } from 'vue'

export interface GeneralSettings {
  username: string
  email: string
  about: string
  gender: 'male'
  country: 'usa'
}

export interface NotificationsSettings {
  email: boolean
  sms: boolean
}

type Visibility = 'private' | 'public'

export interface PrivacySetting {
  searchEngineIndexing: boolean
  visibility: Visibility
}

const init = <T>(key: string, defaults: T) => {
    const stored = localStorage.getItem(key)

    return stored !== null
      ? JSON.parse(stored)
      : defaults
}

const general = ref<GeneralSettings>(
    init<GeneralSettings>('general', {
        username: '',
        email: '',
        about: '',
        gender: 'male',
        country: 'usa',
      })
)

watch(general, (value) => localStorage.setItem('general', JSON.stringify(value)), { deep: true })

const notifications = ref<NotificationsSettings>(
    init<NotificationsSettings>('notifications', {
        email: false,
        sms: false,
      })
)

watch(notifications, (value) => localStorage.setItem('notifications', JSON.stringify(value)), {
  deep: true,
})

const privacySettings = ref<PrivacySetting>(
    init<PrivacySetting>('privacy', {
        searchEngineIndexing: false,
        visibility: 'private',
      })
)

watch(privacySettings, (value) => localStorage.setItem('privacySettings', JSON.stringify(value)), {
  deep: true,
})

export function useSettings() {
  return {
    general,
    notifications,
    privacySettings,
  }
}
