import React, { Component } from 'react';
import PropTypes from 'prop-types'

class FoodItem extends Component {

  constructor(props) {
    super(props);
    this.handeClick = this.handeClick.bind(this)
  }
  // 组件第一次存在于dom中，函数不会执行
  // 如果已经存在于Dom中，函数才会被执行
  componentWillReceiveProps() {
    console.log('child-componentWillReceiveProps');
  }

  componentWillUnmount() {
    console.log('child-componentWillUnmount');
  }

  render() { 
    return (
      <li onClick={this.handeClick}>
        {this.props.foodName}{this.props.content}
      </li>
    );
  }

  handeClick() {
    this.props.deleteItem(this.props.index)
  }

}

FoodItem.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

FoodItem.defaultProps = {
  foodName: '添加食材-'
}
 
export default FoodItem;