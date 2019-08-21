import React from 'react';
import ReactDOM from 'react-dom';
import { createUser } from './api';

import './styles.css';

class C1 extends React.Component {
  render() {
    return (
      <div>
        {this.props.items.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
    );
  }
}

class C2 extends React.Component {
  state = {
    username: 'temp user',
    password: 'temp password'
  };

  handleClick = () => {
    this.setState({ username: `new user ${Date.now()}` });
    this.setState({ password: `new password ${Date.now()}` });
    createUser(this.state.username, this.state.password);
  };

  render() {
    return (
      <div>
        <div>username: {this.state.username}</div>
        <div>password: {this.state.password}</div>
        <button onClick={this.handleClick}>Generate new User</button>
      </div>
    );
  }
}

class C3 extends React.Component {
  state = {
    height: 0,
    width: 0
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ height: window.innerHeight, width: window.innerWidth });
  };

  render() {
    return (
      <div>
        <div>height: {this.state.height}</div>
        <div>width: {this.state.width}</div>
      </div>
    );
  }
}

class C4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected
    };
  }

  changeSelection = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    return (
      <div>
        {this.state.selected && <div>Component is selected: true</div>}
        {!this.state.selected && <div>Component is selected: false</div>}
        <button onClick={this.changeSelection}>Change Selection</button>
      </div>
    );
  }
}

class C5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 0
    };

    this.onAnimate = this.onAnimate.bind(this);
    this.maxLeft = window.innerWidth - 100;
  }

  onAnimate() {
    let left = 0;

    const interval = setInterval(() => {
      if (left === this.maxLeft) {
        clearInterval(interval);
        return;
      }
      left++;
      this.setState({ left });
    });
  }

  render() {
    return (
      <>
        <div
          style={{
            background: 'blue',
            width: '50px',
            height: '50px',
            marginLeft: `${this.state.left}px`
          }}
        />
        <button onClick={this.onAnimate}>Animate</button>
        <button onClick={() => this.setState({ left: 0 })}>Reset</button>
      </>
    );
  }
}

function App() {
  return (
    <div className="App">
      ============================== C1 ==============================
      <C1
        items={[{ name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' }]}
      />
      ============================== C2 ==============================
      <C2 />
      ============================== C3 ==============================
      <C3 />
      ============================== C4 ==============================
      <C4 selected />
      ============================== C5 ==============================
      <C5 />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
