<template>
    <div>
        <Test />
    </div>
</template>

<script>
import Test from './Test.vue'

import { onMounted } from 'vue'
import { useTest } from 'lib-test/src/lib'
import { useTestLocal } from './composable'
export default {
    name: 'App',
    components: {
        Test
    },

    data() {
        return {};
    },

    setup() {
        console.log("APP:SETUP")

        onMounted(() => {
            console.log("APP:onMounted")
        })
        useTestLocal();
        useTest()
    },

    created() {
        // console.log("APP")
    }
};
</script>
