import logo from './logo.svg';
import './App.css';
import Main from './containers/Main'
import React from 'react'
import NavBar from './components/NavBar'
import {withRouter, BrowserRouter} from 'react-router-dom'

class App extends React.Component {
  state = {
    currentUser: {},
    username: "",
    password: ""
  }

   
  
  inputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  loginSubmit = (e) => {

    e.preventDefault()
   
    
    let userObj = {
      username: this.state.username,
        password: this.state.password

    }
    let config = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(userObj)

      
    }
    fetch('http://localhost:3000/api/v1/login', config)
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.jwt)

      this.setState({
        username: "",
        password: "",
        currentUser: data.user
        
      }, () => {
        this.props.history.push('/candles')
      })


    })
  }
    



  
  render() {
    console.log(this.state)
    return (
      
        <div className="App">
          <NavBar/>
          <Main loginSubmit={this.loginSubmit} loginInputHandler={this.inputChangeHandler} username={this.state.username} password={this.state.password}/>
      
      
        </div>
    
  );
}
}

export default withRouter(App);
