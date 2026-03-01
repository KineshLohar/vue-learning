import { ref } from "vue"

interface Notification {
    id: number,
    message: string
}

const notifications = ref<Notification[]>([]);

const addNoti = (message: string) => {
    const id = Date.now();

    notifications.value.push({
        id, 
        message
    })

    setTimeout(() => removeNoti(id) ,5000)
}

const removeNoti = (id: number) => {
    notifications.value = notifications.value.filter(n => n.id !== id)
}

export const useNotifications = () => {

    return { notifications, addNoti, removeNoti }
}