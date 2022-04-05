import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, asyncGetCustomersAction, removeCustomerAction} from "./store/customerReducer";
import {useEffect} from "react";
import {asyncAddCashAction, asyncGetCashAction} from "./store/cashReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

    useEffect(() => {
       // by thunk
       // dispatch(fetchCustomers())
    //    by saga
        dispatch(asyncGetCustomersAction())
    }, [])

    const addCash = (cash) => {
        dispatch(asyncAddCashAction(cash))
    }

    const getCash = (cash) => {
        dispatch(asyncGetCashAction(cash))
    }

    const addCustomer = (name) => {
        const customer = {
            id: Date.now(),
            name,
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

  return (
    <div className="App">
      <div style={{fontSize: '3em'}}>{cash}</div>
      <div style={{display: 'flex'}}>
          <button onClick={() => addCash()}>Пополнить счет</button>
          <button onClick={() => getCash()}>Снять деньги</button>
          <button onClick={() => addCustomer(prompt())}>Добавлять клиента</button>
          <button onClick={() => removeCustomer(Number(prompt()))}>Удалять клиента</button>
      </div>
        {customers.length > 0 ?
            <div>
                {customers.map(customer =>
                <div
                    onClick={() => removeCustomer(customer)}
                    style={{fontSize: '2rem', padding: '10px', border: '1px solid black', marginTop: '5px'}}
                >
                    {customer.name}
                </div>
                )}
            </div>
            :
            <div style={{fontSize: '2rem', marginTop: '20px'}}>
                Клиенты Отсутствуют!
            </div>

        }
    </div>
  );
}

export default App;
