import React, { Component } from 'react';

class FoodItem extends Component {

  constructor(props) {
    super(props);
    this.handeClick = this.handeClick.bind(this)
  }

  render() { 
    return (
      <li onClick={this.handeClick}>{this.props.content}</li>
    );
  }

  handeClick() {
    this.props.deleteItem(this.props.index)
  }

}
 
export default FoodItem;