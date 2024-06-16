import React from 'react';
import './style.css'
export default class Menu extends React.Component {
  render() {
    let handleClick =(e)=>{
      e.preventDefault();
      let text = e.target.value ;
      this.props.chooseVideo(text)
    }
    return (
      <form onClick={handleClick}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}