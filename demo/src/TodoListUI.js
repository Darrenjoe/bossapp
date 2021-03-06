import React from "react";
import { Input, Button, List } from "antd";

const TodoListUI = props => {
  return (
    <div>
      <div style={{ margin: "10px" }}>
        <Input
          placeholder={props.inputValue}
          style={{ width: "250px", marginRight: "10px" }}
          value={props.inputValue}
          onChange={props.changeInputValue}
        />
        <Button type="primary" onClick={props.clickBtn}>
          Add
        </Button>
      </div>
      <div style={{ margin: "10px", width: "300px" }}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                props.deleteItem(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
// class TodoListUI extends Component {
//   render() {
//     return (
//       <div>
//         <div style={{ margin: "10px" }}>
//           <Input
//             placeholder={this.props.inputValue}
//             style={{ width: "250px", marginRight: "10px" }}
//             value={this.props.inputValue}
//             onChange={this.props.changeInputValue}
//           />
//           <Button type="primary" onClick={this.props.clickBtn}>
//             Add
//           </Button>
//         </div>
//         <div style={{ margin: "10px", width: "300px" }}>
//           <List
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index) => (
//               <List.Item
//                 onClick={() => {
//                   this.props.deleteItem(index);
//                 }}
//               >
//                 {item}
//               </List.Item>
//             )}
//           />
//         </div>
//       </div>
//     );
//   }
// }

export default TodoListUI;
