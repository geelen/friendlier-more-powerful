import React from 'react'
import Output from 'typeslab/src/lib/components/output.jsx!'
import Colors from 'typeslab/src/lib/colors'
import './type-slab.css!'

export default class TypeSlab extends React.Component {
  constructor() {
    super()
  }
  render() {
    let font = {
      main: {
        name: "Klinic Slab",
        weight: 700,
        caps: true
      },
      alt: {
        name: "Klinic Slab",
        weight: 200,
        caps: false
      }
    },
      lines = this.props.children.split("\n").map(l => l.replace(/^ *| *$/g,'').replace(/\|/g,'')).filter(x => x !== "" && x !== "!"),
      color = this.props.color || "Paper",
      chosenColor = Colors.filter(x => x.name == color)[0]

    return <div className="TypeSlab" style={{backgroundColor: chosenColor.background}}>
      <Output noBorder width={960} lines={lines} chosenColor={chosenColor} chosenFont={font}></Output>
    </div>
  }
}
