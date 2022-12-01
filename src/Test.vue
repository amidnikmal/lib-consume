<template>
    <div>Test</div>
</template>

<script setup>
import { onMounted } from 'vue'

console.log("TEST:SETUP")

onMounted(() => {
    console.log("Test:mounted")
})
</script>

<!-- <script>
import { onMounted } from 'vue'

export default {
    setup() {
        onMounted(() => {
            console.log("mounted")
        })
    }
}

</script> -->