import React from 'react/addons'
let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup
import './slide-show.css!'
import ImgurUpload from 'typeslab/src/lib/components/imgur-upload'

export default class SlideShow extends React.Component {
  constructor() {
    super()
    this.state = {
      slide: parseInt(location.hash.replace(/^#/, '')) || 1
    }
  }

  keyDown(e) {
    if (e.keyCode == 39 || e.keyCode == 40) {
      this.incrementSlide()
    } else if (e.keyCode == 37 || e.keyCode == 38) {
      this.decrementSlide()
    } else if (e.keyCode == 79) {
      this.toggleOverview()
    } else if (e.keyCode == 70) {
      this.toggleFullscreen()
    } else if (e.keyCode == 85) {
      this.uploadEverything()
    } else {
      console.log(e.keyCode)
    }
  }

  uploadEverything() {
    if (!this.state.overviewActive) {
      console.log("be overview first!")
      return
    }
    let node = this.refs.slideshow.getDOMNode(),
      canvases = node.querySelectorAll("canvas"),
      queue = Promise.resolve([])
      Array.prototype.forEach.call(canvases, (canvas,i) => {
      queue = queue.then(doneIds => {
        console.log(`Uploading slide #${i}`)
        return ImgurUpload.uploadSingleImage(canvas)
          .then(json => {
            if (json.success) {
              console.log("Done. " + json.data.link)
              return doneIds.concat([json.data.id])
            } else {
              console.error("NOO!")
              console.log(json)
              return doneIds
            }
          })
      })
    })

    queue.then(ids => {
      ImgurUpload.createAlbum(ids, "Friendlier, More Powerful")
      .then(json => {
          console.log(json)
          console.log(`Uploaded to https://imgur.com/a/${json.data.id}`)
        })
    })
  }

  incrementSlide() {
    this.setSlide(Math.min(this.props.children.length, this.state.slide + 1))
  }

  decrementSlide() {
    this.setSlide(Math.max(1, this.state.slide - 1))
  }

  setSlide(nr) {
    history.replaceState({}, "", `#${nr}`)
    this.setState({slide: nr})
  }

  toggleOverview() {
    this.setState({overviewActive: !this.state.overviewActive})
  }

  toggleFullscreen() {
    if (document.webkitFullscreenElement) {
      document.webkitExitFullscreen()
    } else {
      document.body.webkitRequestFullscreen()
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDown.bind(this))
  }

  render() {
    return this.state.overviewActive ?
      <div className="SlideShow -overview" ref="slideshow">{
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
