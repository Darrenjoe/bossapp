import React, { Component } from 'react';
class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    }
    this.toToggole = this.toToggole.bind(this)
  }
  render() { 
    return (
      <div>
        <div className={this.state.isShow?'show':'hide'}>顶级食材-鹿茸</div>
        <div>
          <button onClick={this.toToggole}>采购食材</button>
        </div>
      </div>
    );
  }

  toToggole() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}
 
export default Boss;