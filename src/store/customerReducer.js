const defaultState = {
    customers: []
}

export const ADD_CUSTOMER = "ADD_CUSTOMER";
export const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
export const GET_CUSTOMERS = "GET_CUSTOMERS";
export const ASYNC_GET_CUSTOMERS = "ASYNC_GET_CUSTOMERS";

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMER:
            const filteredCustomers = state.customers.filter(customer => customer.id !== action.payload)
            return {...state, customers: [...filteredCustomers]}
        default:
            return state;
    }
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})
export const getCustomersAction = (payload) => ({type: GET_CUSTOMERS, payload})
export const asyncGetCustomersAction = () => ({type: ASYNC_GET_CUSTOMERS})