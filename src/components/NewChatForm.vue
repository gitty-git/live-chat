<template>
    <form>
        <textarea @keypress.enter.prevent="handleSubmit"
                  v-model="message"
                  placeholder="Type a message and hit enter to send..."
        />
    </form>
    <div class="error">{{ error }}</div>
</template>

<script>
import { ref } from "vue";
import getUser from "../composables/getUser";
import { timestamp } from "../firebase/config";
import useCollection from "../composables/useCollection";

export default {
    name: "NewChatForm",
    setup() {
        const { user } = getUser()
        const { addDoc, error } = useCollection("messages")
        const message = ref("")

        const handleSubmit = async () => {
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: timestamp()
            }

            await addDoc(chat)
            if (!error.value) {
                message.value = ""
            }
        }

        return { message, handleSubmit, error }
    }
}
</script>

<style scoped>
form {
    margin: 10px;
}
textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}
</style>
