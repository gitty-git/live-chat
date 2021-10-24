import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const error = ref(null)

const signUp = async (email, password, displayName) => {
    error.value = null

    const res = await projectAuth.createUserWithEmailAndPassword(email, password)

    const checkRes = (res) => {
        if (!res) throw new Error('Could not complete the sign up')
    }

    try {
        checkRes(res)
        await res.user.updateProfile({ displayName })
        error.value = null

        return res
    }
    catch (err) {
        console.log(err.message)
        error.value = err.message
    }

    // try {
    //     const res = await projectAuth.createUserWithEmailAndPassword(email, password)
    //     if (!res) {
    //         throw new Error('Could not complete the signup')
    //     }
    //     await res.user.updateProfile({ displayName })
    //     error.value = null
    //
    //     return res
    // }
    // catch (err) {
    //     console.log(err.message)
    //     error.value = err.message
    // }
}

const useSignUp = () => {
    return { error, signUp }
}

export default useSignUp