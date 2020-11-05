import { StyleSheet } from "react-native"
import colors from "../../assets/colors"

class Validator {

    constructor(error, setError) {
        this.error = error
        this.setError = setError
    }

    form = {}
    error = {}
    setError = () => { }

    register(id, field) {
        this.form[id] = field
        const newError = this.error
        newError[id] = false
        this.setError(newError)
    }

    validate(condition, id) {
        if (condition) {
            console.log(id, "Error")
            const newError = this.error
            newError[id] = true
            this.setError(newError)
        }
    }

    isError(id) {
        console.log("Error : ", id)
        if (this.error[id])
            return styles.error
        return null
    }

    isValid() {
        Object.keys(this.error).forEach(key => {
            if (this.error[key])
                return false
        });
        return true
    }

    blur() {
        Object.keys(this.form).forEach(key => {
            this.form[key].blur()
        });
    }
}

export default Validator

const styles = StyleSheet.create({
    error: {
        borderWidth: 1,
        borderColor: colors.error
    }
})