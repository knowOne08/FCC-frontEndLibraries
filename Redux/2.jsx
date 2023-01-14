// you can retrieve the current state held in the Redux store object with the getState() method.
const store = Redux.createStore(
    (state = 5) => state
  );
  
  // Change code below this line
  
  const currentState = store.getState()