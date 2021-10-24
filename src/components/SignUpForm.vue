<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" required placeholder="Display Name" v-model="displayName">
        <input type="email" required placeholder="Email" v-model="email">
        <input type="password" required placeholder="Password" v-model="password">
        <div class="error">{{ error }}</div>
        <button>Sign up</button>
    </form>
</template>

<script>
import { ref } from "vue";
import useSignUp from "../composables/useSignUp";

export default {
    name: "SignUpForm",
    setup(props, { emit }) {
        const { error, signUp } = useSignUp()
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await signUp(email.value, password.value, displayName.value)
            if (!error.value) {
                emit('signup')
            }
        }

        return { displayName, email, password, handleSubmit, error }
    }
}
</script>

<style scoped>

</style>
