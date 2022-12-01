import { onMounted } from 'vue'

export function useTestLocal() {
    onMounted(() => {
        console.log("useTestLocal:onMounted")
    })
}