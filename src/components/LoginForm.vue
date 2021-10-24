<template>
    <form @submit.prevent="handleSubmit">
        <input type="email" required placeholder="Email" v-model="email">
        <input type="password" required placeholder="Password" v-model="password">
        <div class="error">{{ error }}</div>
        <button>Log in</button>
    </form>
</template>

<script>
import { ref } from "vue";
import useLogIn from "../composables/useLogIn";

export default {
    name: "LoginForm",
    setup(props, context) {
        const email = ref('')
        const password = ref('')
        const { error, logIn } = useLogIn

        const handleSubmit = async () => {
            await logIn(email.value, password.value)
            if (!error.value) {
                context.emit('login', )
            }
        }

        return { email, password, handleSubmit, error }
    }
}
</script>

<style scoped>

</style>
