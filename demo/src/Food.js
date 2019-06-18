import React, { Component, Fragment } from 'react'
import './index.css'
import FoodItem from './FoodItem'
import axios from 'axios'
import Boss from './Boss'

class Food extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'Darren',
      list: ['干锅肥肠', '佛跳墙']
    }
  }

  // componentWillMount() {
  //   console.log('组件即将挂载到页面');
  // }

  componentDidMount() {
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
      .then((res) => {
        console.log('axios 获取数据成功' + JSON.stringify(res))
      })
      .catch((error) => {
        console.log('axios 获取数据失败:' + error)
      })
  }

  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate1')
  //   return true
  // }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate2')
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate4')
  // }

  render() {
    console.log('组件挂载中3');
    return (
      <Fragment>
        <div>
          <label htmlFor="editor">增加菜品:</label>
          <input
            id="editor"
            className="input"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={(input) => {this.input=input}}
          />
          <button onClick={this.addList.bind(this)}>增加菜单</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                  <FoodItem
                    content={item}
                    key={index + item}
                    index={index}
                    deleteItem={this.deleteItem.bind(this)}
                  />
              )
            })
          }
        </ul>
        <Boss></Boss>
      </Fragment>
    )
  }

  inputChange(e) {
    this.setState({
      inputValue: this.input.value
    })
  }

  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  deleteItem(index) {
    let list = this.state.list
    list.splice(index,1);
    this.setState({
      list: list
    })
  }
}

export default Food
