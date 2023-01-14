// In Redux, all state updates are triggered by dispatching actions. 
// An action is simply a JavaScript object that contains information about an action event that has occurred. 
// The Redux store receives these action objects, then updates its state accordingly. Sometimes a Redux action also carries some data.
// Think of Redux actions as messengers that deliver information about events happening in your app to the Redux store. The store then conducts the business of updating state based on the action that occurred.   

let action={
    type: 'LOGIN'
  }