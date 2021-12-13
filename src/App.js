import logo from './logo.svg';
import './App.css';
import {React, Component} from "react";
import Contacts from './components/contacts';

class AppA extends Component {
  state = {
    contacts: []
  }
  
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>AJ's Sample App 2</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Contacts contacts={this.state.contacts} />
    </div>
  );
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
}

export default AppA;
