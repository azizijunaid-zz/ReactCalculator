import React, {Component} from 'react';
import './../styles/style.css';
class CustomButton extends Component {
    render() {
      return (
       <button className="square">{this.props.text}</button>
      )
    };
}

export default CustomButton