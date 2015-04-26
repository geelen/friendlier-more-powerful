import React from 'react'
import SlideShow from './slide-show.jsx!'
import TypeSlab from './type-slab.jsx!'
import './main.css!'

export default class Main extends React.Component {
  render() {
    return <div className="Main">
      <SlideShow>
        <TypeSlab>{`
          Hello, my name is
          Glen
          and I'm from Melbourne
          Australia
        `}</TypeSlab>
        <TypeSlab>{`
          |"                     |
          Friendlier,
          More
          Powerful
          |                     "|
        `}</TypeSlab>
        <div>One</div>
        <div>Two</div>
      </SlideShow>
    </div>
  }
}
