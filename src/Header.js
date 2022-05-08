import React, { Component } from 'react';
import '../src/Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className='headerbg'>
        <span className='heading'>Weather App</span>
      </div>
    );
  }
}
export default Header;
