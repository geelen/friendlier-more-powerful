import React from 'react'
import SlideShow from './slide-show.jsx!'
import './main.css!'

export default class Main extends React.Component {
  render() {
    return <div className="Main">
      <SlideShow>
        <div>One</div>
        <div>Two</div>
      </SlideShow>
    </div>
  }
}
