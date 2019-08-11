# Plain Redux

A redux app with basic functionalities of redux.

createPolicy, deletePolicy, createClaim are the action creators in index.js file.

claimsHistory, accounting, policies are the reducers in index.js file

store is the redux-store which stores all the reducers and state.

To dispatch any action either create an action via action creators

const action = createPolicy('Alex', 20);

and then dispatch the action manually 

store.dispatch(action);

Or directly dispatch the action like - store.dispatch(createPolicy('Jim', 30));

Use the Application
--------------------
1. npm install
2. npm run start:dev (by default application will be served on http://localhost:9000/)
3. To use the store, open console in your browser.

For more detail about redux see - https://github.com/arjunmalik/redux-app-advanced
