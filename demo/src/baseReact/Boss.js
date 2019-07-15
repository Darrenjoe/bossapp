import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
    this.toToggole = this.toToggole.bind(this);
  }
  render() {
    return (
      <div>
        <CSSTransition
          in={this.state.isShow}
          timeout={2000}
          classNames="boss-text"
        >
          <div>顶级食材-鹿茸</div>
        </CSSTransition>
        <div>
          <button onClick={this.toToggole}>采购食材</button>
        </div>
      </div>
    );
  }

  toToggole() {
    this.setState({
      isShow: !this.state.isShow
    });
  }
}

export default Boss;
