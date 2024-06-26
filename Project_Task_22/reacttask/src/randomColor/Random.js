import React from 'react';
import './style.css';
import Button from './Button';
 export default class Random extends React.Component {
  constructor(){
    super();
    this.state = {
      color:[0,33,220]
    }
  }
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
           Your Color is  {this.formatColor(this.state.color)}
        </h1>
        <Button light={this.isLight()} onClick={()=>{this.setState({color: this.chooseColor()})}}/>
      </div>
    );
  }
}

 