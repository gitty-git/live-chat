<template>
    <div class="container">
        <Navbar :user="user"/>
    </div>
</template>

<script>
import Navbar from "../components/Navbar";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import { watch } from "vue";

export default {
    name: "ChatRoom",
    components: { Navbar },
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
