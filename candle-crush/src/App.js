import logo from './logo.svg';
import './App.css';
import Main from './containers/Main'
import React from 'react'
import NavBar from './components/NavBar'
import {withRouter, BrowserRouter} from 'react-router-dom'

class App extends React.Component {
  state = {
    currentUser: null,
    username: "",
    password: "",
    user_type: "basic"
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if(token) {
      fetch('http://localhost:3000/api/v1/users', {
        method: "GET",
        headers: { Authorization: `Bearer ${token}`}
      })
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            currentUser: data.user
          })
        })
    }
  }


  logoutHandler = () => {
    console.log('loggin out...')
    localStorage.removeItem('token')
    this.setState({
      currentUser: null
    })
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

  signupSubmit = (e) => {
    e.preventDefault()

    let userObj = { 
      
      user: {

      username: this.state.username,
      password: this.state.password,
      user_type: this.state.user_type
    }
    
  }

    let config = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(userObj)
    }

    fetch('http://localhost:3000/api/v1/users', config).then(resp => resp.json()).
    then(data => {
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
          <NavBar currentUser={this.state.currentUser} logoutHandler={this.logoutHandler} />
          <Main currentUser={this.state.currentUser} loginSubmit={this.loginSubmit} signupSubmit={this.signupSubmit} inputHandler={this.inputChangeHandler} username={this.state.username} password={this.state.password} user_type={this.state.user_type} />
      
      
        </div>
    
  );
}
}

export default withRouter(App);
