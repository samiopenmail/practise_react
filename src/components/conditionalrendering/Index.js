import React, { Component } from 'react'
import HomePage from './HomePage';
import LoginPage from './LoginPage';
export default class Index extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoggedin:false
        };
    }
    
  render() {
    const element = this.state.isLoggedin? <HomePage/>:<LoginPage/>;    
    return (
      <div>
        {element}
      </div>
    )
  }
}
