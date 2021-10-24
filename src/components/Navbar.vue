<template>
    <nav v-if="user">
        <div>
            <p>Hey there {{ user.displayName }}</p>
            <p class="email">Currently logged in as {{ user.email }}</p>
        </div>
        <button @click="handleClick">Logout</button>
    </nav>
</template>

<script>
import useLogOut from "../composables/useLogOut";

export default {
    name: "Navbar",
    props: ["user"],
    setup(props) {
        const { logOut, error } = useLogOut()
        const user = props.user

        const handleClick = async () => {
            await logOut()
            if (!error.value) {
                console.log("User logged out")
            }
        }

        return { handleClick, error, user }
    }
}
</script>

<style scoped>
    nav {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
    }
    nav p.email {
        font-size: 14px;
        color: #999999;
    }
</style>
