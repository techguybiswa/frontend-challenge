import React, { Component } from 'react';
import { DatePicker } from 'antd';
import AppLayout from "./layout/Layout"
import Home from "./pages/Home"
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

class MyComponent extends Component {
  render() {
    return (
      <AppLayout>
        <Home/>
      </AppLayout>
    );
  }
}

export default MyComponent;