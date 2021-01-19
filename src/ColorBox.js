import React, { Component } from 'react';

export default class ColorBox extends Component {

<<<<<<< HEAD
  render() {
    if(this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.props.opacity - 0.1} />
        </div>
      )
    } else {
      return null
    }
=======
  state = {
    todos: [

    ]
  }

  render() {
    const op = this.props.opacity ;
    if(op >= 0.2)
    {
      return
      (
      <div className="color-box" style={{opacity: op }}>
        <ColorBox opacity={op} />
      </div>
      )
    }
    else
    return null
>>>>>>> a4422759f857b860267f4f301082086786af75a5
  }
}
