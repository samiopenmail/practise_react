import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
export default class STATE extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:0,
        };
        console.log("here is constructor");
    }
    handleIncrement=()=> {
        this.setState({count:this.state.count+1});
        this.setState({count2:this.state.count2+3});
        console.log('this is handleincrement');        
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <h1>{this.state.count2}</h1>
        <Button onClick={this.handleIncrement}>increase</Button>

      </div>
    )
  }
}
