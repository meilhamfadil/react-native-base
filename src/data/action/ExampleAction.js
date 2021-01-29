import { Action } from '../reducer/ExampleReducer'
import { getUsers } from "../service/remote";

export const loadUsers = (parameter) => dispatch => {
    getUsers().then(response => {
        if (response.ok)
            Action.onLoadUsers(response.data)
        else
            Action.onErrorDetected("There is Problem Loading Data")
    }).catch(error => {
        Action.onErrorDetected(error)
    })
}
