import React from 'react'
import Output from 'typeslab/src/lib/components/output.jsx!'
import Colors from 'typeslab/src/lib/colors'
import './type-slab.css!'
const Fonts = {
  default: {
    main: {
      name: "Avenir Next",
      weight: 700,
      caps: true
    },
    alt: {
      name: "Klinic Slab",
      weight: 200,
      caps: false
    }
  },
  thinner: {
    main: {
      name: "Avenir Next",
      weight: 700,
      caps: false
    },
    alt: {
      name: "Avenir Next",
      weight: 400,
      caps: false
    }
  },
  monospaced: {
    main: {
      name: "Fira Mono",
      weight: 400,
      caps: false
    },
    alt: {
      name: "Fira Mono",
      weight: 800,
      caps: false
    }
  }
}

export default class TypeSlab extends React.Component {
  constructor() {
    super()
  }

  render() {
    let font = Fonts[this.props.font || 'default'],
      lines = this.props.children.split("\n").map(l => l.replace(/^ *| *$/g, '').replace(/^\||\|$/g, '')).filter(x => x !== "" && x !== "!"),
      color = this.props.color || "Paper",
      chosenColor = Colors.filter(x => x.name == color)[0]

    return <div className="TypeSlab" style={{backgroundColor: chosenColor.background}}>
      <Output noBorder width={960} lines={lines} chosenColor={chosenColor} chosenFont={font} mode={this.props.kind || "justified"}></Output>
    </div>
  }
}
