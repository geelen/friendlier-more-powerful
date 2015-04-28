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
        <TypeSlab>{`
          Professional
          |               |
          |               |
          |      😎      |
          |              |
          !Starting a Basic
          !Website in 2015
        `}</TypeSlab>
        <TypeSlab>{`
          |      😎      |
          |              |
          1. Install NodeJS.
          |                    |
          !You mean IO.js, obviously.
          !I submitted 3 logos to that github issue.
        `}</TypeSlab>
        <TypeSlab>{`
          |      😎      |
          |              |
          2. Install Bower.
          |                    |
          !Pfft, Webpack doesn't even work with Bower.
          !I don't think. Maybe it does. Pfft, who cares.
        `}</TypeSlab>
        <TypeSlab>{`
          |      😎      |
          |              |
          3. Pick CSS framework.
          |                    |
          !Sure, I'll link in my bespoke, artisanal
          !CSS reset & typographic hierarchy
          !that will solve all CSS problems
          |                                            |
          !   (if I ever get time to open-source it)   |
        `}</TypeSlab>
        <TypeSlab>{`
          |      😎      |
          |              |
          4. Pick responsive approach.
          |                    |
          !Yep, injecting Metaquery into the head, NBD
        `}</TypeSlab>
        <TypeSlab>{`
          |      😎      |
          |              |
          47. Write some HTML
          |                    |
          !Well, technically, I'm building a component
          !library using React & JSX, but whatevs.
        `}</TypeSlab>
        <TypeSlab>{`
          Hobbyist
          |               |
          |               |
          |      😳      |
          |              |
          !Starting a Basic
          !Website in 2015
        `}</TypeSlab>
        <TypeSlab>{`
          |      😳      |
          |              |
          1. Install NodeJS.
          |                    |
          !Um, why? I thought Javascript ran in the browser.
        `}</TypeSlab>
        <TypeSlab>{`
          |      😳      |
          |              |
          2. Install Bower.
          |                    |
          !What is that even? I thought you said
          !I was supposed to use NPM for packages.
        `}</TypeSlab>
        <TypeSlab>{`
          |      😳      |
          |              |
          3. Pick CSS framework.
          |                    |
          !Um, ok. What if I pick wrong? Can I change it?
        `}</TypeSlab>
        <TypeSlab>{`
          |      😳      |
          |              |
          4. Pick responsive approach.
          |                    |
          !Ah! I know this. Media queries, right?
        `}</TypeSlab>
        <TypeSlab>{`
          |      😳      |
          |              |
          47. Write some HTML
          |                    |
          !*sobs* that's what I was trying to do
          !this whole time! My child/boss/friends
          !are demanding attention, I'm out of time.
        `}</TypeSlab>
        <TypeSlab>{`
          Hobbyist
          |               |
          |               |
          |      😳      |
          |              |
          !"Three files in a directory"
        `}</TypeSlab>
        <TypeSlab>{`
          |      😳      |
          |              |
          index.html
          main.css
          scripts.js
          |                 |
          |                 |
          |      ️😏      |
        `}</TypeSlab>
        <TypeSlab kind="uniform">{`
          JS:
          Minification
        `}</TypeSlab>
      </SlideShow>
    </div>
  }
}
