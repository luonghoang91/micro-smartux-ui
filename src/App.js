import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const defaultHistory = createBrowserHistory();

class App extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <Router history={this.props.history || defaultHistory}>
        <div>
          Hello Smartux
        </div>
      </Router>
    );

  }
}

export default App;
