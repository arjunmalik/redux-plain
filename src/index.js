import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'Redux';

const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name,
      amount
    }
  }
}

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name
    }
  }
}

const createClaim = (name, amount) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name,
      amount
    }
  }
}

//Reducers( Departments)
const claimsHistory = (oldListOfClaims = [], action) => {

  if(action.type == 'CREATE_CLAIM') {
    return [...oldListOfClaims, action.payload];
  }
  return oldListOfClaims;
}

const accounting = (bagOfMoney = 100, action) => {
  if(action.type == 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amount;
  } else if(action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
}

const policies = (listOfPolicies = [], action) => {
  if(action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if(action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name!== action.payload.name)
  }
  return listOfPolicies;
};

const ourDepartments = combineReducers({
  accounting,
  claimsHistory,
  policies
});

const store = createStore(ourDepartments);
console.log("Store -> ")
console.log(store);
const action = createPolicy('Alex', 20);

store.dispatch(action);
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));
store.dispatch(createClaim('Alex', 120));
store.dispatch(createClaim('Jim', 50));
console.log("State of the store");
console.log(store.getState());

ReactDOM.render(
  <div>HEELOO</div>
  , document.getElementById('root'));
