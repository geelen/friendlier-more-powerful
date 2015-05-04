import React from 'react/addons'
let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup
import './slide-show.css!'

export default class SlideShow extends React.Component {
  constructor() {
    super()
    this.state = {
      slide: 1
    }
  }

  keyDown(e) {
    if (e.keyCode == 39 || e.keyCode == 40) {
      this.incrementSlide()
    } else if (e.keyCode == 37 || e.keyCode == 38) {
      this.decrementSlide()
    } else if (e.keyCode == 79) {
      this.toggleOverview()
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

  toggleOverview() {
    this.setState({overviewActive: !this.state.overviewActive})
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDown.bind(this))
  }

  render() {
    return this.state.overviewActive ?
      <div className="SlideShow -overview">{
        this.props.children.map((slide, i) => <div className="Slide" key={i}>{slide}</div>)
      }</div>
      :
      <ReactCSSTransitionGroup component="div" className="SlideShow" transitionName="slide">
        <div className="Slide" key={this.state.slide}>
          {this.props.children[this.state.slide - 1]}
        </div>
      </ReactCSSTransitionGroup>
  }
}
