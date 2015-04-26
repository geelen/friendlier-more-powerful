import React from 'react'
import SlideShow from './slide-show.jsx!'
import TypeSlab from 'typeslab/src/lib/components/output.jsx!'
import './main.css!'

export default class Main extends React.Component {
  render() {
    let font = {
      main: {
        name: "Avenir Next",
        weight: 900,
        caps: true
      },
      alt: {
        name: "Avenir Next",
        weight: 100,
        caps: false
      }
    }
    return <div className="Main">
      <SlideShow>
        <TypeSlab noBorder width={960} lines={["omg","win","boat"]} chosenColor={{background: "black", foreground: "red"}} chosenFont={font}></TypeSlab>
        <div>One</div>
        <div>Two</div>
      </SlideShow>
    </div>
  }
}
