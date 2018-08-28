import React, { Component } from "react";
import { Router } from "./main";
import store from "./redux/store";
import { Provider } from "react-redux";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
