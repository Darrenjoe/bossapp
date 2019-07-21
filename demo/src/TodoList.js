import React, { Component } from "react";
import "antd/dist/antd.css";
import store from "./store";
import {
  changeInputAction,
  addItemAction,
  deleteItemAciton,
  getListAction
} from "./store/actionCreators";
import TodoListUI from "./TodoListUI";
import axios from "axios";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }

  componentDidMount() {
    axios
      .get(
        "https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList"
      )
      .then(res => {
        const data = res.data;
        const action = getListAction(data);
        store.dispatch(action);
      });
  }

  changeInputValue(e) {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }

  storeChange() {
    this.setState(store.getState());
  }

  clickBtn() {
    if (!this.state.inputValue) return;
    const action = addItemAction();
    store.dispatch(action);
  }

  deleteItem(index) {
    console.log(index);
    const action = deleteItemAciton(index);
    store.dispatch(action);
  }
}

export default TodoList;
