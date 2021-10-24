import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const error = ref(null)

const logIn = async (email, password) => {
    error.value = null
    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        error.value = null
        return res
    }
    catch (err) {
        console.log(err.message)
        error.value = 'Incorrect login credentials.'
    }
}

const useLogIn = () => ({ error, logIn })

export default useLogIn()
