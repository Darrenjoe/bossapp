import React, { Component } from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";

const data = ["代码编写", "看看书", "看看报纸"];

class TodoList extends Component {
  render() {
    return (
      <div>
        <div style={{ margin: "10px" }}>
          <Input
            placeholder="write Something"
            style={{ width: "250px", marginRight: "10px" }}
          />
          <Button type="primary">Add</Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
