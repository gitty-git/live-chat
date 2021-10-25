<template>
    <div class="container">
        <Navbar :user="user"/>
        <ChatWindow/>
        <NewChatForm/>
    </div>
</template>

<script>
import Navbar from "../components/Navbar";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import { watch } from "vue";
import NewChatForm from "../components/NewChatForm";
import ChatWindow from "../components/ChatWindow";

export default {
    name: "ChatRoom",
    components: { ChatWindow, NewChatForm, Navbar },
    setup() {
        const { user } = getUser()
        const router = useRouter()

        watch(user, () => {
            if (!user.value) {
                router.push({name: "Welcome"})
            }
        })

        return { user }
    }
}
</script>

<style scoped>

</style>
