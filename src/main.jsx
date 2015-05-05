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
        <TypeSlab color="Ocean">{`
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
          Hobbyist
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
          Hobbyist
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
          — The point is to be —
          inspired
          by what's possible
          — so don't get in the way! —
        `}</TypeSlab>
        <TypeSlab color="Ocean">{`
          !"There are two types of web:
          The professional web
          !which is the one we all inhabit, and
          The consumer web.
          !The consumer web only allows publishing of content
          on other people's platforms,
          on other people's terms.
          |                                |
          !I believe there ought to be another,
          A Producer Web
          !where people can make their own sites
          !as easily as they can post an update on Facebook"
          |                     |
          !                                 — Alex Feyerke|
          !                                    Step Off This Hurtling Machine, JSConfAU 2014
          !                                          (Paraphrased, badly. Watch the video. Srsly)
        `}</TypeSlab>
        <TypeSlab kind="uniform">{`
          PRODUCER WEB
          | |
          | |
          • Making your own sites
          | |
          • Using open source tools
          | |
          • Supported & encouraged by us
          | |
          • Hosted cheaply & simply
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
          💖💖💖💖💖
        `}</TypeSlab>
        <TypeSlab color="Sky">{`
          View Source
          !is the single most powerful
          !concept on the web. Sites like
          !Codepen & JSBin say to a newcomer:
          !You might not understand this, but
          there are no secrets here.
        `}</TypeSlab>
        <TypeSlab color="Sky" kind="uniform">{`
          Ana Tudor
          Chris Wright
          Yoksel
          💖💖💖💖💖
        `}</TypeSlab>
        <TypeSlab color="Sky">{`
          💖💖💖💖💖
          | |
          JSPM
          |            |
          💖💖💖💖💖
        `}</TypeSlab>
        <TypeSlab color="Finch" kind="uniform">{`
          JavaScript for hobbyists: 🚮
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
          We have built up an incredible
          LEGACY
          of tips, performance considerations,
          browser incompatibilities, workarounds
          rules-of-thumb and war stories that are
          NO LONGER RELEVANT
          and simply serve to misinform and
          confuse people
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
          45 steps too many
        `}</TypeSlab>
        <TypeSlab color="Sky">{`
          |                  demo time                  |
        `}</TypeSlab>
        <TypeSlab color="Finch">{`
        `}</TypeSlab>
        <TypeSlab color="Finch">{`
          Friendly,
          not yet
          powerful
        `}</TypeSlab>
        <TypeSlab color="Finch" kind="uniform">{`
          Simple project
          1 fetch & 1 display
          147 files
          ~3 seconds refresh
        `}</TypeSlab>
        <TypeSlab color="Finch">{`
          😎 ➡️ 😞
        `}</TypeSlab>
        <TypeSlab color="Finch">{`
          Optimising your feedback cycle
          is one of the most important things
          you can do to increase
          productivity,
          quality, focus, etc.
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
        <TypeSlab color="Sky">{`
          |                  demo time                  |
        `}</TypeSlab>
        <TypeSlab color="Sky" kind="uniform" font="thinner">{`
          !• jspm-server
          | |\n| |
          !• plugin-live-jsx
          | |\n| |
          !• plugin-postcss
          | |\n| |
          !• plugin-autoprefixer
          | |\n| |
          !• plugin-scss-lite
          | |\n| |
          !• typeslab
        `}</TypeSlab>
        <TypeSlab color="Sky">{`
          This whole talk boils down to
          ~100 lines
          of original JavaScript
        `}</TypeSlab>
        <TypeSlab color="Ocean">{`
          |     Why do we care?     |
        `}</TypeSlab>
        <TypeSlab color="Sky">{`
          !Make the powerful things
          more friendly
          |                      |
          ~
          !Make the friendly things
          more powerful
        `}</TypeSlab>
      </SlideShow>
    </div>
  }
}
