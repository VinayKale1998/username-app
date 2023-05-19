const redux = require("redux");

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type == "increment") {
    return { counter: state.counter + 1 };
  }

  return state;
};

const store = redux.createStore(reducer);
const subsciber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

console.log(store.getState());

store.dispatch({
  type: "increment",
});
console.log(store.getState());

store.subscribe(subsciber);
