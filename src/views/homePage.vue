<template>{{ message }}</template>

<script>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
export default {
    name:"homePage",
    setup() {
        const store = useStore();
        const message = ref('you are not logged in')
        onMounted( async () => {
            try{
            const response = await fetch('http://localhost:8000/api/user', {
                headers: {'Content-Type' : 'application/json'},
                credentials:'include'
            })
            const content = await response.json();

            message.value = `Hi ${content.name}`;

            await store.dispatch('setAuth', true);

            } catch (e) {
                await store.dispatch('setAuth', false);
            }
        })
        return {
            message,
        }
    }
}
</script>