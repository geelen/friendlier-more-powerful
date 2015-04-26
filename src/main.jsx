import React from 'react'
import {base} from './main.css!'

export default class Main extends React.Component {
  keyDown(e) {
    console.log(e)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDown.bind(this))
  }

  render() {
    return <div className="Main"></div>
  }
}
