import React, { Component } from 'react';
import { Button, DatePicker } from 'antd';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{ margin: 100 }}>
        <h1>AntDesign Demo</h1>
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
        </div>
        <div>
          <DatePicker />
        </div>
      </div>
    );
  }
}

export default App;
