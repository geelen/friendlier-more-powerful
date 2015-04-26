import React from 'react'
import Output from 'typeslab/src/lib/components/output.jsx!'
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
      lines = this.props.children.split("|").filter((w,i) => i % 2 == 1)

    return <div className="TypeSlab">
      <Output noBorder width={960} lines={lines} chosenColor={{background: "black", foreground: "red"}} chosenFont={font}></Output>
    </div>
  }
}
