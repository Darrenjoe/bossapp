import React, { Component } from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";
import store from "./store";
import {
  changeInputAction,
  addItemAction,
  deleteItemAciton
} from "./store/actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <div>
        <div style={{ margin: "10px" }}>
          <Input
            placeholder={this.state.inputValue}
            style={{ width: "250px", marginRight: "10px" }}
            value={this.state.inputValue}
            onChange={this.changeInputValue}
          />
          <Button type="primary" onClick={this.clickBtn}>
            Add
          </Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.deleteItem.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }

  changeInputValue(e) {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }

  storeChange() {
    this.setState(store.getState());
  }

  clickBtn() {
    const action = addItemAction();
    store.dispatch(action);
  }

  deleteItem(index) {
    const action = deleteItemAciton(index);
    store.dispatch(action);
  }
}

export default TodoList;
