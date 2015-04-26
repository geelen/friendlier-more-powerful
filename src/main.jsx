import React from 'react'

export default class Main extends React.Component {
  keyDown(e) {
    console.log(e)
  }

  render() {
    return <div onKeyDown={this.keyDown.bind(this)}></div>
  }
}
