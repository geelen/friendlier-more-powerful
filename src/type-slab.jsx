import React from 'react'
import Output from 'typeslab/src/lib/components/output.jsx!'
import Colors from 'typeslab/src/lib/colors'
import './type-slab.css!'

export default class TypeSlab extends React.Component {
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
    },
      lines = this.props.children.split("\n").map(l => l.replace(/^ *| *$/g,'').replace(/\|/g,'')).filter(x => x !== "" && x !== "!"),
      color = Colors.filter(x => x.name == "Paper")[0]

    return <div className="TypeSlab" style={{backgroundColor: color.background}}>
      <Output noBorder width={960} lines={lines} chosenColor={color} chosenFont={font}></Output>
    </div>
  }
}
