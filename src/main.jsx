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
          I'm from Melbourne
          Australia
          which is a very very long way away
        `}</TypeSlab>
        <TypeSlab>{`
          |"                     |
          Friendlier,
          MORE
          Powerful
          |                     "|
        `}</TypeSlab>
        <TypeSlab>{`
          ——— About me: ———
          |                   |
          31 years old
          |                   |
          Professional for 9 years
          Senior for 5 years
          Front-end for 2 years
          |                                                  |
          ———————————————————————
        `}</TypeSlab>
        <TypeSlab color="Ocean">{`
          !"I think I'm quite good at remembering
          how strange things are
          when you first come across them.
          |                                                        |
          !If I have to explain something to somebody
          !I'm usually quite good at it, because I can remember
          what it was like
          not to understand it,
          !and how strange and bewildering it looked"
          |                     |
          |!                              — Douglas Adams|
          |!                                    Hitchhiker's Guide to the Galaxy Radio Series iTunes bonus content|
        `}</TypeSlab>
        <TypeSlab kind="uniform">{`
          Terminal
          Unix
          Google
          MDN 😍
          W3Schools 🚫💩
        `}</TypeSlab>
        <TypeSlab>{`
          !We forget just how much
          implicit
          knowledge
          !is required to do our jobs
        `}</TypeSlab>
        <TypeSlab kind="uniform">{`
          Starting a basic website in 2014
          1. Install NodeJS.
          2. Install Bower
          3. Pick CSS framework
          4. Pick responsive approach
          | |
          |     • • •
          | |
          47. Write some HTML
        `}</TypeSlab>
        <TypeSlab>{`
          Professional
          |               |
          |               |
          |    😎    |
          |           |
          Hobbyist
          |               |
          |               |
          |    😳    |
        `}</TypeSlab>
      </SlideShow>
    </div>
  }
}
