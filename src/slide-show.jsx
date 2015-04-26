import React from 'react'
import './slide-show.css!'

export default class SlideShow extends React.Component {
  constructor() {
    super()
    this.state = {
      slide: 1
    }
  }

  keyDown(e) {
    if (e.keyCode == 39) {
      this.incrementSlide()
    } else if (e.keyCode == 37) {
      this.decrementSlide()
    } else {
      console.log(e.keyCode)
    }
  }

  incrementSlide() {
    this.setState({slide: Math.min(this.props.children.length, this.state.slide + 1)})
  }

  decrementSlide() {
    this.setState({slide: Math.max(1, this.state.slide - 1)})
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDown.bind(this))
  }

  render() {
    console.log()
    return <div className="SlideShow">
      {this.props.children[this.state.slide - 1]}
    </div>
  }
}
