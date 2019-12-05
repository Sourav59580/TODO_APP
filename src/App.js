import React, { Component } from 'react'
import Todo from './Todo';
export default class App extends Component {
  render() {
    return (
      <div>
           <Todo />
          {/* <div className="container-fluid text-light text-center d-flex justify-content-center align-items-center" id="header">
            <h4>REACT JS TODO APP</h4>
          </div>
          <div className="container-fluid" id="body">

          </div>
          <div className="container-fluid text-light pt-2" id="header">
            <input type="text" className="form-control" id="inputField"/><i></i>
          </div> */}
      </div>
    )
  }
}
