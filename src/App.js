import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: ''}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      key: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    })
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>ToDo List</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input id="new-todo" placeholder="Add new tasks" value={this.state.text} onChange={this.handleChange}/>
          <button type="submit" onClick={this.handleSubmit}>ADD</button>
        </form>
        <div className="content">
          <ul>
            {this.state.items.map(item => (
              <li key={item.key}><span onClick={() => this.deleteItem(item.key)}>&#10006;</span> {item.text}</li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}


  

export default App;

