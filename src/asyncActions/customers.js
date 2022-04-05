import {getCustomersAction} from "../store/customerReducer";

export const fetchCustomers = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => dispatch(getCustomersAction(users)))
    }
}