import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './App.css';
const axios = require('axios');
export default class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      text:null,
      data:null
      
      
      
    };
  }

  validateForm() {
    return this.state.text.length > 0;
  }

  handleChange = event => {


    this.setState({
      text: event.target.value

    });
  }
  

Decryption =event =>
  {
    event.preventDefault();
  
  // console.log(this.state.value);
  
    axios.post('http://localhost:4000/Decryption', {user :this.state.text})
    .then(res => {
    this.setState({data:res.data});
  
      console.log(res.data);
    })
  }



  Encryption = event => {
   
    event.preventDefault();
   
     var  user = this.state.text;
   // console.log(user);
    axios.post('http://localhost:4000/Encryption', {user})
    .then(res => {
       this.setState({data :res.data});

      console.log(res);
      console.log(res.data);
    })

   
    }


  render() {
  //   let  myData = this.state.data;
    
  //   let listItems=null;

  // if(myData!=null){
  //   console.log(myData)
  //  listItems=
  //    Object.keys(myData).map((number,index) =>
  //    <div className={number.key}>
  //    <p>{number.value}</p>
  //      <p>{number.key}</p>
  //      </div>
  // //  console.log(index)
   
  // );
  // console.log(listItems);
  // }
  // else
  // {
  //  listItems=<p></p>

  // }


    return (
      <div className="testbox">
        <form >
          <FormGroup controlId="text" bsSize="large">
            <text>Enter your text Here</text>
            <FormControl
              autoFocus
              type="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </FormGroup>

          <Button
            block
            bsSize="large"
            disabled={!this.validateForm}
            onClick={this.Decryption}
            type="submit"
          >
            Decrypt Your text
          </Button>

          <Button
            block
            bsSize="large"
            disabled={!this.validateForm}
            onClick={this.Encryption}
            type="submit"
          >
            Encrypt Your text
          </Button>

         {/* {listItems} */}
         
        </form>
      </div>
    );
  }
}