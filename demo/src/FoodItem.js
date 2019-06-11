import React, { Component } from 'react';
import PropTypes from 'prop-types'

class FoodItem extends Component {

  constructor(props) {
    super(props);
    this.handeClick = this.handeClick.bind(this)
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