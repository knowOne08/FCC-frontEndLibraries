// You can also send specific data along with your actions. In fact, this is very common because actions usually originate from some user interaction and tend to carry some data with them. The Redux store often needs to know about this data.
const ADD_NOTE = "ADD_NOTE";

const notesReducer = (state = "Initial State", action) => {
  switch (action.type) {
    // change code below this line

    case ADD_NOTE:
      return action.text;

    // change code above this line
    default:
      return state;
  }
};

const addNoteText = note => {
  // change code below this line

  return {
    type: ADD_NOTE,
    text: note
  };

  // change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText("Hello!"));
console.log(store.getState());