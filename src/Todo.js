import React, { Component } from 'react'
import './App.css';
export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state ={
            value : "",
            todoValue : []
        }
    }
    onChangeHandler =(e)=>{
        this.setState({
            value :e.target.value 
        })
        // var myValue = 
        // console.log(myValue);
    }

    addData = (e)=>{
        var inputValue = this.state.value;
        var instanceValue = this.state.todoValue;
        instanceValue.push(inputValue);
        this.setState({
           todoValue : instanceValue 
        })
        console.log(this.state.todoValue);
    }

    deleteData = (e)=>{
        var id = e.target.id;
        var instanceValue = this.state.todoValue;
        instanceValue.splice(id,1);
        this.setState({
            todoValue : instanceValue 
         })

    }
    render() {
        var itemList = this.state.todoValue.map((e,i)=>
    <li key={i}>{e}  <span id={i} onClick={this.deleteData} style={{color: "red"}}>✖</span></li>
        )
        return (
            <div>
                <div className="header text-center text-light p-2 font-weight-bold"><h4>REACT JS TODO APP</h4> </div>
                <div className="body">
                   <ul>
                        {itemList} 
                    </ul>
                </div>
                <div className="footer text-center position-fixed p-3 w-100">
                    <input type="text" value={this.state.value} onChange={this.onChangeHandler} className="w-75"/>
                    <button className="btn rounded-circle text-light" onClick={this.addData}>+</button>
                </div>



                
               
            </div>
        )
    }
}
