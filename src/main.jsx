import React from 'react'
import SlideShow from './slide-show.jsx!'
import TypeSlab from './type-slab.jsx!'
import './main.css!'

export default class Main extends React.Component {
  render() {
    return <div className="Main">
      <SlideShow>
        <TypeSlab>{`
          !Hello, my name is
          Glen
          !I'm from Melbourne,
          AUSTRALIA
          !which is a very very long way away. I am
          @glenmaddern
          !on the Twitter so please say hello.
        `}</TypeSlab>
        <TypeSlab>{`
          |"                          |
          Friendlier,
          MORE          |
          Powerful
          |                          "|
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
        <TypeSlab>{`
          What's it like to
          be new to building
          the web?
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
        <TypeSlab kind="uniform" color="Ocean">{`
          Starting a basic website in 2014
          1. Install NodeJS.
          2. Install Bower
          3. Pick CSS framework
          4. Pick responsive approach
          | |
          |     • • •
          | |
          47. Write some HTML
          | |
          | |
          | |
          !@iamdeveloper, 2 Oct 2014
        `}</TypeSlab>
        <TypeSlab>{`
          Professional
          |               |
          |               |
          |    😎    |
          |           |
          Newcomer
          |               |
          |               |
          |    😳    |
        `}</TypeSlab>
        <TypeSlab color="">{`
          Professional
          |               |
          |               |
          |      😎      |
          |              |
          !Starting a Basic
          !Website in 2015
        `}</TypeSlab>
        <TypeSlab color="Ocean">{`
          |      😎      |
          |              |
          1. Install NodeJS.
          |                    |
          !You mean IO.js, obviously.
          !I submitted 3 logos to that GitHub issue.
        `}</TypeSlab>
        <TypeSlab color="Ocean">{`
          |      😎      |
          |              |
          2. Install Bower.
          |                    |
          !Pfft, Webpack doesn't even work with Bower.
          !I don't think. Maybe it does. Pfft, who cares.
        `}</TypeSlab>
        <TypeSlab color="Ocean">{`
          |      😎      |
          |              |
          3. Pick CSS framework.
          |                    |
          !Sure, I'll link in my bespoke, artisanal
          !CSS reset & typographic hierarchy
          !that will solve all CSS problems
          |                                            |
          !     (if I ever get time to open-source it)     |
        `}</TypeSlab>
        <TypeSlab color="Ocean">{`
          |      😎      |
          |              |
          4. Pick responsive approach.
          |                    |
          !Yep, injecting Metaquery into the head, NBD
        `}</TypeSlab>
        <TypeSlab color="Ocean">{`
          |      😎      |
          |              |
          47. Write some HTML
          |                    |
          !Well, technically, I'm building a component
          !library using React & JSX, but whatevs.
        `}</TypeSlab>
        <TypeSlab>{`
          Newcomer
          |               |
          |               |
          |      😳      |
          |              |
          !Starting a Basic
          !Website in 2015
        `}</TypeSlab>
        <TypeSlab color="Ocean">{`
          |      😳      |
          |              |
          1. Install NodeJS.
          |                    |
          !Um, why? I thought Javascript ran in the browser.
        `}</TypeSlab>
        <TypeSlab color="Ocean">{`
          |      😳      |
          |              |
          2. Install Bower.
          |                    |
          !What is that even? I thought you said
          !I was supposed to use NPM for packages.
        `}</TypeSlab>
        <TypeSlab color="Ocean">{`
          |      😳      |
          |              |
          3. Pick CSS framework.
          |                    |
          !Um, ok. What if I pick wrong? Can I change it?
        `}</TypeSlab>
        <TypeSlab color="Ocean">{`
          |      😳      |
          |              |
          4. Pick responsive approach.
          |                    |
          !Ah! I know this. Media queries, right?
        `}</TypeSlab>
        <TypeSlab color="Ocean">{`
          |      😳      |
          |              |
          47. Write some HTML
          |                    |
          !*sobs* that's what I was trying to do
          !this whole time! My child/boss/friends
          !are demanding attention, I'm out of time.
        `}</TypeSlab>
        <TypeSlab>{`
          Newcomer
          |               |
          |               |
          |      😳      |
          |              |
          !"Three files in a directory"
        `}</TypeSlab>
        <TypeSlab color="Ocean">{`
          |      😳      |
          |              |
          index.html
          styles.css
          scripts.js
          |                 |
          |                 |
          |      ️😏      |
        `}</TypeSlab>
        <TypeSlab kind="uniform" font="thinner">{`
          JS:
          | |
          | |
          • Have more than one file
          |!   without including separately
          | |
          | |
          • Have two files communicate
          |!   without global scope
          | |
          | |
          • Include dependencies without
          |!   either of the above
          | |
          | |
          • Minimisation or any other
          |!   kind of production processing
          | |
          | |
        `}</TypeSlab>
        <TypeSlab kind="uniform" font="thinner">{`
          CSS:
          | |
          | |
          • No pre/post-processing
          | |
          | |
          • No autoprefixer!
          | |
          | |
          • No variables, colour functions
          | |
          | |
          • No production workflow
          | |
          | |
        `}</TypeSlab>
        <TypeSlab>{`
          |    😳    |
          |          |
          Does any of that
          matter?
        `}</TypeSlab>
        <TypeSlab>{`
          ❌
        `}</TypeSlab>
        <TypeSlab color="Ocean">{`
          Consumer web
          |                          |
          |!          ~ vs ~         |
          |                  |
          professional web
          |                   |
          !                                       — Alex Feyerke|
          !                                           Step Off This Hurtling Machine, JSConfAU 2014
        `}</TypeSlab>
        <TypeSlab color="Ocean">{`
          !"I'd much rather we turn the professional web into a
          producer web,
          !something that's culturally and socially |
          accessible, welcoming
          & truly open to all
          !of any skill level, of any language, of any gender."
          |                   |
          !                                       — Alex Feyerke|
          !                                           Step Off This Hurtling Machine, JSConfAU 2014
        `}</TypeSlab>
        <TypeSlab font="thinner">{`
          !    GET PEOPLE    |
          |                 |
          INSPIRED
          |                     |
          !    BY WHAT'S    |
          |                 |
          POSSIBLE
        `}</TypeSlab>
        <TypeSlab>{`
          👞👟👠👡👢 Wear your 👞👟👠👡👢
          browser
          shoes
          👞👟👠👡👢 to work 👞👟👠👡👢
          |                         |
          |!                                                                               Thanks, _why|
        `}</TypeSlab>
        <TypeSlab color="Sky">{`
          |    ⏳    |
        `}</TypeSlab>
        <TypeSlab color="Sky" kind="uniform">{`
          Codepen
          JSBin
          Plunkr
          JSFiddle
          💖💖💖💖
        `}</TypeSlab>
        <TypeSlab color="Sky" kind="uniform" font="thinner">{`
          CodePen heroes:
          | |\n| |
          !ANA TUDOR
          thebabydino
          | |\n| |
          !CHRIS WRIGHT
          chriswrightdesign
          | |\n| |
          !YOKSEL
          yoksel
        `}</TypeSlab>
        <TypeSlab color="Sky" font="thinner">{`
          !VIEW SOURCE IS THE SINGLE MOST POWERFUL
          !CONCEPT ON THE WEB. SITES LIKE
          !CODEPEN & JSBIN SAY TO A NEWCOMER:
          !YOU MIGHT NOT UNDERSTAND THIS, BUT
          THERE ARE NO SECRETS HERE.
        `}</TypeSlab>
        <TypeSlab color="Sky">{`
          💖💖💖💖💖
          | |
          JSPM
          |            |
          💖💖💖💖💖
        `}</TypeSlab>
        <TypeSlab color="Finch" kind="uniform">{`
          JavaScript for newcomers: 🚮
          | |\n| |\n| |
          • No module system
          | |\n| |
          • Async = callback hell
          | |\n| |
          • Terrible data structures
          | |\n| |
          • No real OO
          | |\n| |
          • Lots of footguns
          | |\n| |
          • Browser shenanigans
        `}</TypeSlab>
        <TypeSlab color="Finch" kind="uniform" font="monospaced">{`
          !RUBY:
          | |\n| |
          # Find the first title-case word
          result = line.split(' ').find { |w| w =~ /^[A-Z]/ }
          | |\n| |\n| |
          !JS:
          | |\n| |
          var result, arr = line.split(' ');
          for (var i = 0; i < arr.length; i++) {
          |  if (arr[i].match(/^[A-Z]/)) {
          |    result = arr[i];
          | |
          |    break;
          | |
          |  }
          | |
          };
        `}</TypeSlab>
        <TypeSlab color="Finch">{`
          StackOverflow is now mostly
          out of date
        `}</TypeSlab>
        <TypeSlab color="Finch">{`
          🚮
          Please dispose of JavaScript
          thoughtfully
        `}</TypeSlab>
        <TypeSlab color="Sky">{`
          ES6
          #HOPE
        `}</TypeSlab>
        <TypeSlab color="Sky" kind="uniform" font="thinner">{`
          ES6 IS ✅
          | |\n| |
          • EASY TO RECOGNISE
          !   ES6, =>, class, import
          | |\n| |
          • MODERN BROWSER APIS
          !   2014 onwards, usually
          | |\n| |
          • FRIENDLIER
          !   class sugar, string interpolation,
          !   this-binding with =>, Promises,
          !   polyfilled-only (for the moment)
          | |\n| |
          • MORE POWERFUL
          !   MODULES!!!!111one, a real
          !   Map & Set class
        `}</TypeSlab>
        <TypeSlab color="Sky">{`
          But how?
          |                 |
          |                 |
          |      😳      |
          |              |
          preprocessors are
          46 steps too many
        `}</TypeSlab>
        <TypeSlab color="Sky">{`
          incremental
          complexity
        `}</TypeSlab>
        <TypeSlab color="Sky">{`
          |                  demo time                  |
        `}</TypeSlab>
        <TypeSlab color="Finch">{`
          |      😎      |
          |                      |
          It might be friendly enough,
          but Is it powerful
          enough for me?
        `}</TypeSlab>
        <TypeSlab color="Finch" kind="uniform" font="thinner">{`
          TYPESLAB.COM:
          | |\n| |
          !<10 REACT COMPONENTS
          | |\n| |
          !504 FILES LOADED IN THE BROWSER
          | |\n| |
          !~6 SECONDS REFRESH
        `}</TypeSlab>
        <TypeSlab color="Finch">{`
          😎 ➡️ 😞
        `}</TypeSlab>
        <TypeSlab color="Finch" kind="uniform">{`
          Gulp &
          Webpack &
          Grunt &
          Harp &
          others
          are better. 😞
        `}</TypeSlab>
        <TypeSlab color="Ocean">{`
          !"If we don't use the tools that
          We tell others to use
          !we establish them as lesser. We're saying
          You'll need to re-learn this
          !once you do serious work like me.    |
          |                     |
          !          Our tools should gradually
          increase in power
          !as a person becomes more familiar
          !with them, all the way until they're
          good enough for us, too"
          |                     |
          !                                                          — Glen Maddern, right now.
        `}</TypeSlab>
        <TypeSlab color="Sky">{`
          Friendlier,
          MORE          |
          Powerful
        `}</TypeSlab>
        <TypeSlab color="Sky" kind="uniform" font="thinner">{`
          !• jspm-server
          | |\n| |
          !• plugin-live-jsx
          | |\n| |
          !• plugin-postcss
          | |\n| |
          !• plugin-autoprefixer (soon)
          | |\n| |
          !• plugin-css-next (soon)
          | |\n| |
        `}</TypeSlab>
        <TypeSlab color="Sky">{`
          |                  demo time                  |
        `}</TypeSlab>
        <TypeSlab color="Sky">{`
          This whole talk boils down to
          ~100 lines
          of original JavaScript
        `}</TypeSlab>
        <TypeSlab color="Sky">{`
          !Make the powerful things
          more friendly
          |                      |
          ~
          !Make the friendly things
          more powerful
        `}</TypeSlab>
        <TypeSlab color="Ocean">{`
          |     Why do we care?     |
        `}</TypeSlab>
        <TypeSlab color="Ocean" font="thinner" kind="uniform">{`
          !IF WE STARTED TAKING PRIDE IN
          MAKING OUR TOOLS
          !FRIENDLY, ACCESSIBLE &
          !WELCOMING, MAYBE WE'D
          MAKE OURSELVES
          !THOSE THINGS AS WELL
        `}</TypeSlab>
        <TypeSlab color="Ocean">{`
          Thank you.
          I'm @glenmaddern,
          please hit me up online if you have questions
        `}</TypeSlab>
      </SlideShow>
    </div>
  }
}
