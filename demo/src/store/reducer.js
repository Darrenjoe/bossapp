const defaultState = {
  inputValue: "Write Something",
  list: ["代码编写", "看看书", "看看报纸"]
};
export default (state = defaultState, action) => {
  // Reducer 里只能接受state，不能改变state
  if (action.type === "changeInput") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === "addItem") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  return state;
};
