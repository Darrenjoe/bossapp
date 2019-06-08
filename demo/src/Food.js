import React, { Component, Fragment } from 'react'

class Food extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <input /> <button>增加菜单</button>
        </div>
        <ul>
          <li>红烧肉</li>
          <li>东坡肘子</li>
        </ul>
      </Fragment>
    )
  }
}

export default Food
