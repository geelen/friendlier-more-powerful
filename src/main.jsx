import React from 'react'
import SlideShow from './slide-show.jsx!'
import TypeSlab from './type-slab.jsx!'
import './main.css!'

export default class Main extends React.Component {
  render() {
    return <div className="Main">
      <SlideShow>
        <TypeSlab>
          |OMG|
          |Fuckn|
          |YEAH|
        </TypeSlab>
        <TypeSlab>
          |Who is the best?|
          |  Glen  |
          |!is the fucken best|
        </TypeSlab>
        <div>One</div>
        <div>Two</div>
      </SlideShow>
    </div>
  }
}
